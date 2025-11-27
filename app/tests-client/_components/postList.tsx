"use client";

import React, { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch("/posts/")
      .then((res) => {
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-600">{post.body}</p>
          <p className="text-xs text-gray-400 mt-2">User ID: {post.userId}</p>
        </div>
      ))}
    </div>
  );
};
