"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TodoForm } from "@/app/components/todo-form";

export default function Home() {
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <Link href={"/posts/"}>
        <Button variant="outline" className="mb-4">
          戻る
        </Button>
      </Link>
      <TodoForm />
    </div>
  );
}
