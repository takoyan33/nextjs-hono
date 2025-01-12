"use client";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { PlusCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  // interface Post {
  //   id: number;
  //   title: string;
  //   completed: boolean;
  // }

  // const [post, setPost] = useState<Post>();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await fetch("/api/post");
  //     const data = await res.json();
  //     setPost(data);
  //   };

  //   fetchPosts();
  // }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-primary mb-8">
          投稿詳細
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* 
            <Card
              key={post.id}
              className="shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  状態: {post.completed ? "完了" : "未完了"}
                </p>
              </CardContent>
              <CardFooter>
                <Link href={`/posts/${post.id}`}>
                  <Button variant="outline">詳細を見る</Button>
                </Link>
                <Link href={`/posts/edit`}>
                  <Button variant="outline">編集</Button>
                </Link>
              </CardFooter>
            </Card>
           */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
