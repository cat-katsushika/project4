"use client";

import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import NextTopLoader from "nextjs-toploader";
import React, { useState } from "react";
import { SearchBar } from "../components/search-bar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogoutMenu = () => {
    setAnchorElUser(null);
    setIsLogin(false);
  };

  const handleLoginMenu = () => {
    setAnchorElUser(null);
    setIsLogin(true);
  };

  return (
    //data-color-mode="light"でエディタを白くできる
    <html data-color-mode="light" style={{ height: "100%" }}>
      <body
        style={{
          margin: 0,
          height: "100%",
        }}
      >
        <NextTopLoader showSpinner={false} />
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <AppBar position="static">
              <Container
                maxWidth="xl"
                sx={{ "&.MuiContainer-root": { padding: "0 24px" } }}
              >
                <Toolbar
                  disableGutters
                  sx={{
                    justifyContent: "space-between",
                    "&.MuiToolbar-root": { minHeight: "64px" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      href="/"
                      sx={{
                        marginRight: "30px",
                        display: "flex",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      LOGO
                    </Typography>
                    <SearchBar
                      searchTerm={searchTerm}
                      setSearchTerm={setSearchTerm}
                    />
                  </Box>
                  {isLogin ? (
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Avatar alt="icon" src="" />
                        </IconButton>
                      </Tooltip>

                      <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        <MenuItem
                          onClick={handleCloseUserMenu}
                          component="a"
                          href="/user"
                          sx={{ color: "black" }}
                        >
                          <Typography textAlign="center">Profile</Typography>
                        </MenuItem>
                        <MenuItem
                          onClick={handleCloseUserMenu}
                          component="a"
                          href="/publish"
                        >
                          <Typography textAlign="center">
                            New Article
                          </Typography>
                        </MenuItem>
                        <MenuItem onClick={handleLogoutMenu}>
                          <Typography textAlign="center">Logout</Typography>
                        </MenuItem>
                      </Menu>
                    </Box>
                  ) : (
                    <Box sx={{ flexGrow: 0 }} onClick={handleLoginMenu}>
                      <Button
                        sx={{
                          border: "1px solid white",
                          color: "white",
                          borderRadius: "10px",
                        }}
                      >
                        ログイン
                      </Button>
                    </Box>
                  )}
                </Toolbar>
              </Container>
            </AppBar>
            <Box
              sx={{
                padding: "48px 24px 64px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {children}
            </Box>
          </Box>
          <Box
            component="footer"
            sx={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              minHeight: "60px",
              width: "100%",
              backgroundColor: "#1876d2",
              color: "white",
            }}
          >
            <Typography variant="caption">©2024 cat-katsushika</Typography>
          </Box>
        </Box>
      </body>
    </html>
  );
}
