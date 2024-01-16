import { useState, type ChangeEvent, FC } from "react";
import { gql, useQuery } from "@apollo/client";
import { Box } from "@mui/material";

import { ItemList } from "../../components/ItemList/index";
import { debounce } from "../../utils/debounce";
import { StyledTextField } from "./styled";
import { TSearchProps } from "../../types/types";

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

export const Search: FC<TSearchProps> = (props) => {
  const { data, refetch } = useQuery(FEED_QUERY);
  const debouncedRefetch = debounce(refetch, 300);

  const [bannedList, setBannedList] = useState<Array<string>>([]); // список блокированных карточек

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const name: string = event.target.value;
    if (name === "") debouncedRefetch({ name });
    if (name.length > 2) debouncedRefetch({ name });
  };

  return (
    <Box>
      <StyledTextField placeholder="RICK" onChange={handleChange} />
      {data && (
        <ItemList
          setParty={props.setParty}
          bannedList={bannedList}
          setBannedList={setBannedList}
          items={data.characters.results}
        ></ItemList>
      )}
    </Box>
  );
};
