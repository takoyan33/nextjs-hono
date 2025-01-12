import { Button } from "@/components/ui/button";
// import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <h2 className="text-3xl font-bold text-center text-primary mb-8 mt-8">
        ブログ投稿一覧
      </h2>
      <div className="text-center">
        <Link href="/posts/">
          <Button className="px-6 py-3 text-lg" size="lg">
            投稿一覧
          </Button>
        </Link>
      </div>
    </div>
  );
}
