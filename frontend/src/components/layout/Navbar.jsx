import { AppBar, Toolbar, Typography, Button, Box, Drawer, List, ListItem, ListItemText, IconButton, useMediaQuery, useTheme, Menu, MenuItem } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logoutUser } from "../../modules/authentication/services/authService";
import logo from "../../assets/full_logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [role, setRole] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesMenuAnchor, setResourcesMenuAnchor] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const userData = localStorage.getItem("userData");

    if (token && userData) {
      try {
        const parsed = JSON.parse(userData);
        const userRole = parsed.role;
        setRole(userRole);

        // Fix: redirect organizer if landed on volunteer page
        if (userRole === "organizer" && window.location.pathname === "/") {
          navigate("/org/opportunities");
        }
      } catch {
        setRole(null);
      }
    } else {
      setRole(null);
    }
  }, [navigate]);

  const handleLogout = async () => {
    await logoutUser();
    // Clear all JWT tokens and user data from localStorage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userData");
    navigate("/login");
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleResourcesMenuOpen = (event) => {
    setResourcesMenuAnchor(event.currentTarget);
  };

  const handleResourcesMenuClose = () => {
    setResourcesMenuAnchor(null);
  };

  const handleResourcesMenuItemClick = (path) => {
    handleResourcesMenuClose();
    navigate(path);
  };

  const drawerContent = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, pb: 2 }}>
        <Typography variant="h6" color="primary" sx={{ color: 'white' }}>
          Volunteer Platform
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List>
        {role === "volunteer" && (
          <>
            <ListItem 
              component={RouterLink} 
              to="/" 
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                }
              }}
            >
              <ListItemText primary="Opportunities" />
            </ListItem>
            <ListItem 
              component={RouterLink} 
              to="/volunteer-blogs" 
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                }
              }}
            >
              <ListItemText primary="Blogs" />
            </ListItem>
            <ListItem 
              component={RouterLink} 
              to="/guide" 
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                }
              }}
            >
              <ListItemText primary="Volunteer Guide" />
            </ListItem>
            <ListItem 
              component={RouterLink} 
              to="/history" 
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                }
              }}
            >
              <ListItemText primary="History" />
            </ListItem>
            <ListItem 
              component={RouterLink} 
              to="/profile" 
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                }
              }}
            >
              <ListItemText primary="Profile" />
            </ListItem>
          </>
        )}
        
        {role === "organizer" && (
          <>
            <ListItem 
              component={RouterLink} 
              to="/org/opportunities" 
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                }
              }}
            >
              <ListItemText primary="My Opportunities" />
            </ListItem>
            <ListItem 
              component={RouterLink} 
              to="/org/pending" 
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                }
              }}
            >
              <ListItemText primary="Pending Requests" />
            </ListItem>
            <ListItem 
              component={RouterLink} 
              to="/org/guide" 
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                }
              }}
            >
              <ListItemText primary="Organization Guide" />
            </ListItem>
            <ListItem 
              component={RouterLink} 
              to="/org/history" 
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                }
              }}
            >
              <ListItemText primary="History" />
            </ListItem>
            <ListItem 
              component={RouterLink} 
              to="/org/profile" 
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                }
              }}
            >
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem 
              component={RouterLink} 
              to='/org/blogs' 
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                }
              }}
            >
              <ListItemText primary="My Blogs" />
            </ListItem> 
          </>
        )}
        
        <ListItem 
          component={RouterLink} 
          to="/about" 
          onClick={handleDrawerToggle}
          sx={{ 
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
            }
          }}
        >
          <ListItemText primary="About" />
        </ListItem>
        
        <ListItem 
          component={RouterLink} 
          to="/faq" 
          onClick={handleDrawerToggle}
          sx={{ 
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
            }
          }}
        >
          <ListItemText primary="FAQ" />
        </ListItem>
        
        <ListItem 
          component={RouterLink} 
          to="/contact" 
          onClick={handleDrawerToggle}
          sx={{ 
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
            }
          }}
        >
          <ListItemText primary="Contact" />
        </ListItem>
        
        <ListItem 
          onClick={() => { handleLogout(); handleDrawerToggle(); }}
          sx={{ 
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
            }
          }}
        >          
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );

  if (!role) return null;

  return (
    <>
      <AppBar 
        position="static" 
        elevation={0}
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
        }}
      >
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
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>

              {/* VOLUNTEER NAV */}
              {role === "volunteer" && (
                <>
                  <Button 
                    color="inherit" 
                    component={RouterLink} 
                    to="/home"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      borderRadius: '8px',
                      px: 2,
                      py: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        color: 'white',
                        transform: 'translateY(-1px)',
                      }
                    }}
                  >
                    Opportunities
                  </Button>

                  <Button 
                    color="inherit" 
                    component={RouterLink} 
                    to="/volunteer-blogs"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      borderRadius: '8px',
                      px: 2,
                      py: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        color: 'white',
                        transform: 'translateY(-1px)',
                      }
                    }}
                  >
                    Blogs
                  </Button>

                  <Button 
                    color="inherit" 
                    component={RouterLink} 
                    to="/history"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      borderRadius: '8px',
                      px: 2,
                      py: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        color: 'white',
                        transform: 'translateY(-1px)',
                      }
                    }}
                  >
                    History
                  </Button>

                  <Button 
                    color="inherit" 
                    component={RouterLink} 
                    to="/profile"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      borderRadius: '8px',
                      px: 2,
                      py: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        color: 'white',
                        transform: 'translateY(-1px)',
                      }
                    }}
                  >
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
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      borderRadius: '8px',
                      px: 2,
                      py: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        color: 'white',
                        transform: 'translateY(-1px)',
                      }
                    }}
                  >
                   Opportunities
                  </Button>

                  <Button
                    color="inherit"
                    component={RouterLink}
                    to="/org/pending"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      borderRadius: '8px',
                      px: 2,
                      py: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        color: 'white',
                        transform: 'translateY(-1px)',
                      }
                    }}
                  >
                    Pending Requests
                  </Button>

                  <Button
                    color="inherit"
                    component={RouterLink}
                    to="/org/history"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      borderRadius: '8px',
                      px: 2,
                      py: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        color: 'white',
                        transform: 'translateY(-1px)',
                      }
                    }}
                  >
                    History
                  </Button>

                  <Button
                    color="inherit"
                    component={RouterLink}
                    to="/org/profile"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      borderRadius: '8px',
                      px: 2,
                      py: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        color: 'white',
                        transform: 'translateY(-1px)',
                      }
                    }}
                  >
                    Profile
                  </Button>

                  <Button
                    color="inherit"
                    component={RouterLink} 
                    to="/org/blogs"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      borderRadius: '8px',
                      px: 2,
                      py: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        color: 'white',
                        transform: 'translateY(-1px)',
                      }
                    }}
                  >
                    My Blogs
                  </Button>
                </>
              )}

              {/* STATIC PAGES */}
              <Button
                color="inherit"
                onMouseEnter={handleResourcesMenuOpen}
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  borderRadius: '8px',
                  px: 2,
                  py: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    transform: 'translateY(-1px)',
                  }
                }}
              >
                Resources
              </Button>

              <Menu
                anchorEl={resourcesMenuAnchor}
                open={Boolean(resourcesMenuAnchor)}
                onClose={handleResourcesMenuClose}
                onMouseLeave={handleResourcesMenuClose}
                MenuListProps={{
                  onMouseLeave: handleResourcesMenuClose,
                }}
                PaperProps={{
                  sx: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    mt: 1,
                    minWidth: '200px',
                  }
                }}
                sx={{
                  '& .MuiMenuItem-root': {
                    color: '#333',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    borderRadius: '8px',
                    mx: 1,
                    my: 0.5,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(102, 126, 234, 0.1)',
                      color: '#667eea',
                    },
                  },
                }}
              >
                {role === "organizer" && (
                  <MenuItem onClick={() => handleResourcesMenuItemClick("/org/guide")}>
                    Organization Guide
                  </MenuItem>
                )}
                {role === "volunteer" && (
                  <MenuItem onClick={() => handleResourcesMenuItemClick("/guide")}>
                    Volunteer Guide
                  </MenuItem>
                )}
                <MenuItem onClick={() => handleResourcesMenuItemClick("/about")}>
                  About
                </MenuItem>
                <MenuItem onClick={() => handleResourcesMenuItemClick("/faq")}>
                  FAQ
                </MenuItem>
                <MenuItem onClick={() => handleResourcesMenuItemClick("/contact")}>
                  Contact
                </MenuItem>
              </Menu>

              {/* LOGOUT */}
              <Button
                color="inherit"
                onClick={handleLogout}
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  borderRadius: '8px',
                  px: 2,
                  py: 1,
                  transition: 'all 0.3s ease',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    transform: 'translateY(-1px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }
                }}
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
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: 'white',
                }
              }}
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
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
          }
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;