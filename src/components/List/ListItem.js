import React from "react";

const ListItem = ({ item }) => {
 
  return (
         <div >
           <h3 className="title">
           {item.title}
           </h3>
           <h4 className="artist">
           {item.artist}
           </h4>
           <div className="genre">{item.genre}</div>
           <div className="rating">
           {item.rating}
           </div>
         
          </div>
  );
  
  
};

export default ListItem;
