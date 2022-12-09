import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../DetailPage";


export default function UsersAlbum() {
  const dataType = useContext(DataContext);
  return (
    <div className="row row-cols-6 row-cols-md-6 g-6">
      {/* {JSON.stringify(dataType)} */}
      <h1>{dataType.id} </h1>
      <div className="card-body" key={dataType.id}>
        <h5 className="card-title">{dataType.title}</h5>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
       <Link to={`/usersphotos/${dataType.id}`}><button type="button" className="btn btn-primary btn-sm">
          Photos
        </button></Link> 
      </div>
    
      </div>
  );
}
