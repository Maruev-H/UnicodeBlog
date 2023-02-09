import React from "react";
import ReadMore from "../ReadMoreBtn/ReadMore";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RecomendedRight() {
  const { posts } = useSelector((state) => state.posts);

  return (
    <div className="Wrapper__right">
      <h2>Рекомендуем к прочтению</h2>
      {posts.slice(6, 8).map((item) => (
        <div className="Wrapper__recomended" key={item._id}>
          <Link to={`/post/${item._id}`}>
            <img src={item.image} alt="img" />
          </Link>
          <h3>{item.title}</h3>
          <ReadMore len="350">{item.text}</ReadMore>
        </div>
      ))}
    </div>
  );
}
