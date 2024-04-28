import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const Article = () => {
  return (
    <Box
      sx={{
        maxWidth: "250px",
        maxHeight: "140px",
        backgroundColor: "#baddff",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        padding: "5px 10px",
        cursor: "pointer",
        "&.MuiBox-root": { padding: "16px" },
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "700",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        AnthropicAI Tool で Retrieval-Augmented Generation を実装してみた
        AnthropicAI Tool で Retrieval-Augmented Generation を実装してみた
      </Typography>
      <Box
        sx={{
          marginTop: "12px",
          color: "#65717b",
          display: "flex",
          gap: "5px",
        }}
      >
        <Typography sx={{ fontSize: "14px" }}>2023/05/17</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FavoriteBorderIcon sx={{ fontSize: "14px" }} />
          <Typography sx={{ fontSize: "14px" }}>12</Typography>
        </Box>
      </Box>
    </Box>
  );
};
