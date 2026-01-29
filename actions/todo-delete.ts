"use server";

import { revalidatePath } from "next/cache";
import type * as z from "zod";
import { db } from "@/lib/db";
import { DeleteTodoSchema } from "@/types/schema";

export const deleteTodo = async (values: z.infer<typeof DeleteTodoSchema>) => {
  const validatedFields = DeleteTodoSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "invalid fields",
    };
  }

  const { id } = validatedFields.data;

  await db.todo.delete({
    where: {
      id,
    },
  });

  //Next.js のキャッシュを無効化して再フェッチ
  revalidatePath("/posts");

  return { success: "Todo Deleted!" };
};
