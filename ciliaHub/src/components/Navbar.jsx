import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./Logo";
import IconButton from "@mui/material/IconButton";
import { Stack, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  const pages = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Services", route: "/services" },
    { name: "Contact", route: "/contact" },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar elevation={0} sx={{ background: "#1E1E1E", py: 3 }}>
      <Toolbar>
        <Stack
          flexGrow={1}
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-around"
          alignItems="center">
          <Stack>
            <Logo />
          </Stack>
          <Stack direction="row" sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <IconButton key={index}>
                <Button
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                  }}>
                  {page.name}
                </Button>
              </IconButton>
            ))}
          </Stack>
          <Stack
            sx={{
              width: "100vw",
              display: { xs: "flex", md: "none" },
            }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon sx={{ color: "#C6171E" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                width: "100vw",
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page, index) => (
                <>
                  <MenuItem
                    key={index}
                    onClick={() => {
                      handleCloseNavMenu();
                    }}>
                    {page.icon}
                    <Typography
                      textAlign="center"
                      sx={{
                        fontWeight: "bold",
                        ml: 2,
                        fontFamily: '"Roboto", sans-serif',
                      }}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                  <Divider
                    sx={{
                      backgroundColor: "#B6B6B6",
                      height: 1,
                      width: "100vw",
                      margin: "4px 0",
                      display: index === 3 ? "none" : "block",
                    }}
                  />
                </>
              ))}
            </Menu>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
