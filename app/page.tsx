"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
// import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [message, setMessage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/hello");
      const { message } = await res.json();
      console.log(message);
      setMessage(message);
    };

    fetchData();
  }, []);

  if (!message) return <p>Loading...</p>;

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
