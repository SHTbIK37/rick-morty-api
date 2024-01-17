import type { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";

import { Img } from "../Img";
import { StyledItem, StyledItemButton } from "./styled";

import type { TItemProps } from "./types";

const Item: FC<TItemProps> = (props) => {
  return (
    <StyledItem onClick={props.onClick}>
      <Img src={props.image} alt={props.name} />
      <StyledItemButton
        onClick={(event) => {
          event.stopPropagation();
          props.onDelete(props.id);
        }}
      >
        <CloseIcon fontSize="small" />
      </StyledItemButton>
    </StyledItem>
  );
};
export { Item };
