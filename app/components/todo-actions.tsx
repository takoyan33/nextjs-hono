"use client";

import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { deleteTodo } from "@/actions/todo-delete";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { updateTodo } from "@/actions/todo-update";

interface TodoActionsProps {
  todoId: string;
  isCompleted: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TodoActions = ({ todoId, isCompleted }: TodoActionsProps) => {
  console.log(isCompleted);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onUpdate = () => {
    startTransition(() => {
      updateTodo({ id: todoId, isCompleted: isCompleted })
        .then((data) => {
          toast.success(data.success);
          router.push("/posts");
        })
        .catch((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            alert(data.error);
          }
        });
    });
  };

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
    <div className="flex item-center gap-x-2">
      <Button variant="outline" disabled={isPending} onClick={onUpdate}>
        {isCompleted ? "未完了" : "完了"}
      </Button>
      <Button variant="outline" disabled={isPending} onClick={onDelete}>
        削除
      </Button>
    </div>
  );
};
