import React, { useState } from "react";
import Nav from "./Navbar/nav";
import Sidebar from "./Sidebar/Sidebar";
import Recommended from "./Recommended/Recommended";
import Content from "./Content/content";

const App = () => {
  const [recommended, setRecommeded] = useState("");
  const [searchvalue, setSearchvalue] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  return (
    <>
      <Nav onSearchChange={setSearchvalue} />
      <Sidebar
        onCategoryChange={setCategory}
        onPriceChange={setPrice}
        onColorChange={setColor}
      />
      <Recommended onRecommendedChange={setRecommeded} />
      <Content
        recommended={recommended}
        category={category}
        color={color}
        searchvalue={searchvalue}
        price={price}
      />
    </>
  );
};

export default App;
