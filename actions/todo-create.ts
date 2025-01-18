"use server";
import * as z from "zod";
import { CreateTodoSchema } from "@/types/schema";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const CreateTodo = async (values: z.infer<typeof CreateTodoSchema>) => {
  const validatedFields = CreateTodoSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "invalid fields",
    };
  }

  const { title } = validatedFields.data!;

  await db.todo.create({
    data: {
      title,
    },
  });

  revalidatePath("/posts");

  return { success: "New todo created!" };
};
