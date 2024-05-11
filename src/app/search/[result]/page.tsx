import React from "react";
import { SearchResultList } from "./search-result";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

interface PageProps {
  searchParams: {
    q?: string;
  };
}
const ArtSearchPage = async ({ searchParams }: PageProps) => {
  const query = searchParams.q ?? "";
  return (
    <Box sx={{ padding: "0 24px" }}>
      {query !== "" ? (
        <SearchResultList query={query} />
      ) : (
        <Typography
          sx={{ fontSize: "32px", fontWeight: "700", marginBottom: "32px" }}
        >
          検索クエリが設定されていません。
        </Typography>
      )}
    </Box>
  );
};

export default ArtSearchPage;
