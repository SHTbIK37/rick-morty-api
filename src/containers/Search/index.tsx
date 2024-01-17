import { useState, type ChangeEvent, FC } from "react";
import { gql, useQuery } from "@apollo/client";
import { CircularProgress, Typography } from "@mui/material";

import { ItemList } from "../../components/ItemList";
import { debounce } from "../../utils/debounce";
import { StyledTextField, StyledMainBox } from "./styled";
import type { TSearchProps } from "./types";
import type { TItem } from "../../components/Item/types";
import type { TResponse } from "./types";

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
  const { data, loading, refetch } = useQuery<TResponse>(FEED_QUERY);
  const debouncedRefetch = debounce(refetch, 300);

  const [bannedList, setBannedList] = useState<Array<string>>([]); // список блокированных карточек

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const name: string = event.target.value;
    if (name === "") debouncedRefetch({ name });
    if (name.length > 2) debouncedRefetch({ name });
  };

  const handleItemClick = (item: TItem) => {
    if (item.name.includes("Rick")) {
      props.setParty((prevParty) => ({
        ...prevParty,
        rick: { img: item.image },
      }));
    }
    if (item.name.includes("Morty")) {
      props.setParty((prevParty) => ({
        ...prevParty,
        morty: { img: item.image },
      }));
    }
  };
  const handleDelete = (id: string): void => {
    setBannedList((prevList) => [...prevList, id]);
  };
  return (
    <StyledMainBox>
      <StyledTextField placeholder="RICK" onChange={handleChange} />
      {loading && <CircularProgress />}
      {!data?.characters.results.length && !loading && (
        <Typography>Список пуст</Typography>
      )}
      {data && (
        <ItemList
          onSelect={handleItemClick}
          bannedList={bannedList}
          handleDelete={handleDelete}
          items={data.characters.results}
        />
      )}
    </StyledMainBox>
  );
};
