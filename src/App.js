import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";
import VideoDetail from "./Components/VideoDetail";
import ChannelDetail from "./Components/ChannelDetail";
import SearchFeed from "./Components/SearchFeed";
import './index.css'
const App = () => {
  return (
  
<BrowserRouter>
    <Box sx={{backgroundColor: 'rgb(1, 5, 13)',width:'100%',height:'100%'}}>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id"  element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />  
        </Routes>
    </Box>
    
</BrowserRouter>
   )
}

export default App;