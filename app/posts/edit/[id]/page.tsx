import Link from "next/link";
import { TodoEditForm } from "@/app/components/todo-edit-form";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

const getTodo = async (id: string | undefined) => {
  const todo = await db.todo.findUnique({
    where: {
      id: id, // id で検索
    },
  });
  return todo;
};

export default async function Home({ params }: { params: { id: string } }) {
  const { id } = await params;
  const todo = await getTodo(id || "");

  return (
    <div className="container mx-auto min-h-screen p-4">
      <Link href={"/posts/"}>
        <Button variant="outline" className="mb-4">
          戻る
        </Button>
      </Link>
      <TodoEditForm todo={todo} />
    </div>
  );
}
