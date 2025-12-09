import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";

const getTodos = async () => {
  const todos = await db.todo.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
  return todos;
};

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <main className="container mx-auto flex-grow px-4 py-8">
        <h2 className="mb-8 text-center font-bold text-3xl text-primary">
          ブログ投稿一覧
        </h2>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {todos?.map(
            (todo: { id: number; title: string; isCompleted: boolean }) => (
              <Card
                key={todo.id}
                className="shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle>{todo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    状態: {todo.isCompleted ? "完了" : "未完了"}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/posts/${todo.id}`}>
                    <Button variant="outline">詳細</Button>
                  </Link>
                </CardFooter>
              </Card>
            ),
          )}
        </div>

        <div className="text-center">
          <Link href="/posts/new">
            <Button className="px-6 py-3 text-lg" size="lg">
              <PlusCircle className="mr-2 h-5 w-5" />
              新規投稿
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
