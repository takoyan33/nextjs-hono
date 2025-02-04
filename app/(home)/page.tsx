import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center text-primary mb-6 gap-4">
        ブログ投稿一覧
      </h2>
      <div className="my-4">
        <UserButton />
      </div>
      <div className="flex items-center flex-col gap-4 lg:justify-center lg:gap-x-2 mb-2">
        <Link href="/posts/">
          <Button className="px-6 py-3 text-lg" size="lg">
            投稿一覧
          </Button>
        </Link>
        <Link href="/sign-up/">
          <Button className="px-6 py-3 text-lg" size="lg" variant="primary">
            ユーザー登録
          </Button>
        </Link>
        <Link href="/sign-in/">
          <Button className="px-6 py-3 text-lg" size="lg" variant="outline">
            ログイン
          </Button>
        </Link>
        <Link href="/protected/">
          <Button className="px-6 py-3 text-lg" size="lg" variant="outline">
            protected page
          </Button>
        </Link>
      </div>
    </div>
  );
}
