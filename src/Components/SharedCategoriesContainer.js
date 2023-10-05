import React, { useState } from "react";
import Categories from "../Pages/Categories";
import Producttype from "../Pages/Producttype";

function SharedCategoriesContainer() {
  const [categories, setCategories] = useState(["Print Only"]);

  return (
    <>
      <Categories categories={categories} setCategories={setCategories} />
      {/* <Producttype categories={categories} /> */}
    </>
  );
}

export default SharedCategoriesContainer;
