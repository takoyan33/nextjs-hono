"use server";

import * as z from "zod";
import { UpdateTodoSchema } from "@/types/schema";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const updateTodo = async (values: z.infer<typeof UpdateTodoSchema>) => {
  const validatedFields = UpdateTodoSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "invalid fields",
    };
  }

  const { id, isCompleted } = validatedFields.data;

  console.log(isCompleted)

  await db.todo.update({
    where: {
      id,
    },
    data: {
      isCompleted: !isCompleted,
    },
  });

  revalidatePath("/posts");

  return { success: "Todo Updated!" };
};
