import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

const Page: NextPage = () => {
  return (
    <Box sx={{ height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          paddingBottom: "52px",
        }}
      >
        <Typography sx={{ fontSize: "32px", fontWeight: "700" }}>
          タイトル
        </Typography>
        <Box sx={{ display: "flex", gap: "12px" }}>
          <Box
            sx={{ display: "flex", gap: "4px", textDecoration: "none" }}
            component="a"
            href="/user"
          >
            <Avatar sx={{ width: "25px", height: "25px" }} />
            <Typography
              sx={{ fontSize: "16px", color: "#65717b", letterSpacing: "1px" }}
            >
              user
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: "16px", color: "#65717b", letterSpacing: "1px" }}
          >
            2023/05/17に更新
          </Typography>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#edf2f7", padding: "25px" }}>
        Pythonの標準ライブラリでできる並列実行を、あらためて総当たりで速度比較しよう
        <br />
        ウォーターフォールチャートで、それぞれの並列処理の処理時間の特徴を可視化しよう
        <br />
        boto3の実行をモデルケースにして、どの並列処理が一番早いのかを調べよう
        <br />
        Pythonの標準ライブラリでできる並列実行を、あらためて総当たりで速度比較しよう
        <br />
        ウォーターフォールチャートで、それぞれの並列処理の処理時間の特徴を可視化しよう
        <br />
        boto3の実行をモデルケースにして、どの並列処理が一番早いのかを調べよう
        <br />
        Pythonの標準ライブラリでできる並列実行を、あらためて総当たりで速度比較しよう
        <br />
        ウォーターフォールチャートで、それぞれの並列処理の処理時間の特徴を可視化しよう
        <br />
        boto3の実行をモデルケースにして、どの並列処理が一番早いのかを調べよう
        <br />
        Pythonの標準ライブラリでできる並列実行を、あらためて総当たりで速度比較しよう
        <br />
        ウォーターフォールチャートで、それぞれの並列処理の処理時間の特徴を可視化しよう
        <br />
        boto3の実行をモデルケースにして、どの並列処理が一番早いのかを調べよう
        <br />
        Pythonの標準ライブラリでできる並列実行を、あらためて総当たりで速度比較しよう
        <br />
        ウォーターフォールチャートで、それぞれの並列処理の処理時間の特徴を可視化しよう
        <br />
        boto3の実行をモデルケースにして、どの並列処理が一番早いのかを調べよう
        <br />
      </Box>
    </Box>
  );
};

export default Page;
