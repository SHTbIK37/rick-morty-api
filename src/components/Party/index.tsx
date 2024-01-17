import type { FC } from "react";

import { PartySlot } from "../PartySlot/index";
import type { TPartyProps } from "./types";
import {
  StyledPartyBox,
  StyledPartyBoxItems,
  StyledPartyBoxText,
} from "./styled";

export const Party: FC<TPartyProps> = (props) => {
  return (
    <StyledPartyBox>
      <StyledPartyBoxText>PARTY</StyledPartyBoxText>
      <StyledPartyBoxItems>
        <PartySlot data={props.party.rick}></PartySlot>
        <PartySlot data={props.party.morty}></PartySlot>
      </StyledPartyBoxItems>
    </StyledPartyBox>
  );
};
