import { AppBar, Toolbar, Typography, Button, Box, Drawer, List, ListItem, ListItemText, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useCallback, memo } from "react";
import axiosInstance from "../../api/axios";
import { logoutUser } from "../../modules/authentication/services/authService";
import logo from "../../assets/full_logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [role, setRole] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await axiosInstance.get("auth/check_session/");
        const userRole = res.data.role;

        setRole(userRole);

        // Fix: redirect organizer if landed on volunteer page
        if (userRole === "organizer" && window.location.pathname === "/") {
          navigate("/org/opportunities");
        }

      } catch {
        setRole(null);
      }
    };

    checkSession();
  }, [navigate]);

  const handleLogout = useCallback(async () => {
    await logoutUser();
    navigate("/login");
  }, [navigate]);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const drawerContent = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, pb: 2 }}>
        <Typography variant="h6" color="primary">
          Volunteer Platform
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List>
        {role === "volunteer" && (
          <>
            <ListItem component={RouterLink} to="/" onClick={handleDrawerToggle}>
              <ListItemText primary="Opportunities" />
            </ListItem>
            <ListItem component={RouterLink} to="/history" onClick={handleDrawerToggle}>
              <ListItemText primary="History" />
            </ListItem>
            <ListItem component={RouterLink} to="/profile" onClick={handleDrawerToggle}>
              <ListItemText primary="Profile" />
            </ListItem>
          </>
        )}
        
        {role === "organizer" && (
          <>
            <ListItem component={RouterLink} to="/org/opportunities" onClick={handleDrawerToggle}>
              <ListItemText primary="My Opportunities" />
            </ListItem>
            <ListItem component={RouterLink} to="/org/pending" onClick={handleDrawerToggle}>
              <ListItemText primary="Pending Requests" />
            </ListItem>
            <ListItem component={RouterLink} to="/org/history" onClick={handleDrawerToggle}>
              <ListItemText primary="History" />
            </ListItem>
            <ListItem component={RouterLink} to="/org/profile" onClick={handleDrawerToggle}>
              <ListItemText primary="Profile" />
            </ListItem>
          </>
        )}
        
        <ListItem component={RouterLink} to="/about" onClick={handleDrawerToggle}>
          <ListItemText primary="About" />
        </ListItem>
        
        <ListItem component={RouterLink} to="/contact" onClick={handleDrawerToggle}>
          <ListItemText primary="Contact" />
        </ListItem>
        
        <ListItem onClick={() => { handleLogout(); handleDrawerToggle(); }}>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );

  if (!role) return null;

  return (
    <>
      <AppBar position="static" elevation={2}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1200px",
            width: "100%",
            mx: "auto",
          }}
        >
          {/* LOGO */}
          <Box
            component={RouterLink}
            to={role === "organizer" ? "/org/opportunities" : "/"}
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "white",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Volunteer Platform Logo"
              sx={{
                height: isMobile ? 35 : 45,
                mr: 1,
              }}
            />
          </Box>

          {/* DESKTOP NAVIGATION */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1 }}>

              {/* VOLUNTEER NAV */}
              {role === "volunteer" && (
                <>
                  <Button color="inherit" component={RouterLink} to="/">
                    Opportunities
                  </Button>

                  <Button color="inherit" component={RouterLink} to="/history">
                    History
                  </Button>

                  <Button color="inherit" component={RouterLink} to="/profile">
                    Profile
                  </Button>
                </>
              )}

              {/* ORGANIZER NAV */}
              {role === "organizer" && (
                <>
                  <Button
                    color="inherit"
                    component={RouterLink}
                    to="/org/opportunities"
                  >
                    My Opportunities
                  </Button>

                  <Button
                    color="inherit"
                    component={RouterLink}
                    to="/org/pending"
                  >
                    Pending Requests
                  </Button>

                  <Button
                    color="inherit"
                    component={RouterLink}
                    to="/org/history"
                  >
                    History
                  </Button>

                  <Button
                    color="inherit"
                    component={RouterLink}
                    to="/org/profile"
                  >
                    Profile
                  </Button>
                </>
              )}

              {/* STATIC PAGES */}
              <Button color="inherit" component={RouterLink} to="/about">
                About
              </Button>

              <Button color="inherit" component={RouterLink} to="/contact">
                Contact
              </Button>

              {/* LOGOUT */}
              <Button
                color="inherit"
                onClick={handleLogout}
                sx={{ fontWeight: 600 }}
              >
                Logout
              </Button>
            </Box>
          )}

          {/* MOBILE MENU BUTTON */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default memo(Navbar);