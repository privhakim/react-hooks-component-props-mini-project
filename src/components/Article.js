import React from 'react';

const Article = ({ title, date, preview }) => {
  // Calculates minutes to read
  const minutesToRead = Math.ceil(preview.split(" ").length / 200);

  // Generated emojis based on minutes to read
  const emojis = minutesToRead < 30 ? '☕️'.repeat(Math.ceil(minutesToRead / 5)) : '🍱'.repeat(Math.ceil(minutesToRead / 10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <span>{emojis} {minutesToRead} min read</span>
    </article>
  );
};

export default Article;
