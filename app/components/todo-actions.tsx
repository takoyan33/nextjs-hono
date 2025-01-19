"use client";

import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { deleteTodo } from "@/actions/todo-delete";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface TodoActionsProps {
  todoId: string;
  isCompleted: boolean | undefined;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TodoActions = ({ todoId }: TodoActionsProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const onDelete = () => {
    startTransition(() => {
      deleteTodo({ id: todoId })
        .then((data) => {
          toast.success(data.success);
          router.push("/posts");
        })
        .catch((data) => {
          if (data.error) {
            toast.error(data.error);
          } else {
            toast.error("失敗");
          }
        });
    });
  };
  return (
    <Button variant="outline" disabled={isPending} onClick={onDelete}>
      削除
    </Button>
  );
};
