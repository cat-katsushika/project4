import * as React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

export const SearchBar = () => {
  return (
    <Box
      sx={{
        minWidth: "250px",
        display: "flex",
        alignItems: "center",
        border: "1px solid",
        borderRadius: "10px",
        padding: "5px 10px",
        "& .MuiInputBase-root": { color: "white" },
      }}
    >
      <SearchIcon />
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="search" />
    </Box>
  );
};
