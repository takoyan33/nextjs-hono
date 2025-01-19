"use server";

import * as z from "zod";
import { DeleteTodoSchema } from "@/types/schema";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

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
      id
    },
  });

  revalidatePath("/posts");

  return { success: "Todo Deleted!" };
};
