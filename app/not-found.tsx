import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h2 className="mb-4 font-bold text-4xl">ページがありません</h2>
      <p className="mb-8 text-gray-600 text-lg">
        お探しのページは存在しないか、削除された可能性があります。
      </p>
      <Link href="/">
        <Button>ホームに戻る</Button>
      </Link>
    </div>
  );
}
