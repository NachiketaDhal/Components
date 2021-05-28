import React from "react";

const Follower = ({ item }) => {
  return (
    <article className="card">
      <img src={item.avatar_url} alt="github-user" />
      <h4>{item.login}</h4>
      <a className="btn" href={item.html_url}>
        View Profile
      </a>
    </article>
  );
};

export default Follower;
