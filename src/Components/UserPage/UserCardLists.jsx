import React from "react";
import UserCard from "./UserCard";

const UserCardLists = ({ users }) => (
  <div className="row row-cols-1 row-cols-md-4   g-4">
    {/* map users data passed from UsersPage as a users={filteredUsers}.
  the map option will map through every object and collect and set data
   as per the users ID. 
   here key is an important attribute to differntiate the various elements
   hence here user ID is provided as a key.
    */}
    {users.map((user) => {
      return <UserCard user={user} key={user.id} />;
    })}
  </div>
);

export default UserCardLists;
