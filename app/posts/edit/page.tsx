"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  interface Post {
    id: number;
    title: string;
    completed: boolean;
  }

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>投稿一覧</h2>
      {posts?.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>Completed: {post.completed ? "Yes" : "No"}</p>
        </li>
      ))}
      <Link href="/posts/new">新規投稿</Link>
    </div>
  );
}
