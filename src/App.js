import { Box, Button, TextField, Typography } from "@mui/material";
import Header from "./Components/Header";
import RouterBreadcrumbs from "./Components/RouterBreadcrumbs";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./Pages/Categories";
import ProductSize from "./Pages/ProductSize";
import Producttype from "./Pages/Producttype";
import Attributes from "./Components/Attributes";
import SharedCategoriesContainer from "./Components/SharedCategoriesContainer";
import Layout from "./Components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path="settings">
            <Route
              path="categories"
              element={
                <Layout>
                  <SharedCategoriesContainer />
                </Layout>
              }
            />
            <Route path="categories" element={<Categories />} />
            <Route path="product-type" element={<Producttype />} />
            <Route path="product-size" element={<ProductSize />} />
            <Route path="attributes" element={<Attributes />} />
          </Route>
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;

//  <Categories/>

{
  /* <Producttype/> */
}
{
  /* <ProductSize/> */
}
