import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Comments } from "../Comments/Comments";

export const Post = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((re) => setData(re));
  }, [id]);
  return (
    <div className="card mb-3">
      <h1>Post {id} </h1>

      <div className="card-body" key={data.id}>
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.body}</p>
      </div>
      <h3>Comments-</h3>
      <Comments />
    </div>
  );
};
