import { Box } from "@mui/material";
import { Item } from "./Item";
import React from "react";
import { TItem, TItemListProps } from "../types/types";

const ItemList: React.FC<TItemListProps> = (props: TItemListProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        "&>:nth-of-type(4n)": { marginRight: "0" },
        "&>:nth-of-type(4n+1)": { marginLeft: "0" },
      }}
      id={"itemsList"}
    >
      {props.items.map((item: TItem) => {
        if (!props.bannedList.includes(item.id))
          return (
            <Item
              key={item.id}
              item={item}
              id={item.id}
              bannedList={props.bannedList}
              setBannedList={props.setBannedList}
            />
          );
        else return undefined;
      })}
    </Box>
  );
};
export { ItemList };
