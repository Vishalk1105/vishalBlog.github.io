import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UserPosts from "./UserDetailsComponent/UserPosts";
import UsersAlbum from "./UserDetailsComponent/UsersAlbum";
import UsersToDos from "./UserDetailsComponent/UsersToDos";
import Modal from "./UserDetailsComponent/Modal";
export const DataContext = React.createContext();

// ID is use to match the data of specific user using useParams hook.
// API fetched using useEffect, useState,s second array passed in URL as a dataType
// to set data as per the requirement
// onClick eventHandler for every button to set data as user click on button
//useContext Hook used to transfer data from detail page to its child component
//first - DataContext has been created.
//second - Wrap the child Component in DataContext.Provider with an attribute value (to pass mapped data)
export default function DetailPage() {
  const { id } = useParams();
  const [dataType, setDataType] = useState("posts");
  const [items, setItems] = useState([]);
  const[isOpen, setIsOpen]=useState(false)
 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/${dataType}`)
      .then((response) => response.json())
      .then((results) => setItems(results));
  }, [id, dataType]);
  return (
    <>
      <div>
        <h1>Detail Page-{id}</h1>
        <button
          type="button"
          className="btn btn-outline-secondary mx-4"
          onClick={() => setDataType("posts")}
        >
          Posts
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary mx-4"
          onClick={() => setDataType("todos")}
        >
          Todos
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary mx-4"
          onClick={() => setDataType("albums")}
        >
          Albums
        </button>
        
        {/* <Link to={`/addPost/${id}`}> */}
          <button type="button"
          className="btn btn-outline-secondary mx-4" onClick={()=>setIsOpen(true)} >Add Posts </button>
          <Modal open={isOpen}  onClose={()=>setIsOpen(false)}><div>
          </div></Modal>
          {/* </Link> */}
         
      </div>
      <h1>{dataType}</h1>
      {items.map((item) => (
        <div key={item.id}>
          <DataContext.Provider value={item}>
            {dataType === "posts" ? (
              <UserPosts />
            ) : dataType === "todos" ? (
              <UsersToDos />
            ) : (
              <UsersAlbum />
            )}
          </DataContext.Provider>
        </div>
      ))}
    </>
  );
}
