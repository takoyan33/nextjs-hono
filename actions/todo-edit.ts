"use server";

import { revalidatePath } from "next/cache";
import type * as z from "zod";
import { db } from "@/lib/db";
import { EditTodoSchema } from "@/types/schema";

export const editTodo = async (values: z.infer<typeof EditTodoSchema>) => {
  const validatedFields = EditTodoSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "invalid fields",
    };
  }

  const { id, isCompleted, title } = validatedFields.data;

  await db.todo.update({
    where: {
      id,
    },
    data: {
      isCompleted: isCompleted,
      title: title,
    },
  });

  //Next.js のキャッシュを無効化して再フェッチ
  revalidatePath("/posts");

  return { success: "Todo Edit!" };
};
