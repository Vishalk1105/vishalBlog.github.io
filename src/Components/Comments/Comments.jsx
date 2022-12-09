import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
export const Comments = () => {
  const { id } = useParams();
  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => response.json())
      .then((re) => setComment(re));
  }, [id]);
  return (
    <div>
      <div className="container">
        {comment.map((e) => (
          <div key={e.id}>
            <ul className="list-group">
              <li className="list-group-item">
                <h5>{e.name} </h5> <br />
                <Link>{e.email}</Link> <br />
                {e.body}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
