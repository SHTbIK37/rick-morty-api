import { TextField } from "@mui/material";
const Search = () => {
  return (
    <TextField
      InputProps={{ sx: { height: 80, fontSize: "30px", fontWeight: "light" } }}
      id="search"
      variant="outlined"
      placeholder="RICK"
      fullWidth
    />
  );
};
export { Search };
