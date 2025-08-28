import React from "react";

interface ArticleProps {
  title: string;
  date?: string;
  preview: string;
  minutes: number;
}

function Article({ title, date = "January 1, 1970", preview, minutes }: ArticleProps) {
  const renderReadingTime = () => {
    if (minutes < 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      return `${"☕️".repeat(coffeeCups)} ${minutes} min read`;
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      return `${"🍱".repeat(bentoBoxes)} ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {renderReadingTime()}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
