import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 flex-1">
      <h2 className="text-4xl font-bold mb-4">ページがありません</h2>
      <p className="text-lg text-gray-600 mb-8">
        お探しのページは存在しないか、削除された可能性があります。
      </p>
      <Link href="/">
        <Button>ホームに戻る</Button>
      </Link>
    </div>
  );
}
