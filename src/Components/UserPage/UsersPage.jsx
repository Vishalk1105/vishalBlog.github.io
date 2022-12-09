import React, { useEffect, useState } from "react";
import { SearchBox } from "../SearchBox/SearchBox";
import UserCardLists from "./UserCardLists";
export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredUser, setFilteredUser] = useState(users);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setUsers(result));
  }, []);
  // here useEffcet is used to fetch users from API
  //the data is converted into JSON Format and stored it into result.

  useEffect(() => {
    const newFilteredUsers = users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredUser(newFilteredUsers);
  }, [users, searchField]);

  const onSearchChange = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  };
  //OnSearch Event Handler has been  used to search user name
  // the type string will get stored into searchString with a CAseSensitive function
  // The stored string will then used to filter the user name using the new varibale (filteredUsers) in useEffect Hook
  // which is use to show a filtered user name as a side Effect as we change a users 
  //and searchField (which are 2 dependencies)
  return (
    <>
      <SearchBox onChangeHandler={onSearchChange} />
      <UserCardLists users={filteredUser} />
    </>
  );
};
