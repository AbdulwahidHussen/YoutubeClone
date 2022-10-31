import React from "react";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <>
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "rgb(42, 41, 87)",
          color: "white",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "rgb(11, 9, 94)", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ),
   
   )
   
   }
   <p style={{color:'white',opacity:{md:'0',sx:'1'}}}>Developed By Alien</p>
   
  </Stack>
  </>
);

export default Categories;