import React from "react";
import Article from "./Article.tsx";

interface ArticleListProps {
  posts: {
    id: number;
    title: string;
    date?: string;
    preview: string;
    minutes: number;
  }[];
}

function ArticleList({ posts }: ArticleListProps) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;
