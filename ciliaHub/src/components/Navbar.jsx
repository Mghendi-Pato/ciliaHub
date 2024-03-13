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
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import CssBaseline from "@mui/material/CssBaseline";
import PropTypes from "prop-types";

const Navbar = (props) => {
  const pages = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Hide appbar on scroll
  function HideOnScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger();

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
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
              <Stack
                direction="row"
                sx={{ display: { xs: "none", md: "flex" } }}>
                {pages.map((page, index) => (
                  <IconButton
                    key={index}
                    onClick={() => scrollToSection(page.id)}>
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
                    mt: 15,
                    width: "100vw",
                    display: { xs: "block", md: "none" },
                  }}>
                  {pages.map((page, index) => (
                    <>
                      <MenuItem
                        key={index}
                        onClick={() => {
                          handleCloseNavMenu();
                          scrollToSection(page.id);
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
      </HideOnScroll>
    </>
  );
};

export default Navbar;
