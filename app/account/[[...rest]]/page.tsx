import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "@/app/account/_components/sidebar";
import { UserProfileModal } from "@/components/modals/user-profile-modal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getTodoByOrgId } from "@/service/todo-get";
import { OrgNavbar } from "../_components/org-navbar";

const ProtectedPage = async () => {
  const { orgId } = await auth();
  const user = await currentUser();
  const todos = await getTodoByOrgId(orgId);

  return (
    <div className="flex h-full w-full gap-x-3 p-6">
      <Sidebar />
      <div className="flex h-full w-full flex-col gap-y-3">
        <OrgNavbar />
        <Separator />
        <ul className="flex flex-col p-6">
          <li>
            User Name: {user?.firstName} {user?.lastName}
          </li>
          <li>User Email: {user?.emailAddresses?.[0].emailAddress}</li>
          <li className="flex gap-x-2">
            User image:
            <Image
              src={user?.imageUrl || ""}
              width={30}
              height={30}
              alt="User Image"
            />
          </li>
          <li>
            <UserProfileModal
              email={user?.emailAddresses?.[0].emailAddress || ""}
            />
          </li>
          <h2 className="mb-8 text-center font-bold text-4xl text-primary">
            組織のブログ投稿一覧
          </h2>
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {todos?.map(
              (todo: { id: number; title: string; isCompleted: boolean }) => (
                <Card
                  key={todo.id}
                  className="shadow-md transition-shadow duration-300 hover:shadow-lg"
                >
                  <CardHeader>
                    <CardTitle>{todo.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      状態: {todo.isCompleted ? "完了" : "未完了"}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/posts/${todo.id}`}>
                      <Button variant="outline">詳細</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ),
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ProtectedPage;
