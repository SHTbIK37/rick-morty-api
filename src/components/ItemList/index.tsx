import { Box } from "@mui/material";
import type { FC } from "react";

import { Item } from "../Item/index";
import { TItem, TItemListProps } from "../../types/types";
import { StyledItemList } from "./styled";

const ItemList: FC<TItemListProps> = (props) => {
  return (
    <StyledItemList>
      {props.items.map((item: TItem) => {
        if (!props.bannedList.includes(item.id))
          return (
            <Item
              key={item.id}
              item={item}
              id={item.id}
              bannedList={props.bannedList}
              setBannedList={props.setBannedList}
              setParty={props.setParty}
            />
          );
        else return undefined;
      })}
    </StyledItemList>
  );
};
export { ItemList };
