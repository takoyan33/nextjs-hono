"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TodoForm } from "@/app/components/todo-form";
import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Home() {
  return (
    <div className="container mx-auto p-4 min-h-screen">
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
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        新規投稿
      </h2>
      <TodoForm />
    </div>
  );
}
