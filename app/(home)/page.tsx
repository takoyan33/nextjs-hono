import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h2 className="mb-6 gap-4 text-center font-bold text-3xl text-primary">
        ブログ投稿一覧
      </h2>
      <div className="my-4">
        <UserButton />
      </div>
      <div className="mb-2 flex flex-col items-center gap-4 lg:justify-center lg:gap-x-2">
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
