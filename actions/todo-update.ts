"use server";

import { revalidatePath } from "next/cache";
import type * as z from "zod";
import { db } from "@/lib/db";
import { UpdateTodoSchema } from "@/types/schema";

export const updateTodo = async (values: z.infer<typeof UpdateTodoSchema>) => {
  const validatedFields = UpdateTodoSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "invalid fields",
    };
  }

  const { id, isCompleted } = validatedFields.data;

  await db.todo.update({
    where: {
      id,
    },
    data: {
      isCompleted: !isCompleted,
    },
  });

  //Next.js のキャッシュを無効化して再フェッチ
  revalidatePath("/posts");

  return { success: "Todo Updated!" };
};
