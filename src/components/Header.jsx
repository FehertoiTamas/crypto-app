import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Hidden, List, ListItem, ListItemText, Drawer } from "@mui/material";
import "../styles/Header.css";
import { useState } from "react";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawerMenuItems = [
    { text: "Home", link: "/" },
    { text: "Cryptocurrencies", link: "/Cryptocurrencies" },
    { text: "About", link: "/About" },
  ];

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Hidden mdUp>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden mdDown>
            <Typography
              className="navbar-items"
              style={{ textDecoration: "none", color: "inherit" }}
              variant="h6"
              component={Link}
              to="/"
            >
              Home
            </Typography>
            <Typography
              className="navbar-items"
              style={{ textDecoration: "none", color: "inherit" }}
              variant="h6"
              component={Link}
              to="/Cryptocurrencies"
            >
              Cryptocurrencies
            </Typography>
            <Typography
              className="navbar-items"
              style={{ textDecoration: "none", color: "inherit" }}
              variant="h6"
              component={Link}
              to="/About"
            >
              About
            </Typography>
          </Hidden>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          {drawerMenuItems.map((item) => (
            <ListItem
              key={item.text}
              component={Link}
              to={item.link}
              onClick={toggleDrawer}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Header;
