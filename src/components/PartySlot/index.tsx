import type { FC } from "react";

import { StyledPartyBoxItem, StyledPartyBoxItemText } from "./styled";
import type { TPartySlotProps } from "./types";
import { Img } from "../Img/index";

const PartySlot: FC<TPartySlotProps> = (props) => {
  return (
    <StyledPartyBoxItem>
      {props.data.img !== "" && (
        <Img alt={props.data.name} src={props.data.img} />
      )}
      <StyledPartyBoxItemText>{props.data.name}</StyledPartyBoxItemText>
    </StyledPartyBoxItem>
  );
};

export { PartySlot };
