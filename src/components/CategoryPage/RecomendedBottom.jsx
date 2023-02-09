import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RecomendedBottom() {
  const { posts } = useSelector((state) => state.posts);

  return (
    <div className="Wrapper__bottom">
      <h1>Рекомендуем к прочтению</h1>
      <div className="Wrapper__images">
        {posts.slice(0, 6).map((item) => (
          <Link to={`/post/${item._id}`} key={item._id}>
            <div
              style={{
                background: `url(${item.image})`,
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
              }}
            >
              <h2>{item.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
