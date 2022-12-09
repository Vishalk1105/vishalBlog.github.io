import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UsersPhotosLists() {
    const { id } = useParams();
     const [obj, setObj] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then((response) => response.json())
      .then((results) => setObj(results))
       });
  
  return (
      

<div>
<div className="row row-cols-6 row-cols-md-6 g-6">
{obj.map((item)=>(
   <div className="col" key={item.id} >
    <div className="card">
    <img src={item.thumbnailUrl} alt={item.url} className="card-img-top"/>
    <div className="card-body"><h5 className="card-title">{item.id}-{item.title}</h5>
    <p>View full image-<a href={item.url}>{item.url}</a></p>
    
    </div>
    </div>
   </div>
        
))}
</div>
</div>
      
  )
}
