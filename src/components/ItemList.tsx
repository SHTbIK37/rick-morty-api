import { Box } from "@mui/material";
import { Item } from "./Item";
// const items = [
//   { id: 1, name: "ivan", age: 21 },
//   { id: 2, name: "ivan", age: 20 },
//   { id: 3, name: "ivan", age: 19 },
//   { id: 4, name: "ivan", age: 18 },
//   { id: 5, name: "ivan", age: 17 },
//   { id: 6, name: "ivan", age: 16 },
// ];
const ItemList = ({ items }: any) => {
  console.log(items);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        "&>:nth-of-type(4n)": { marginRight: "0" },
        "&>:nth-of-type(4n+1)": { marginLeft: "0" },
      }}
    >
      {items.map((item: any) => (
        <Item key={item.id} item={item} />
      ))}
    </Box>
  );
};
export { ItemList };
