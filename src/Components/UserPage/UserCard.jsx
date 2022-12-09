import React from "react";
import { Link } from "react-router-dom";
export default function UserCard({ user }) {
  return (
    <div>
      {/* user as prop has been passed from useeCardList
    Object Destructuring to set data as per the requirement
    */}
      <div className="col" key={user.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"> {user.name}</h5>
            <p className="card-text">User Name: {user.username}</p>
            <p>
              Email ID: <Link className="card-text"> {user.email}</Link>
            </p>
            <p className="card-text">City: {user.address.city}</p>
            <Link to={`/userspage/${user.id}`}>User Details </Link>
            {/* 'to' path will land on DetailPage 
            to={`/userspage/${user.id}`}, here the page will be displayed as per the user ID
          */}
          </div>
        </div>
      </div>
    </div>
  );
}
