import React from 'react'
import ReactDom from 'react-dom'
import { useState } from "react";
import { useParams } from "react-router-dom";


const defaultForm ={
    title:'',
    body:''
}
const MODAL_STYLES={
    position:'fixed',
    top:'50%',
left:'50%',
transform:'translate(-50%, -50%)',
backgroundColor:'#fff',
padding:'50px',
zIndex:1000
}

const OVERLAY_STYLES={
    position:'fixed',
    top:'0',
    left:'0',
    right:'0',
    bottom:'0',
    backgroundColor:'rgba(0,0,0,0.1)',
    zIndex:1000
    }


export default function Modal({ onClose,open}) {
   
    const {id } = useParams();
    const [data, setData]=useState(defaultForm)
    function submit(e){
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`, {
      method: 'POST',
      body: JSON.stringify({
        userId: data.userId,
        id: data.id,
        title: data.title,
        body: data.body,
       
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    }
    function handle(e){
        const newData={...data}
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(newData)
    }
    if (!open) return null;
    
  return ReactDom.createPortal(
    <div style={OVERLAY_STYLES}>
    <div style={MODAL_STYLES}>
    <form onSubmit={(e=>submit(e))}>
    <input onChange={(e)=>handle(e)} id='title' value={data.title} type="text" placeholder="Title" />
     <input onChange={(e)=>handle(e)} id='body' value={data.body} type="text" placeholder="Body" />
      <button type="submit">Submit</button>
      <button onClick={onClose}>Close</button>
       </form>
     
    </div> </div>,
    document.getElementById('portal')
  )
}
