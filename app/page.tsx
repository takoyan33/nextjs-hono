"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState();
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/hello");
      const { message } = await res.json();
      console.log(message);
      setMessage(message);
    };

    const fetchPosts = async () => {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    };

    fetchData();
    fetchPosts();
  }, []);

  if (!message) return <p>Loading...</p>;

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
