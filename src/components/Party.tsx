import { Box, Typography } from "@mui/material";

import { PartySlot } from "./PartySlot";

const Party = () => {
  return (
    <Box sx={{ textAlign: "center", m: 10 }}>
      <Typography fontWeight={"bold"} variant="h4">
        PARTY
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {/* <RickSlot></RickSlot>
        <MortySlot></MortySlot> */}
        <PartySlot id={"rickSlot"} name={"RICK"}></PartySlot>
        <PartySlot id={"mortySlot"} name={"MORTY"}></PartySlot>
      </Box>
    </Box>
  );
};
export { Party };
