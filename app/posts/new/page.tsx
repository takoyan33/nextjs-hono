"use client";
import { useRouter } from "next/navigation";
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

export default function Home() {
  const router = useRouter();

  return (
    <div className="container mx-auto p-4">
      <Button variant="outline" onClick={() => router.back()} className="mb-4">
        戻る
      </Button>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">新規投稿</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="title">タイトル</Label>
          <Input
            id="title"
            type="text"
            placeholder="タイトルを入力してください"
            required
          />
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            投稿
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
