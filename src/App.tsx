import React, { useState } from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import { Search } from "./components/Search";
import { Box } from "@mui/material";
import { ItemList } from "./components/ItemList";
import { Party } from "./components/Party";
const FEED_QUERRY = gql`
  query {
    characters(filter: { name: "rick" }) {
      info {
        count
      }
      results {
        id
        name
        gender
        image
      }
    }
  }
`;
function App() {
  const { data } = useQuery(FEED_QUERRY);
  const [bannedList, setBannedList] = useState({});
  console.log(data);
  return (
    <Box sx={{ width: "70%", m: "50px auto", maxWidth: "810px" }}>
      <Search></Search>
      {data && <ItemList items={data.characters.results}></ItemList>}
      <Party></Party>
    </Box>
  );
}

export default App;
