import type { SetStateAction } from "react";

import type { TParty } from "../../types/types";

export type TDebounce = {};
export type TResponse = {
  characters: {
    results: {
      id: string;
      image: string;
      name: string;
    }[];
  };
};
export type TSearchProps = {
  setParty: React.Dispatch<SetStateAction<TParty>>;
};
