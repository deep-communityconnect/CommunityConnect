import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  ExpandMore,
  CheckCircle,
  Schedule,
  LocationOn,
  People,
  Star,
  Lightbulb,
  Security,
  Help,
  EmojiEvents,
  VolunteerActivism,
  School,
  TrendingUp,
  Search,
  HowToReg,
  Category,
  FilterList,
  Assignment,
  PlayArrow,
} from "@mui/icons-material";

const VolunteerGuide = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, sm: 5, md: 6 } }}>
      {/* Header */}
      <Box textAlign="center" mb={{ xs: 4, sm: 5, md: 6 }}>
        <Typography 
          variant={isMobile ? "h4" : isTablet ? "h3" : "h2"} 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' }
          }}
        >
          Volunteer Guide
        </Typography>
        <Typography 
          variant={isMobile ? "body1" : "h6"} 
          color="text.secondary" 
          paragraph 
          sx={{ 
            maxWidth: { xs: '100%', sm: 600, md: 700, lg: 800 }, 
            mx: 'auto',
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
          }}
        >
          Everything you need to know to make a difference in your community
        </Typography>
      </Box>

      {/* Quick Start Section */}
      <Box mb={{ xs: 3, sm: 4, md: 5 }}>
        <Card 
          elevation={4}
          sx={{ 
            borderRadius: 3,
            transition: 'all 0.3s ease',
            background: 'linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)',
            '&:hover': { 
              transform: 'translateY(-8px)',
              boxShadow: '0 12px 24px rgba(102, 126, 234, 0.15)',
            },
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4, md: 5, lg: 6 } }}>
            <Typography 
              variant={isMobile ? "h5" : isTablet ? "h4" : "h4"} 
              gutterBottom 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 2,
                fontWeight: 600,
                color: 'text.primary',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' }
              }}
            >
              <Lightbulb sx={{ color: 'primary.main', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }} />
              Quick Start Guide
            </Typography>
            <Typography 
              variant={isMobile ? "body2" : "body1"} 
              color="text.secondary" 
              paragraph 
              sx={{ 
                mb: 4, 
                maxWidth: { xs: '100%', sm: 600, md: 700, lg: 800 }, 
                mx: 'auto',
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
              }}
            >
              New to volunteering? Follow these simple steps to get started on your journey:
            </Typography>
            
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              <Grid item xs={12} sm={6} md={4}>
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: { xs: 2, sm: 2.5, md: 3 },
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #bb6412 0%, #efa907 100%)',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(234, 169, 7, 0.3)',
                    },
                    height: '100%',
                    minHeight: { xs: 200, sm: 220, md: 240 }
                  }}
                >
                  <Box 
                    sx={{ 
                      width: { xs: 50, sm: 55, md: 60, lg: 70 }, 
                      height: { xs: 50, sm: 55, md: 60, lg: 70 }, 
                      borderRadius: '50%', 
                      bgcolor: 'white', 
                      color: 'primary.main',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem', lg: '1.7rem' },
                      fontWeight: 'bold',
                      mb: 2,
                      mx: 'auto'
                    }}
                  >
                    1
                  </Box>
                  <Typography 
                    variant={isMobile ? "subtitle1" : "h6"} 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem', lg: '1.3rem' }
                    }}
                  >
                    Create Profile
                  </Typography>
                  <Typography 
                    variant={isMobile ? "caption" : "body2"} 
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' }
                    }}
                  >
                    Set up your volunteer profile with interests
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: { xs: 2, sm: 2.5, md: 3 },
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(118, 75, 162, 0.15)',
                    },
                    height: '100%',
                    minHeight: { xs: 200, sm: 220, md: 240 }
                  }}
                >
                  <Box 
                    sx={{ 
                      width: { xs: 50, sm: 55, md: 60, lg: 70 }, 
                      height: { xs: 50, sm: 55, md: 60, lg: 70 }, 
                      borderRadius: '50%', 
                      bgcolor: 'white', 
                      color: 'primary.main',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem', lg: '1.7rem' },
                      fontWeight: 'bold',
                      mb: 2,
                      mx: 'auto'
                    }}
                  >
                    2
                  </Box>
                  <Typography 
                    variant={isMobile ? "subtitle1" : "h6"} 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem', lg: '1.3rem' }
                    }}
                  >
                    Browse Opportunities
                  </Typography>
                  <Typography 
                    variant={isMobile ? "caption" : "body2"} 
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' }
                    }}
                  >
                    Find opportunities in your area
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: { xs: 2, sm: 2.5, md: 3 },
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #43a047 0%, #66bb6a 100%)',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(67, 187, 106, 0.15)',
                    },
                    height: '100%',
                    minHeight: { xs: 200, sm: 220, md: 240 }
                  }}
                >
                  <Box 
                    sx={{ 
                      width: { xs: 50, sm: 55, md: 60, lg: 70 }, 
                      height: { xs: 50, sm: 55, md: 60, lg: 70 }, 
                      borderRadius: '50%', 
                      bgcolor: 'white', 
                      color: 'primary.main',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem', lg: '1.7rem' },
                      fontWeight: 'bold',
                      mb: 2,
                      mx: 'auto'
                    }}
                  >
                    3
                  </Box>
                  <Typography 
                    variant={isMobile ? "subtitle1" : "h6"} 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem', lg: '1.3rem' }
                    }}
                  >
                    Apply & Get Approved
                  </Typography>
                  <Typography 
                    variant={isMobile ? "caption" : "body2"} 
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' }
                    }}
                  >
                    Submit applications and wait for approval
                  </Typography>
                </Box>
              </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: { xs: 2, sm: 2.5, md: 3 },
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(118, 75, 162, 0.15)',
                    },
                    height: '100%',
                    minHeight: { xs: 200, sm: 220, md: 240 }
                  }}
                >
                  <Box 
                    sx={{ 
                      width: { xs: 50, sm: 55, md: 60, lg: 70 }, 
                      height: { xs: 50, sm: 55, md: 60, lg: 70 }, 
                      borderRadius: '50%', 
                      bgcolor: 'white', 
                      color: 'primary.main',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem', lg: '1.7rem' },
                      fontWeight: 'bold',
                      mb: 2,
                      mx: 'auto'
                    }}
                  >
                    4
                  </Box>
                  <Typography 
                    variant={isMobile ? "subtitle1" : "h6"} 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem', lg: '1.3rem' }
                    }}
                  >
                    Daily Update
                  </Typography>
                  <Typography 
                    variant={isMobile ? "caption" : "body2"} 
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' }
                    }}
                  >
                    Read a Daily Blogs
                  </Typography>
                </Box>
              </Grid>
              
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Finding Opportunities */}
      <Box mb={{ xs: 3, sm: 4, md: 5 }}>
        <Card 
          elevation={4}
          sx={{ 
            borderRadius: 3,
            transition: 'all 0.3s ease',
            background: 'linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)',
            '&:hover': { 
              transform: 'translateY(-8px)',
              boxShadow: '0 12px 24px rgba(102, 126, 234, 0.15)',
            },
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4, md: 5, lg: 6 } }}>
            <Typography 
              variant={isMobile ? "h5" : isTablet ? "h4" : "h4"} 
              gutterBottom 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 2,
                fontWeight: 600,
                color: 'text.primary',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' }
              }}
            >
              <Search sx={{ color: 'primary.main', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }} />
              Finding Right Opportunity
            </Typography>
            
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              <Grid item xs={12} md={6}>
                <Box 
                  sx={{ 
                    p: { xs: 2, sm: 2.5, md: 3 },
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(118, 75, 162, 0.15)',
                    },
                  }}
                >
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1,
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                    }}
                  >
                    <Category sx={{ color: 'white' }} />
                    Browse by Category
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Explore opportunities organized by cause areas like education, environment, healthcare, and more.
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    <Chip label="Education" size="small" variant="outlined" />
                    <Chip label="Environment" size="small" variant="outlined" />
                    <Chip label="Healthcare" size="small" variant="outlined" />
                    <Chip label="Animal Welfare" size="small" variant="outlined" />
                    {isDesktop && <Chip label="Senior Care" size="small" variant="outlined" />}
                    {isDesktop && <Chip label="Youth Programs" size="small" variant="outlined" />}
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box 
                  sx={{ 
                    p: { xs: 2, sm: 2.5, md: 3 },
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #43a047 0%, #66bb6a 100%)',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(67, 187, 106, 0.15)',
                    },
                  }}
                >
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1,
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                    }}
                  >
                    <FilterList sx={{ color: 'white' }} />
                    Filter by Preferences
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Use filters to find opportunities that match your availability, location, and skill level.
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    <Chip label="Location" size="small" icon={<LocationOn />} variant="outlined" />
                    <Chip label="Time" size="small" icon={<Schedule />} variant="outlined" />
                    <Chip label="Skills" size="small" variant="outlined" />
                    <Chip label="Remote" size="small" variant="outlined" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Application Process */}
      <Box mb={{ xs: 3, sm: 4, md: 5 }}>
        <Card 
          elevation={4}
          sx={{ 
            borderRadius: 3,
            transition: 'all 0.3s ease',
            background: 'linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)',
            '&:hover': { 
              transform: 'translateY(-8px)',
              boxShadow: '0 12px 24px rgba(102, 126, 234, 0.15)',
            },
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4, md: 5, lg: 6 } }}>
            <Typography 
              variant={isMobile ? "h5" : isTablet ? "h4" : "h4"} 
              gutterBottom 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 2,
                fontWeight: 600,
                color: 'text.primary',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' }
              }}
            >
              <HowToReg sx={{ color: 'primary.main', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }} />
              Application Process
            </Typography>
            
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              <Grid item xs={12} sm={6} md={4}>
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: { xs: 2, sm: 2.5, md: 3 },
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(118, 75, 162, 0.15)',
                    },
                  }}
                >
                  <Box 
                    sx={{ 
                      width: { xs: 50, sm: 55, md: 60, lg: 70 }, 
                      height: { xs: 50, sm: 55, md: 60, lg: 70 }, 
                      borderRadius: '50%', 
                      bgcolor: 'white', 
                      color: 'primary.main',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem', lg: '1.7rem' },
                      fontWeight: 'bold',
                      mb: 2,
                      mx: 'auto'
                    }}
                  >
                    1
                  </Box>
                  <Typography 
                    variant={isMobile ? "subtitle1" : "h6"} 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem', lg: '1.3rem' }
                    }}
                  >
                    Apply
                  </Typography>
                  <Typography 
                    variant={isMobile ? "caption" : "body2"} 
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' }
                    }}
                  >
                    Submit your application with a brief message about why you're interested in the opportunity.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: { xs: 2, sm: 2.5, md: 3 },
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #43a047 0%, #66bb6a 100%)',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(67, 187, 106, 0.15)',
                    },
                  }}
                >
                  <Box 
                    sx={{ 
                      width: { xs: 50, sm: 55, md: 60, lg: 70 }, 
                      height: { xs: 50, sm: 55, md: 60, lg: 70 }, 
                      borderRadius: '50%', 
                      bgcolor: 'white', 
                      color: 'primary.main',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem', lg: '1.7rem' },
                      fontWeight: 'bold',
                      mb: 2,
                      mx: 'auto'
                    }}
                  >
                    2
                  </Box>
                  <Typography 
                    variant={isMobile ? "subtitle1" : "h6"} 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem', lg: '1.3rem' }
                    }}
                  >
                    Review
                  </Typography>
                  <Typography 
                    variant={isMobile ? "caption" : "body2"} 
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' }
                    }}
                  >
                    The organization will review your application and may contact you for additional information.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: { xs: 2, sm: 2.5, md: 3 },
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(255, 107, 107, 0.15)',
                    },
                  }}
                >
                  <Box 
                    sx={{ 
                      width: { xs: 50, sm: 55, md: 60, lg: 70 }, 
                      height: { xs: 50, sm: 55, md: 60, lg: 70 }, 
                      borderRadius: '50%', 
                      bgcolor: 'white', 
                      color: 'primary.main',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem', lg: '1.7rem' },
                      fontWeight: 'bold',
                      mb: 2,
                      mx: 'auto'
                    }}
                  >
                    3
                  </Box>
                  <Typography 
                    variant={isMobile ? "subtitle1" : "h6"} 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem', lg: '1.3rem' }
                    }}
                  >
                    Confirmation
                  </Typography>
                  <Typography 
                    variant={isMobile ? "caption" : "body2"} 
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' }
                    }}
                  >
                    Once approved, you'll receive confirmation details about your volunteer service.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Best Practices */}
      <Box mb={4}>
        <Typography variant={isDesktop ? "h3" : "h4"} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Star fontSize={isDesktop ? "large" : "medium"} />
          Best Practices
        </Typography>
        <Grid container spacing={isDesktop ? 4 : 3}>
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-2px)', boxShadow: 4 } }}>
              <CardContent sx={{ p: isDesktop ? 4 : 3 }}>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Assignment fontSize="small" />
                  Before Volunteering
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Research the organization and mission" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Understand time commitments and requirements" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Prepare any necessary documents or training" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Ask questions about expectations" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-2px)', boxShadow: 4 } }}>
              <CardContent sx={{ p: isDesktop ? 4 : 3 }}>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PlayArrow fontSize="small" />
                  During Volunteering
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Be punctual and reliable" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Communicate openly with organizers" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Respect confidentiality and boundaries" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Document your experience and impact" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* FAQ Section */}
      <Box mb={4}>
        <Typography variant={isDesktop ? "h3" : "h4"} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Help fontSize={isDesktop ? "large" : "medium"} />
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={isDesktop ? 3 : 2}>
          <Grid item xs={12} md={6}>
            <Accordion elevation={1}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">Do I need previous experience to volunteer?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Not necessarily! Many opportunities are perfect for beginners and provide training. 
                  Each opportunity listing will indicate the required skill level and any prerequisites.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={1}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">How much time do I need to commit?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Time commitments vary widely from one-time events to ongoing weekly roles. 
                  You can filter opportunities by time commitment to find what fits your schedule.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={6}>
            <Accordion elevation={1}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">Can I volunteer remotely?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes! Many organizations offer remote volunteering opportunities. Look for the "Remote" 
                  filter when browsing opportunities to find virtual roles.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion elevation={1}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">How do I track my volunteer hours?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Your volunteer history is automatically tracked in your profile. You can view all 
                  completed opportunities, total hours served, and download certificates for your records.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>

      {/* Safety Guidelines */}
      <Box mb={{ xs: 3, sm: 4, md: 5 }}>
        <Card 
          elevation={4}
          sx={{ 
            borderRadius: 3,
            transition: 'all 0.3s ease',
            background: 'linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)',
            '&:hover': { 
              transform: 'translateY(-8px)',
              boxShadow: '0 12px 24px rgba(102, 126, 234, 0.15)',
            },
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4, md: 5, lg: 6 } }}>
            <Typography 
              variant={isMobile ? "h5" : isTablet ? "h4" : "h4"} 
              gutterBottom 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 2,
                fontWeight: 600,
                color: 'text.primary',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' }
              }}
            >
              <Security sx={{ color: 'primary.main', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }} />
              Safety Guidelines
            </Typography>
            
            <Paper 
              elevation={4} 
              sx={{ 
                p: { xs: 3, sm: 4, md: 5 }, 
                background: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
                color: 'white',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': { 
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(255, 107, 107, 0.2)',
                },
              }}
            >
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.4rem' }
                }}
              >
                <Security sx={{ color: 'white' }} />
                Your Safety is Our Priority
              </Typography>
              <Typography variant="body2" paragraph>
                While volunteering is generally safe, please keep these guidelines in mind:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <List dense>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}><Security sx={{ color: 'white' }} fontSize="small" /></ListItemIcon>
                      <ListItemText primary="Verify organization legitimacy" primaryTypographyProps={{ variant: 'body2', sx: { color: 'white' } }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}><Security sx={{ color: 'white' }} fontSize="small" /></ListItemIcon>
                      <ListItemText primary="Meet in public places" primaryTypographyProps={{ variant: 'body2', sx: { color: 'white' } }} />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <List dense>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}><Security sx={{ color: 'white' }} fontSize="small" /></ListItemIcon>
                      <ListItemText primary="Share plans with friends/family" primaryTypographyProps={{ variant: 'body2', sx: { color: 'white' } }} />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}><Security sx={{ color: 'white' }} fontSize="small" /></ListItemIcon>
                      <ListItemText primary="Report any concerns" primaryTypographyProps={{ variant: 'body2', sx: { color: 'white' } }} />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
        </Paper>
          </CardContent>
        </Card>
      </Box>

      {/* Recognition and Benefits */}
      <Box mb={{ xs: 3, sm: 4, md: 5 }}>
        <Card 
          elevation={4}
          sx={{ 
            borderRadius: 3,
            transition: 'all 0.3s ease',
            background: 'linear-gradient(135deg, #f8f9ff 0%, #e3f2fd 100%)',
            '&:hover': { 
              transform: 'translateY(-8px)',
              boxShadow: '0 12px 24px rgba(102, 126, 234, 0.15)',
            },
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4, md: 5, lg: 6 } }}>
            <Typography 
              variant={isMobile ? "h5" : isTablet ? "h4" : "h4"} 
              gutterBottom 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 2,
                fontWeight: 600,
                color: 'text.primary',
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' }
              }}
            >
              <EmojiEvents sx={{ color: 'primary.main', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }} />
              Recognition and Benefits
            </Typography>
            
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              <Grid item xs={12} sm={6} md={4}>
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: { xs: 2, sm: 2.5, md: 3 },
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(118, 75, 162, 0.15)',
                    },
                    height: '100%',
                    minHeight: { xs: 200, sm: 220, md: 240 }
                  }}
                >
                  <VolunteerActivism sx={{ fontSize: { xs: 40, sm: 45, md: 50 }, color: 'white', mb: 2 }} />
                  <Typography 
                    variant={isMobile ? "subtitle1" : "h6"} 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem', lg: '1.3rem' }
                    }}
                  >
                    Make an Impact
                  </Typography>
                  <Typography 
                    variant={isMobile ? "caption" : "body2"} 
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' }
                    }}
                  >
                    Contribute to meaningful causes and see the positive difference you make in your community.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: { xs: 2, sm: 2.5, md: 3 },
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #43a047 0%, #66bb6a 100%)',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(67, 187, 106, 0.15)',
                    },
                    height: '100%',
                    minHeight: { xs: 200, sm: 220, md: 240 }
                  }}
                >
                  <School sx={{ fontSize: { xs: 40, sm: 45, md: 50 }, color: 'white', mb: 2 }} />
                  <Typography 
                    variant={isMobile ? "subtitle1" : "h6"} 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem', lg: '1.3rem' }
                    }}
                  >
                    Develop Skills
                  </Typography>
                  <Typography 
                    variant={isMobile ? "caption" : "body2"} 
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' }
                    }}
                  >
                    Gain valuable experience, learn new skills, and enhance your resume through hands-on service.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: { xs: 2, sm: 2.5, md: 3 },
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(255, 107, 107, 0.15)',
                    },
                    height: '100%',
                    minHeight: { xs: 200, sm: 220, md: 240 }
                  }}
                >
                  <TrendingUp sx={{ fontSize: { xs: 40, sm: 45, md: 50 }, color: 'white', mb: 2 }} />
                  <Typography 
                    variant={isMobile ? "subtitle1" : "h6"} 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem', lg: '1.3rem' }
                    }}
                  >
                    Earn Recognition
                  </Typography>
                  <Typography 
                    variant={isMobile ? "caption" : "body2"} 
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' }
                    }}
                  >
                    Receive certificates, badges, and acknowledgments for your volunteer contributions.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Contact Support */}
     
    </Container>
  );
};

export default VolunteerGuide;
