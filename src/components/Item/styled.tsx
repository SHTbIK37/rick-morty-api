import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const StyledItem = styled(Box)({
  width: "180px",
  height: "220px",
  backgroundColor: "grey",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
  position: "relative",
});
export const StyledItemButton = styled(Button)({
  position: "absolute",
  margin: 8,
  padding: 0,
  backgroundColor: "white",
  right: 0,
  minWidth: "10px",
  width: "30px",
  maxWidth: "30px",
  height: "30px",
  borderRadius: "15px",
  color: "black",
});
