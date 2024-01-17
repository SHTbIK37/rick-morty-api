import type { FC } from "react";

import type { TItemListProps } from "./types";
import type { TItem } from "../Item/types";
import { Item } from "../Item";
import { StyledItemList } from "./styled";

const ItemList: FC<TItemListProps> = (props) => {
  return (
    <StyledItemList>
      {props.items.map((item: TItem) => {
        if (!props.bannedList.includes(item.id))
          return (
            <Item
              key={item.id}
              {...item}
              onDelete={props.handleDelete}
              onClick={() => props.onSelect(item)}
            />
          );
        return null;
      })}
    </StyledItemList>
  );
};
export { ItemList };
