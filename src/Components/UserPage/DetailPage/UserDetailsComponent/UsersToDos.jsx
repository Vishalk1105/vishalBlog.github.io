import React from "react";
import { useContext } from "react";
import { DataContext } from "../DetailPage";
export default function UsersToDos() {
  const dataType = useContext(DataContext);
  return (
    <div className="row row-cols-6 row-cols-md-6 g-6">
      {/*{JSON.stringify(dataType)}*/}
      <h1>{dataType.id} </h1> 
      <div className="card-body my2" key={dataType.id}>
        <h5 className="card-title">{dataType.title}</h5>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          defaultChecked={dataType.completed}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          completed
        </label>
      </div>
    </div>
  );
}
