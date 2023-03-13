import "./style/App.css";
import Header from "./header";
import React from "react";
import Footer from "./footer";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveItem = (newItem) => {
    setItems(newItem);
    localStorage.setItem("shoppinglist", JSON.stringify(newItem));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myMyNewItem = { id, checked: false, item };
    const listItems = [...items, myMyNewItem];
    setAndSaveItem(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItem(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItem(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem("");
  };

  return (
    <Router>
      <div className="App">
        <Header title="emma list" />
      </div>
      <Routes>
        <Route
          path={"/"}
          element={
            <Home
              handleDelete={handleDelete}
              handleSubmit={handleSubmit}
              newItem={newItem}
              setNewItem={setNewItem}
              search={search}
              handleCheck={handleCheck}
              setSearch={setSearch}
              items={items}
            />
          }
        />
        <Route path="/About" element ={<About />}/>
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer length={2} />
    </Router>
  );
}

export default App;
