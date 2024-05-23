import React, { useState } from "react";
import TextField from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { SearchBarProps } from "@/types/search-bar";

export const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  const [composing, setComposition] = useState(false); //日本語文字列の場合に、
  const startComposition = () => setComposition(true); //変換を確定するリターンと
  const endComposition = () => setComposition(false); //検索のリターンを識別する

  return (
    <Box
      sx={{
        minWidth: "250px",
        display: "flex",
        alignItems: "center",
        border: `1px solid`,
        borderRadius: "10px",
        padding: "5px 10px",
        "& .MuiInputBase-root": { color: "white" },
      }}
    >
      <SearchIcon />
      <TextField
        sx={{ ml: 1, flex: 1 }}
        placeholder="search"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        onCompositionStart={startComposition} //変換開始
        onCompositionEnd={endComposition} //変換終了
        onKeyDown={(e) => {
          if (e.key === "Enter" && !composing) {
            e.preventDefault();
            window.location.href = `/search/art?q=${searchTerm}`;
          }
        }}
      />
    </Box>
  );
};
