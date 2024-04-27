"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { SearchBar } from "../components/search-bar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <html style={{ height: "100%" }}>
      <body
        style={{
          margin: 0,
          height: "100%",
        }}
      >
        <Box
          sx={{
            height: "100vh",
	    position:"relative"
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
                    <SearchBar />
                  </Box>
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
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
                        <MenuItem onClick={handleCloseUserMenu}>
                          <Typography textAlign="center" ><a href="/user" style={{textDecoration: "none", color:"black"}}>Profile</a></Typography>
                        </MenuItem>
			<MenuItem onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">Logout</Typography>
                        </MenuItem>
                    </Menu>
                  </Box>
                </Toolbar>
              </Container>
            </AppBar>
	    <Box sx={{padding:"48px 24px 64px"}}>
              {children}
	    </Box>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              minHeight: "60px",
	      width:"100%",
              backgroundColor: "#1876d2",
              color: "white",
	      position:"absolute",
	      bottom:"0"
            }}
          >
            <Typography variant="caption">©2024 cat-katsushika</Typography>
          </Box>
        </Box>
      </body>
    </html>
  );
}
