import { gql, useQuery } from "@apollo/client";
import { Box, TextField } from "@mui/material";
import { ItemList } from "./ItemList";
import React, { useEffect, useState } from "react";

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
  // debounce
  const [inputValue, setInputValue] = useState<string>("");
  const { data, refetch } = useQuery(FEED_QUERY, { variables: { name: "" } });
  useEffect(() => {
    // Функция debounce
    const debounceTimer = setTimeout(() => {
      refetch({ name: inputValue });
    }, 300); // Задержка в миллисекундах (в данном случае 300 мс)

    // Очистка таймера при каждом изменении inputValue
    return () => {
      clearTimeout(debounceTimer);
    };
  }, [inputValue, refetch]);

  const [bannedList, setBannedList] = useState<Array<string>>([]); // список блокированных карточек

  // TODO: fix input>2 и если стирать с 3 на 2 и с 2 на 1 то запросы отправлять
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
    // const name = event.target.value;
    // if (name.length > 2) refetch({ name: name });
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
