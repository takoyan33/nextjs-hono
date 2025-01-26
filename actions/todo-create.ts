"use server";
import * as z from "zod";
import { CreateTodoSchema } from "@/types/schema";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

export const createTodo = async (values: z.infer<typeof CreateTodoSchema>) => {
  const { userId, orgId } = await auth();

  if (!userId || !orgId) {
    return {
      error: "unauthorized",
    };
  }

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
      clerkId: userId,
      orgId
    },
  });

  revalidatePath("/posts");

  return { success: "New todo created!" };
};
