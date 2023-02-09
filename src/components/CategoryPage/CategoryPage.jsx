import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../reducers/postsReducer";
import "./CatedoryPage.scss";
import { ThreeCircles } from "react-loader-spinner";
import ReadMore from "../ReadMoreBtn/ReadMore";
import RecomendedBottom from "./RecomendedBottom";
import RecomendedRight from "./RecomendedRight";

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
          <h1>{categories.find((item) => item._id === id).title}</h1>
          {category.map((item, index) => (
            <>
              {index !== 0 && <hr />}
              <div className={`Wrapper__map`}>
                <div className="Wrapper__image">
                  <Link to={`/post/${item._id}`}>
                    <img src={item.image} alt="surt" />
                  </Link>
                </div>

                <div className="Wrapper__description">
                  <h3>{item.title}</h3>
                  <ReadMore len="200">{item.text}</ReadMore>
                </div>
              </div>
            </>
          ))}
        </div>
        <RecomendedRight />
      </div>
      <RecomendedBottom />
    </div>
  );
}
