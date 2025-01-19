"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Home() {
  interface Post {
    id: number;
    title: string;
    completed: boolean;
  }
  const params = useParams();
  const id: string | undefined = Array.isArray(params?.id)
    ? params.id[0]
    : params?.id;

  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const fetchPosts = async () => {
      if (id) {
        const res = await fetch(`/api/posts/${id}`);
        const data = await res.json();
        setPost(data);
      }
    };
    fetchPosts();
  }, [id]);
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <Link href={"/posts/"}>
        <Button variant="outline" className="mb-4">
          戻る
        </Button>
      </Link>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">編集</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="title">タイトル</Label>
          <Input
            id="title"
            type="text"
            placeholder="タイトルを入力してください"
            defaultValue={post?.title}
            required
          />
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            編集
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
