import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          ブログ
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <Button variant="ghost">ホーム</Button>
              </Link>
            </li>
            <li>
              <Link href="/posts/new">
                <Button variant="ghost">新規投稿</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
