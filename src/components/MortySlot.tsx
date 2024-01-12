import { Box, Typography } from "@mui/material";

const MortySlot = () => {
  return (
    <Box
      id="mortySlot"
      sx={{
        justifyContent: "center",
        display: "flex",
        width: "180px",
        height: "220px",
        backgroundColor: "#DADADA",
        m: 2,
      }}
    >
      <Typography
        fontWeight={"light"}
        mb={2}
        sx={{ alignSelf: "flex-end" }}
        color={"white"}
        variant="h5"
      >
        MORTY
      </Typography>
    </Box>
  );
};
export { MortySlot };
