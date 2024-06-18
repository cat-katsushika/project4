"use client";

import { Box, Button, Typography } from "@mui/material";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MarkdownEditor = dynamic(() => import("@uiw/react-markdown-editor"), {
  ssr: false, // This ensures that the component is only rendered on the client-side
});

const Page: NextPage = () => {
  const [markdown, setMarkdown] = useState(
    `# This is a H1  \n## This is a H2  \n###### This is a H6`
  );
  const router = useRouter();
  const handleClick = () => {
    router.push("/user");
  };

  useEffect(() => {
    // Check if ResizeObserver is defined before using it
    if (typeof ResizeObserver !== "undefined") {
      // Your code that uses ResizeObserver
    }
  }, []);

  return (
    <Box sx={{ width: "100vw", padding: "0 24px" }}>
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "32px",
          lineHeight: "1.5",
          marginBottom: "32px",
        }}
      >
        New Article
      </Typography>
      <MarkdownEditor
        value={markdown}
        width="100%"
        height="400px"
        onChange={(value, viewUpdate) => setMarkdown(value)}
      />
      <Button
        sx={{
          marginTop: "16px",
          color: "white",
          backgroundColor: "#1976d2",
          "&:hover.MuiButton-root": {
            backgroundColor: "#6ba3d9",
          },
        }}
        onClick={handleClick}
      >
        保存
      </Button>
    </Box>
  );
};

export default Page;
