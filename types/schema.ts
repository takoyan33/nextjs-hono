import * as z from "zod";

export const CreateTodoSchema = z.object({
  title: z.string().min(1, {
    message: "title is required",
  }),
});
