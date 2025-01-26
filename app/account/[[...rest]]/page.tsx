import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { UserProfileModal } from "@/components/modals/user-profile-modal";
import { auth } from "@clerk/nextjs/server";
import { getTodoByOrgId } from "@/service/todo-get";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/app/account/_components/sidebar";
import { Separator } from "@/components/ui/separator";
import { OrgNavbar } from "../_components/org-navbar";

const ProtectedPage = async () => {
  const { orgId } = await auth();
  const user = await currentUser();
  const todos = await getTodoByOrgId(orgId);

  return (
    <div className="p-6 w-full h-full flex gap-x-3">
      <Sidebar />
      <div className="w-full h-full flex flex-col gap-y-3">
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
          <h2 className="text-4xl font-bold text-center text-primary mb-8">
            組織のブログ投稿一覧
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {todos?.map(
              (todo: { id: number; title: string; isCompleted: boolean }) => (
                <Card
                  key={todo.id}
                  className="shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <CardTitle>{todo.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      状態: {todo.isCompleted ? "完了" : "未完了"}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/posts/${todo.id}`}>
                      <Button variant="outline">詳細</Button>
                    </Link>
                  </CardFooter>
                </Card>
              )
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ProtectedPage;
