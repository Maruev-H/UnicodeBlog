import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../reducers/postsReducer";
import "./HomePaje.scss";
import { ThreeCircles } from "react-loader-spinner";
import ReadMore from "../ReadMoreBtn/ReadMore";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  if (isLoading || posts.length === 0) {
    return (
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    );
  }
  return (
    <>
      <div className="Posts">
        <Link
          to={`/post/${posts[0]._id}`}
          className="Posts__left"
          style={{
            backgroundImage: `url(${posts[0].image})`,
          }}
        >
          <div>
            <h1>{posts[0].title}</h1>
            <span>{posts[0].text.substring(0, 50)}...</span>
          </div>
        </Link>
        <div className="Posts__right">
          <Link to={`/post/${posts[posts.length - 1]._id}`}>
            <div
            className="Posts__section"
              style={{
                backgroundImage: `url(${posts[posts.length - 1].image})`,
              }}
            >
              <div>
                <h1>{posts[posts.length - 1].title}</h1>
                <span>{posts[posts.length - 1].text.substring(0, 50)}...</span>
              </div>
            </div>
          </Link>
          <Link to={`/post/${posts[2]._id}`}>
            <div
            className="Posts__section"
              style={{
                backgroundImage: `url(${posts[2].image})`,
              }}
            >
              <div>
                <h1>{posts[2].title}</h1>
                <span>{posts[2].text.substring(0, 50)}...</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="End">
        <h1>Последние новости в мире IT</h1>
        <div className="End__posts">
          <div>
            <Link to={`/post/${posts[posts.length - 1]._id}`}>
              <img
                className="End__left"
                src={`${posts[posts.length - 1].image}`}
                alt="img"
              />
            </Link>
            <h3>{posts[posts.length - 1].title}</h3>
            <ReadMore len="70">{posts[posts.length - 1].text}</ReadMore>
          </div>
          <div>
            <Link to={`/post/${posts[posts.length - 2]._id}`}>
              <img src={`${posts[posts.length - 2].image}`} alt="img" />
            </Link>
            <h3>{posts[posts.length - 2].title}</h3>
            <ReadMore len="70">{posts[posts.length - 2].text}</ReadMore>
          </div>
        </div>
      </div>
    </>
  );
}
