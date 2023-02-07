import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { ThreeCircles } from "react-loader-spinner";
import './PostPage.scss'

export default function PostPage() {
    const {id} = useParams()
    const { posts, isLoading } = useSelector((state) => state.posts);

    const [post] = useState(posts.filter((item)=>(item._id === id))[0])

    if(isLoading || !post){
      return(
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
    <div className='Post'>
      <div className='Post__image'>
        <img src={post.image} alt="img" />
      </div>
      <h1>{post.title}</h1>
      <span>{post.text}</span>
    </div>
  )
}
