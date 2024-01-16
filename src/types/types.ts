import React, { SetStateAction } from "react";

export type TItem = {
  id: string;
  image: string;
  name: string;
};

export type TItemProps = {
  bannedList: Array<string>;
  id: string;
  item: TItem;
  setBannedList: React.Dispatch<SetStateAction<Array<string>>>;
  setParty: React.Dispatch<SetStateAction<TParty>>;
};

export type TItemListProps = {
  setParty: React.Dispatch<SetStateAction<TParty>>;
  bannedList: Array<string>;
  items: Array<TItem>;
  setBannedList: React.Dispatch<SetStateAction<Array<string>>>;
};
export type TParty = {
  rick: { status: string; img: string; name?: string };
  morty: { status: string; img: string; name?: string };
};
export type TPartyProps = {
  party: TParty;
};
export type TSearchProps = {
  setParty: React.Dispatch<SetStateAction<TParty>>;
  party: TParty;
};
export type TPartySlotProps = {
  data: { status: string; img: string; name?: string };
};
export type TImgProps = {
  src: string;
  status: string;
};
