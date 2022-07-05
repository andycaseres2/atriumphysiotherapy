import React from "react"

export default function BlogCard(props) {
    return (
        <div className="blogcard">
          <img src={props.image}/>
          <div className="blogcard-info">
            <h2 className="blogcard-title">{props.title}</h2>
            <p className="blogcard-date">{props.date}</p>
            <p className="description">{props.description}</p>
            <button className="blogcard-btn"><a href="#">Read More</a></button>
          </div>
        </div>
    )
}