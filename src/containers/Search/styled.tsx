import styled from "@emotion/styled";
import { TextField } from "@mui/material";

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
