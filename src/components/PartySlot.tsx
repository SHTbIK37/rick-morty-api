import { Box, Typography } from "@mui/material";

const PartySlot = (props: any) => {
  return (
    <Box
      id={props.id}
      sx={{
        justifyContent: "center",
        display: "flex",
        width: "180px",
        height: "220px",
        backgroundColor: "#DADADA",
        overflow: "hidden",
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
        {props.name}
      </Typography>
    </Box>
  );
};
export { PartySlot };
