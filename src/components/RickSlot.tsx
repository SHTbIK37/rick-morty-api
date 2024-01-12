import { Box, Typography } from "@mui/material";

const RickSlot = () => {
  return (
    <Box
      id="rickSlot"
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
        RICK
      </Typography>
    </Box>
  );
};
export { RickSlot };
