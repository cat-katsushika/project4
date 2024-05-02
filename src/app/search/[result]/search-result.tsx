"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Article } from "../../../components/article";
import { Grid, Typography } from "@mui/material";

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
  // エラーを管理する状態
  const [error, setError] = useState<string | null>(null);
  // ローディング中を管理する状態
  const [loading, setLoading] = useState<boolean>(true);

  // ページがマウントされたときにデータをfetchする
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        //const response = await axios.get(`API_ENDPOINT?q=${query}`);
        //setSearchResults(response.data || []); // レスポンスがnullの場合は空の配列を設定する
        setLoading(false);
      } catch (error) {
        setError("データを取得できませんでした。");
        setLoading(false);
      }
    };
    fetchData();
    // cleanup
    return () => {
      // 何かしらのクリーンアップ処理があればここに記述する
    };
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Article />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
