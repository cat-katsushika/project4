import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Page: NextPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Typography sx={{ fontSize: "32px", fontWeight: "700" }}>
          タイトル
        </Typography>
        <Typography
          sx={{ fontSize: "16px", color: "#65717b", letterSpacing: "1px" }}
        >
          2023/05/17に更新
        </Typography>
      </Box>
    </>
  );
};

export default Page;
