import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/1913977.jpg";
export const PostList = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
  .then((result)=>{result.json()
  .then((resp)=>{setPost(resp)})})
  },[]);

  const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
       method: 'DELETE',
    }).then((response) => {
       if (response.status === 200) {
          setPost(
             post.filter((e) => {
                return e.id !== id;
             })
          );
       } else {
          return;
       }
    });
    };

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {post.map((item) => (
        <div className="col" key={item.id}>
          <div className="card">
            <img className="card-img-top" src={image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                {item.body} <Link to={`/postlist/${item.id}`}> Read More</Link>
              </p>
              <button onClick={()=>deletePost(item.id)} >Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
