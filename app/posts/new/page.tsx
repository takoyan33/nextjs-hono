"use client";

import { Slash } from "lucide-react";
import Link from "next/link";
import { TodoForm } from "@/app/components/todo-form";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen p-4">
      <Link href={"/posts/"}>
        <Button variant="outline" className="mb-4">
          戻る
        </Button>
      </Link>
      <Breadcrumb className="mt-8 mb-8">
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
            <BreadcrumbPage>新規投稿</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="mb-8 text-center font-bold text-3xl text-primary">
        新規投稿
      </h2>
      <TodoForm />
    </div>
  );
}
