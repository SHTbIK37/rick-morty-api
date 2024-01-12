import { Box, Typography } from "@mui/material";
import { RickSlot } from "./RickSlot";
import { MortySlot } from "./MortySlot";

const Party = () => {
  return (
    <Box sx={{ textAlign: "center", m: 10 }}>
      <Typography fontWeight={"bold"} variant="h4">
        PARTY
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <RickSlot></RickSlot>
        <MortySlot></MortySlot>
      </Box>
    </Box>
  );
};
export { Party };
