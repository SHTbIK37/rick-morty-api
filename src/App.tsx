import React from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import { Search } from "./components/Search";
import { Box } from "@mui/material";
import { ItemList } from "./components/ItemList";
import { Party } from "./components/Party";
const FEED_QUERRY = gql`
  query {
    characters(page: 2, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        name
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;
function App() {
  return (
    <Box sx={{ width: "70%", m: "50px auto", maxWidth: "810px" }}>
      <Search></Search>
      <ItemList></ItemList>
      <Party></Party>
    </Box>
  );
}

export default App;
