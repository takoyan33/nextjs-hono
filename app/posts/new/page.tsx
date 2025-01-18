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
      {/* <Card className="w-full max-w-md mx-auto">
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
      </Card> */}
    </div>
  );
}
