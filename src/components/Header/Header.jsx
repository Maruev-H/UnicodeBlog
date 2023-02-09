import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { fetchCatedories } from "../../reducers/categoriesReduser";
import { ThreeCircles } from  'react-loader-spinner'
import "./Header.scss";

export default function Header() {
  const { categories, isLoading } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatedories());
  }, []);
  if (isLoading) {
    return <ThreeCircles
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
  />;
  }
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <h1>THE</h1>
          <h2>Unicode</h2>
        </div>
      </Link>
      <ul>
        {categories.map((category) => (
          <NavLink to={`/category/${category._id}`} key={category._id}>
            <li>{category.title}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
