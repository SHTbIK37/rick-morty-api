import React from "react";
import "./App.css";
import { Search } from "./components/Search";
import { Box } from "@mui/material";
import { Party } from "./components/Party";

const App: React.FC = () => {
  return (
    <Box sx={{ width: "70%", m: "50px auto", maxWidth: "810px" }}>
      <Search></Search>
      <Party></Party>
    </Box>
  );
};

export default App;
