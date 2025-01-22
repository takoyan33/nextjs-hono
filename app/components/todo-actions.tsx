"use client";

import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { deleteTodo } from "@/actions/todo-delete";
import { useRouter } from "next/navigation";
import { updateTodo } from "@/actions/todo-update";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

interface TodoActionsProps {
  todoId: string;
  isCompleted: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TodoActions = ({ todoId, isCompleted }: TodoActionsProps) => {
  const { toast } = useToast();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onUpdate = () => {
    startTransition(() => {
      updateTodo({ id: todoId, isCompleted: isCompleted })
        .then(() => {
          toast({
            title: "編集成功",
            description: "投稿を編集しました",
          });
        })
        .catch((data) => {
          if (data.error) {
            toast({
              title: "編集失敗",
              description: data.error,
              variant: "destructive",
            });
          }
        });
    });
  };

  const onDelete = () => {
    startTransition(() => {
      deleteTodo({ id: todoId })
        .then(() => {
          toast({
            title: "削除成功",
            description: "投稿を削除しました",
          });
          router.push("/posts");
        })
        .catch((data) => {
          if (data.error) {
            toast({
              title: "削除失敗",
              description: data.error,
              variant: "destructive",
            });
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
      <Toaster />
    </div>
  );
};
