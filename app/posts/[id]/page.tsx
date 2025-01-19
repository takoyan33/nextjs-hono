// "use client";

import { TodoActions } from "@/app/components/todo-actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
// import { useEffect, useState } from "react";
// import { PlusCircle } from "lucide-react";
import { db } from "@/lib/db";

const getTodo = async (id: any) => {
  const todo = await db.todo.findUnique({
    where: {
      id: id, // id で検索
    },
  });
  return todo;
};

export default async function Home({ params }: { params: { id: string } }) {
  console.log(params);
  const id: string | undefined = Array.isArray(params?.id)
    ? params.id[0]
    : params?.id;
  const todo = await getTodo(id);
  // interface Post {
  //   id: number;
  //   title: string;
  //   completed: boolean;
  // }

  // const [post, setPost] = useState<Post | null>(null);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     if (id) {
  //       const res = await fetch(`/api/posts/${id}`);
  //       const data = await res.json();
  //       setPost(data);
  //     }
  //   };
  //   fetchPosts();
  // }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link href={"/posts/"}>
          <Button variant="outline">戻る</Button>
        </Link>
        <h1 className="text-3xl font-bold text-center text-primary mb-8">
          投稿詳細
        </h1>

        <div className="grid gap-6 mb-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{todo?.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                状態: {todo?.completed ? "完了" : "未完了"}
              </p>
            </CardContent>
            <CardFooter>
              <TodoActions todoId={id} isCompleted={todo?.completed} />
              <Link href={`/posts/edit/${id}`}>
                <Button variant="outline">編集</Button>
              </Link>
              {/* <Link href={`/posts/delete`}>
                <Button variant="outline">削除</Button>
              </Link> */}
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
