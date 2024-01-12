import { Box, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const Item = (item: any) => {
  return (
    <Box
      sx={{
        width: "180px",
        height: "220px",
        backgroundColor: "grey",
        m: 2,
        flexBasis: "22%",
      }}
    >
      <Button
        sx={{
          float: "right",
          m: 1,
          p: 0,
          backgroundColor: "white",
          minWidth: "10px",
          width: "30px",
          maxWidth: "30px",
          height: "30px",
          borderRadius: "15px",
        }}
      >
        <CloseIcon style={{ color: "black" }} fontSize="small" />
      </Button>
      <Typography>Возраст: {item.item.age}</Typography>
    </Box>
  );
};
export { Item };
