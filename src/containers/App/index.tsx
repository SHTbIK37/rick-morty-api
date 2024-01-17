import { useState, type FC } from "react";

import { Search } from "../../containers/Search";
import { Party } from "../../components/Party";
import { TParty } from "../../types/types";
import { StyledAppBox } from "./styled";

const App: FC = () => {
  const [party, setParty] = useState<TParty>({
    rick: { img: "", name: "RICK" },
    morty: { img: "", name: "MORTY" },
  });

  return (
    <StyledAppBox>
      <Search setParty={setParty} />
      <Party party={party} />
    </StyledAppBox>
  );
};

export default App;
