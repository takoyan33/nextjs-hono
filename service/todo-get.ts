import { db } from "@/lib/db";

export const getTodos = async () => {
  const todos = await db.todo.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
  return todos;
};

export const getTodoByOrgId = async (orgId: string | null | undefined) => {
  if (!orgId) {
    return [];
  }

  const todos = await db.todo.findMany({
    where: {
      orgId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  return todos;
};
