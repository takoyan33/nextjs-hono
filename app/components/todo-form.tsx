"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { CreateTodoSchema } from "@/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { createTodo } from "@/actions/todo-create";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const TodoForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof CreateTodoSchema>>({
    resolver: zodResolver(CreateTodoSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = (values: z.infer<typeof CreateTodoSchema>) => {
    startTransition(() => {
      createTodo(values)
        .then((data) => {
          toast.success(data.success);
          router.push("/posts");
        })
        .catch((data) => {
          if (data.error) {
            toast.error(data.error);
          } else {
            toast.error("失敗");
          }
        });
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-x-1 w-full max-w-xl"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => {
            return (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    type="text"
                    placeholder="Enter your todo"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit" disabled={isPending}>
          投稿
        </Button>
      </form>
    </Form>
  );
};
