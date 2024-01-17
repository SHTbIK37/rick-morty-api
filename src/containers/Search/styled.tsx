import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    fontSize: "30px",
    fontWeight: "lighter",
  },
  fontSize: "30px",
  width: "100%",
  height: 80,
  id: "search",
  variant: "outlined",
});
export const StyledMainBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
