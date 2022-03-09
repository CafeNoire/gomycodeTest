import { IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { Box } from "@mui/system";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

const Header = (props) => {
  const [searchContent, setSearchContent] = useState("");

  return (
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
              <button type="" onClick={props.getData}>
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
  );
};

export default Header;
