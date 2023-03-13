import React from "react";
import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul className="contyouel">
      {items.map((item) => {
        return (
          <LineItem
          key={item.id} 
          item = {item}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;
