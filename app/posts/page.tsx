import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
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
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          ブログ投稿一覧
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {todos?.map(
            (todo: { id: number; title: string; isCompleted: boolean }) => (
              <Card
                key={todo.id}
                className="shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle>{todo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    状態: {todo.isCompleted ? "完了" : "未完了"}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/posts/${todo.id}`}>
                    <Button variant="outline">詳細</Button>
                  </Link>
                </CardFooter>
              </Card>
            )
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
