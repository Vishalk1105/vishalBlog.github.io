// import React from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// const defaultForm ={
//     title:'',
//     body:''
// }

// const AddPost=()=>{
//     const {id } = useParams();
// const [data, setData]=useState(defaultForm)
// function submit(e){
// e.preventDefault();
// fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`, {
//   method: 'POST',
//   body: JSON.stringify({
//     userId: data.userId,
//     id: data.id,
//     title: data.title,
//     body: data.body,
   
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// }
// function handle(e){
//     const newData={...data}
//     newData[e.target.id]=e.target.value
//     setData(newData)
//     console.log(newData)
// }
// return(
// <div>
// <form onSubmit={(e=>submit(e))}>
// <input onChange={(e)=>handle(e)} id='title' value={data.title} type="text" placeholder="Title" />
// <input onChange={(e)=>handle(e)} id='body' value={data.body} type="text" placeholder="Body" />
// <button type="submit">Submit</button>
// </form>
// </div>
// )
// }

// export default AddPost