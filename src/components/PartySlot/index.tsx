import type { FC } from "react";

import { StyledPartyBoxItem, StyledPartyBoxItemText } from "./styled";
import { TPartySlotProps } from "../../types/types";
import { Img } from "../Img/index";

const PartySlot: FC<TPartySlotProps> = (props) => {
  return (
    <StyledPartyBoxItem>
      {props.data.img !== "" && (
        <Img status={props.data.status} src={props.data.img} />
      )}
      <StyledPartyBoxItemText>{props.data.name}</StyledPartyBoxItemText>
    </StyledPartyBoxItem>
  );
};

export { PartySlot };
