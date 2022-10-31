import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import  Videos from "./Videos";
import Sidebar from './Sidebar';
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Ethiopian");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (<>
    <Stack sx={{ flexDirection: { sx: "column", md: "row",overflowY:'auto' } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid blue", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h6" fontWeight="bold" mb={2} sx={{ color: "white" }}>
         { selectedCategory==="Ethiopian" && 'For you '}<span style={{ color: "rgb(11, 9, 94)" }}>{selectedCategory!='Ethiopian' && selectedCategory + ' Videos'} </span>
        </Typography>
        

        <Videos videos={videos} />
      </Box>
      
    </Stack>
     
   </>
  );
};

export default Feed;