import { useState, type FC } from "react";

import { Search } from "../../containers/Search/index";
import { Party } from "../Party/index";
import { TParty } from "../../types/types";
import { StyledAppBox } from "./styled";

const App: FC = () => {
  const [party, setParty] = useState<TParty>({
    rick: { status: "nofilled", img: "", name: "RICK" },
    morty: { status: "nofilled", img: "", name: "MORTY" },
  });
  return (
    <StyledAppBox>
      <Search setParty={setParty} party={party} />
      <Party party={party} />
    </StyledAppBox>
  );
};

export default App;
