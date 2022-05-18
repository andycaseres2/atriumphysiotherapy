import React from "react";
import { Stack } from "@chakra-ui/react";
import "./PostItem.css";

export const PostItem = (post) => {
  return (
    <div className="blog-post__cards">
      <div className="blog-post">
        <div className="blog-post__img">
          <img src={post.image} alt="" />
        </div>
        <div className="blog-post__info">
          <div className="blog-post__date">
            {/* <span className='day'>Sunday</span>
                 <span>October 11, 2021</span> */}
          </div>
          <h1 className="blog-post__title">{post.title}</h1>
          <p className="blog-post__text">{post.description}</p>
          <a href="#" className="blog-post__cta">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
