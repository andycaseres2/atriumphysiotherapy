import React from "react"

export default function BlogCard(props) {
    retrun (
        <div className="blogcard">
          <img src={item.image}/>
          <div className="blogcard-info">
            <h2 className="blogcard-title">{item.title}</h2>
            <p className="blogcard-date">{item.date}</p>
            <p className="description">{item.description}</p>
            <button className="blogcard-btn"><a href="#">Read More</a></button>
          </div>
        </div>
    )
}