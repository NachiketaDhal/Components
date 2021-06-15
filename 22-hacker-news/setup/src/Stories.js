import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { onRemoveButtonClick, newState } = useGlobalContext();

  if (newState.loading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="stories">
      {newState.news.map((item) => {
        const { title, points, author, num_comments, url, objectID } = item;
        return (
          <article className="story" key={objectID}>
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by {author} | {num_comments} comments
            </p>
            <a
              className="read-link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
            <button
              className="remove-btn"
              onClick={() => onRemoveButtonClick(item)}
            >
              Remove
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
