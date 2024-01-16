import CloseIcon from "@mui/icons-material/Close";
import React from "react";

import { StyledItem, StyledItemButton } from "./styled";
import { TItemProps } from "../../types/types";
import { Img } from "../Img/index";

const Item: React.FC<TItemProps> = (props: TItemProps) => {
  const setParty = () => {
    if (props.item.name.includes("Rick")) {
      props.setParty((prevParty) => ({
        ...prevParty,
        rick: { status: "fulfilled", img: props.item.image },
      }));
    }
    if (props.item.name.includes("Morty")) {
      props.setParty((prevParty) => ({
        ...prevParty,
        morty: { status: "fulfilled", img: props.item.image },
      }));
    }
  };
  return (
    <StyledItem id={props.id} onClick={setParty}>
      <Img status={props.item.name} src={props.item.image} />
      <StyledItemButton
        onClick={(event) => {
          event.stopPropagation();
          props.setBannedList([...props.bannedList, props.id]);
        }}
      >
        <CloseIcon fontSize="small" />
      </StyledItemButton>
    </StyledItem>
  );
};
export { Item };
