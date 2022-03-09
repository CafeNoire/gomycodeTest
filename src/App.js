import Container from "./components/Container";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { IconButton, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { Box } from "@mui/system";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

function App(props) {
  
  const [appleData,setAppleData] = useState('');
  const [request, setRequest ] = useState('');
  const [searchContent, setSearchContent] = useState("");
  const [filteredList, setFilteredList] = useState("");
  const [selecteSong, setSelecteSong] = useState("");
  
  
    
    
  
  function getData(){
    var data = "";
    var config = {
      method: "get",
      url: `https://itunes.apple.com/search?term=${searchContent}&limit=10"`,
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data.results));
        setAppleData(response.data.results)
        
      })
      .catch(function (error) {
        console.log(error);
      });
      setSelecteSong(appleData ? appleData.filter(obj => obj.kind =="song") : [])
  };
  
  console.log(appleData)
  console.log(selecteSong)
  
  

  return (
    <div className="App">
     {/* <Header getData={getData} />*/}

     <div className="header">
      <AppBar position="static" sx={{ minWidth: 535 }}>
        <Toolbar>
          <Typography variant="h5" component="div">
            OurTunes
          </Typography>
          <IconButton color="inherit">
            <LibraryMusicIcon />
          </IconButton>
          <Box component="div" sx={{ pr: 2, pl: 2 }}>
            <input
              type="search"
              value={searchContent}
              onChange={(e) => setSearchContent(e.target.value)}
            ></input>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box component="div">
              <button type="" onClick={getData}>
                Search
              </button>
            </Box>
            <Box component="div" sx={{ position: "absolute", left: "90%" }}>
              <IconButton color="inherit">
                <AddShoppingCartIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
      <Container data={appleData} />
      <Footer />
    </div>
  );
}

export default App;
