"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Grid, Typography } from "@mui/material";

interface SearchResultListProps {
  query: string;
}

export const SearchResultList: React.FC<SearchResultListProps> = ({
  query,
}) => {
  // 検索結果を保持するための状態

  const [searchResults, setSearchResults] = useState<any[]>([
    { title: "記事タイトル1", publish_date: "2024-05-01", author: "著者A" },
    { title: "記事タイトル2", publish_date: "2024-04-30", author: "著者B" },
    { title: "記事タイトル3", publish_date: "2024-04-29", author: "著者C" },
    { title: "記事タイトル4", publish_date: "2024-04-28", author: "著者D" },
    { title: "記事タイトル5", publish_date: "2024-04-27", author: "著者E" },
    { title: "記事タイトル6", publish_date: "2024-04-26", author: "著者F" },
    { title: "記事タイトル7", publish_date: "2024-04-25", author: "著者G" },
    { title: "記事タイトル8", publish_date: "2024-04-24", author: "著者H" },
    { title: "記事タイトル9", publish_date: "2024-04-23", author: "著者I" },
    { title: "記事タイトル10", publish_date: "2024-04-22", author: "著者J" },
  ]);

  // ページがマウントされたときにデータをfetchする
  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await axios.get(`API_ENDPOINT?q=${query}`);
        //setSearchResults(response.data || []); // レスポンスがnullの場合は空の配列を設定する
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // cleanup
    return () => {
      // 何かしらのクリーンアップ処理があればここに記述する
    };
  }, [query]);

  return (
    <div>
      <Typography
        sx={{ fontSize: "32px", fontWeight: "700", marginBottom: "32px" }}
      >
        Results for: {query}
      </Typography>
      <Grid container spacing={2}>
        {/* 検索結果の表示 */}
        {searchResults.map((result, index) => (
          <Grid
            item
            xs={12} // 1列表示
            sm={6} // 2列表示
            md={4} // 3列表示
            lg={3} // 4列表示
            xl={2} // 6列表示
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              component="a"
              href=""
              sx={{
                maxWidth: "250px",
                textDecoration: "none",
                color: "black",
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
                AnthropicAI Tool で Retrieval-Augmented Generation
                を実装してみた AnthropicAI Tool で Retrieval-Augmented
                Generation を実装してみた
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
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
