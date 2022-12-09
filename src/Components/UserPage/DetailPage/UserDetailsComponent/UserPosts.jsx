import React, { useContext } from "react";
import { DataContext } from "../DetailPage";

export default function UserPosts() {
  const dataType = useContext(DataContext);

  return (
    <div className="card mb-4" >
    <div className="card-body" key={dataType.id}>
    <h3 className="card-subtitle mb-2 ">{dataType.id}</h3>
      <h5 className="card-title">{dataType.title}</h5>
            <p className="card-text">{dataType.body}</p>
          </div>
  </div>
  );
}


