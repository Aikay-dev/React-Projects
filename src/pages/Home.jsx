import React from "react";
import AddItem from "../AddItem";
import Content from "../content";
import SearchItem from "../SearchItem";

const Home = ({
  newItem,
  setNewItem,
  items,
  handleSubmit,
  search,
  setSearch,
  handleCheck,
  handleDelete
}) => {
  return (
    <>
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <SearchItem search={search} setSearch ={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck ={handleCheck}
        handleDelete = {handleDelete}
      />
    </>
  );
};

export default Home;
