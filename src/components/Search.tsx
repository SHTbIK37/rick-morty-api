import { gql, useQuery } from "@apollo/client";
import { Box, TextField } from "@mui/material";
import { ItemList } from "./ItemList";
import { useState } from "react";

const FEED_QUERY = gql`
  query GetCharacters($name: String) {
    characters(filter: { name: $name }) {
      info {
        count
      }
      results {
        id
        name
        image
      }
    }
  }
`;
const Search = () => {
  const [bannedList, setBannedList] = useState<Array<string>>([]);
  const { data, refetch } = useQuery(FEED_QUERY, { variables: { name: "" } });
  const handleChange = (event: any) => {
    const name = event.target.value;
    if (name.length > 2) refetch({ name: name });
  };

  return (
    <Box>
      <TextField
        onChange={handleChange}
        InputProps={{
          sx: { height: 80, fontSize: "30px", fontWeight: "light" },
        }}
        id="search"
        variant="outlined"
        placeholder="RICK"
        fullWidth
      />
      {data && (
        <ItemList
          bannedList={bannedList}
          setBannedList={setBannedList}
          items={data.characters.results}
        ></ItemList>
      )}
    </Box>
  );
};

export { Search };
