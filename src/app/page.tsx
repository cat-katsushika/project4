import type { NextPage } from "next";
import { Grid, Box, Typography } from "@mui/material";
import { Article } from "@/components/article";

const Page: NextPage = () => {
  return (
    <>
      <Box sx={{ maxWidth: "960px", padding: "0 24px" }}>
        <Typography
          sx={{ fontSize: "32px", fontWeight: "700", marginBottom: "32px" }}
        >
          Trending
        </Typography>
        <Grid container spacing={2}>
          {[...Array(10)].map(
            (
              _,
              index // 仮で10個の Article コンポーネントを表示
            ) => (
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
            )
          )}
        </Grid>
      </Box>
    </>
  );
};

export default Page;
