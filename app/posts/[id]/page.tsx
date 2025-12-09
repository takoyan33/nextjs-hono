// "use client";

import { Slash } from "lucide-react";
import Link from "next/link";
import { TodoActions } from "@/app/components/todo-actions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";

const getTodo = async (id: string | undefined) => {
  const todo = await db.todo.findUnique({
    where: {
      id: id, // id で検索
    },
  });
  return todo;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Home({ params }: any) {
  const { id } = await params;
  const todo = await getTodo(id || "");

  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <main className="container mx-auto flex-grow px-4 py-8">
        <Link href={"/posts/"}>
          <Button variant="outline">戻る</Button>
        </Link>
        <Breadcrumb className="mt-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/posts">投稿一覧</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{todo?.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h2 className="mb-8 text-center font-bold text-3xl text-primary">
          投稿詳細
        </h2>

        <div className="mb-8 grid gap-6">
          <Card className="shadow-md transition-shadow duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>{todo?.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                状態: {todo?.isCompleted ? "完了" : "未完了"}
              </p>
            </CardContent>
            <CardFooter>
              <TodoActions todoId={id || ""} isCompleted={todo?.isCompleted} />
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
