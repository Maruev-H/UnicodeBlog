import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../reducers/postsReducer";
import "./CatedoryPage.scss";
import { ThreeCircles } from "react-loader-spinner";
import ReadMore from "../ReadMoreBtn/ReadMore";

export default function CategoryPage() {
  const { id } = useParams();
  const { posts, isLoading } = useSelector((state) => state.posts);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const category = posts.filter((item) => item.categoryId === id);
  if (isLoading || categories.lenght === 0) {
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
    <div className="Wrapper">
      <div className="Wrapper__midl">
        <div className="Wrapper__left">
          <h1>{categories.filter((item) => item._id === id)[0].title}</h1>
          {category.map((item, i) => (
            <Link to={`/post/${item._id}`}>
              <div className={`Wrapper__map ${i !== 0 && "line"}`} key={i}>
                <div className="Wrapper__image">
                  <img src={item.image} alt='surt'/>
                </div>
                <div className="Wrapper__description">
                  <h3>{item.title}</h3>
                  <ReadMore len="200">{item.text}</ReadMore>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="Wrapper__right">
          <h2>Рекомендуем к прочтению</h2>
          {posts.slice(6, 8).map((item) => (
            <Link to={`/post/${item._id}`}>
              <div className="Wrapper__recomended">
                <img src={item.image} alt="img" />
                <h3>{item.title}</h3>
                <ReadMore len="350">{item.text}</ReadMore>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="Wrapper__bottom">
        <h1>Рекомендуем к прочтению</h1>
        <div className="Wrapper__images">
          {posts.slice(0, 6).map((item) => (
            <Link to={`/post/${item._id}`}>
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
    </div>
  );
}
