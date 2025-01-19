import * as z from "zod";

export const CreateTodoSchema = z.object({
  title: z.string().min(1, {
    message: "title is required",
  }),
});

export const DeleteTodoSchema = z.object({
  id: z.string({
    required_error: "id is required",
    invalid_type_error: "id is required",
  }),
});

export const UpdateTodoSchema = z.object({
  id: z.string({}),
  isCompleted: z.boolean({
    required_error: "id is required",
    invalid_type_error: "id is required",
  }),
});
