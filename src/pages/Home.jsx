import React, { useContext } from "react";
import AddItem from "../AddItem";
import Content from "../content";
import SearchItem from "../SearchItem";
import { AppContext } from "../App";



const Home = () => {

  const {handleDelete,
    handleSubmit,
    newItem,
    setNewItem,
    search,
    handleCheck,
    setSearch,
    items,} = useContext(AppContext);


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
