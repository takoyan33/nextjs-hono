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
import { db } from "@/lib/db";
import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
    <div className="flex flex-col min-h-screen flex-1">
      <main className="flex-grow container mx-auto px-4 py-8">
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
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          投稿詳細
        </h2>

        <div className="grid gap-6 mb-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{todo?.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
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
