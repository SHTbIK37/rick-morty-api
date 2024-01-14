import { Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const Item: React.FC<any> = (props: any): null | any => {
  console.log(props.id, props.item.name);
  const setSlot = (name: string) => {
    const slot = document.getElementById(name);
    if (slot)
      slot.innerHTML = `<img
    width="120%"
    height="100%"
    alt=${props.item.name}
    src=${props.item.image}
  />`;
  };
  const setParty = () => {
    if (props.item.name.includes("Rick")) {
      setSlot("rickSlot");
    }
    if (props.item.name.includes("Morty")) {
      setSlot("mortySlot");
    }
  };
  return (
    <Box
      sx={{
        width: "180px",
        height: "220px",
        backgroundColor: "grey",
        m: 2,
        flexBasis: "22%",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
      id={props.id}
      onClick={setParty}
    >
      <img
        width="120%"
        height="100%"
        alt={props.item.name}
        src={props.item.image}
      />
      <Button
        onClick={(event) => {
          event.stopPropagation();
          props.setBannedList([...props.bannedList, props.id]);
        }}
        sx={{
          position: "absolute",
          m: 1,
          p: 0,
          backgroundColor: "white",
          right: 0,
          minWidth: "10px",
          width: "30px",
          maxWidth: "30px",
          height: "30px",
          borderRadius: "15px",
        }}
      >
        <CloseIcon style={{ color: "black" }} fontSize="small" />
      </Button>
    </Box>
  );
};
export { Item };
