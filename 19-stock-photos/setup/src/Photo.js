import React from "react";

const Photo = ({ image }) => {
  const {
    urls: { regular },
    alt_description,
    user: {
      username,
      profile_image: { large },
      portfolio_url,
    },
    likes,
  } = image;
  return (
    <article className="photo">
      <img src={regular} alt={alt_description} />
      <div className="photo-info">
        <div>
          <h4>{username}</h4>
          <p>{likes} likes</p>
        </div>
        <a href={portfolio_url}>
          <img src={large} className="user-img" alt={username} />
        </a>
      </div>
    </article>
  );
};

export default Photo;
