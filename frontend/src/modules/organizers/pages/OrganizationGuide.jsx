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
  Business,
  School,
  TrendingUp,
  Search,
  HowToReg,
  Category,
  FilterList,
  Assignment,
  PlayArrow,
  Group,
  Campaign,
  Assessment,
  Handshake,
  Visibility,
  Edit,
  Delete,
  AddCircle,
  EventNote,
  Email,
  Phone,
  Language,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";

const OrganizationGuide = () => {
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
          Organization Guide
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
          Everything you need to know to successfully manage volunteer opportunities
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
              <Business sx={{ color: 'primary.main', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }} />
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
              New to organizing? Follow these simple steps to get started with managing volunteer opportunities:
            </Typography>
            
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              <Grid item xs={12} sm={6} md={3}>
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: { xs: 2, sm: 2.5, md: 3 },
                    borderRadius: 2,
                    bgcolor: 'cadetblue',
                    color: 'white',
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(95, 158, 160, 0.3)',
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
                    Complete Profile
                  </Typography>
                  <Typography 
                    variant={isMobile ? "caption" : "body2"} 
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' }
                    }}
                  >
                    Set up your organization profile with all details
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
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
                    Create Opportunity
                  </Typography>
                  <Typography 
                    variant={isMobile ? "caption" : "body2"} 
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' }
                    }}
                  >
                    Post your first volunteer opportunity
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
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
                    Review Applications
                  </Typography>
                  <Typography 
                    variant={isMobile ? "caption" : "body2"} 
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' }
                    }}
                  >
                    Evaluate volunteer requests and applications
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
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
                    4+
                  </Box>
                  <Typography 
                    variant={isMobile ? "subtitle1" : "h6"} 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem', lg: '1.3rem' }
                    }}
                  >
                    Manage & Grow
                  </Typography>
                  <Typography 
                    variant={isMobile ? "caption" : "body2"} 
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' }
                    }}
                  >
                    Track progress and expand your program
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Creating Opportunities */}
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
              <AddCircle sx={{ color: 'primary.main', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }} />
              Creating Effective Opportunities
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
                    <Assignment sx={{ color: 'white' }} />
                    Opportunity Details
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Create compelling volunteer opportunities with clear descriptions, requirements, and impact statements.
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    <Chip label="Clear Title" size="small" variant="outlined" />
                    <Chip label="Detailed Description" size="small" variant="outlined" />
                    <Chip label="Requirements" size="small" variant="outlined" />
                    <Chip label="Impact Statement" size="small" variant="outlined" />
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
                    <Schedule sx={{ color: 'white' }} />
                    Timing & Duration
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Set realistic time commitments and flexible scheduling options to attract more volunteers.
                  </Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    <Chip label="Flexible Hours" size="small" variant="outlined" />
                    <Chip label="Weekend Options" size="small" variant="outlined" />
                    <Chip label="One-time Events" size="small" variant="outlined" />
                    <Chip label="Ongoing Roles" size="small" variant="outlined" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Volunteer Management */}
      <Box mb={4}>
        <Typography variant={isDesktop ? "h3" : "h4"} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Assessment fontSize={isDesktop ? "large" : "medium"} />
          Managing Applications
        </Typography>
        <Card elevation={2} sx={{ p: isDesktop ? 4 : 3 }}>
          <CardContent sx={{ p: 0 }}>
            <Grid container spacing={isDesktop ? 4 : 2}>
              <Grid item xs={12} sm={6} md={3}>
                <Box textAlign="center" sx={{ p: 2 }}>
                  <Box 
                    sx={{ 
                      width: isDesktop ? 60 : 50, 
                      height: isDesktop ? 60 : 50, 
                      borderRadius: '50%', 
                      bgcolor: 'cadetblue', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      margin: '0 auto', 
                      mb: 2,
                      fontSize: isDesktop ? '1.5rem' : '1.2rem',
                      fontWeight: 'bold'
                    }}
                  >
                    1
                  </Box>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Review
                  </Typography>
                  <Typography variant="body2">
                    Evaluate volunteer applications based on skills, availability, and motivation.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box textAlign="center" sx={{ p: 2 }}>
                  <Box 
                    sx={{ 
                      width: isDesktop ? 60 : 50, 
                      height: isDesktop ? 60 : 50, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      margin: '0 auto', 
                      mb: 2,
                      fontSize: isDesktop ? '1.5rem' : '1.2rem',
                      fontWeight: 'bold'
                    }}
                  >
                    2
                  </Box>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Interview
                  </Typography>
                  <Typography variant="body2">
                    Conduct brief interviews to assess fit and answer volunteer questions.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box textAlign="center" sx={{ p: 2 }}>
                  <Box 
                    sx={{ 
                      width: isDesktop ? 60 : 50, 
                      height: isDesktop ? 60 : 50, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      margin: '0 auto', 
                      mb: 2,
                      fontSize: isDesktop ? '1.5rem' : '1.2rem',
                      fontWeight: 'bold'
                    }}
                  >
                    3
                  </Box>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Approve
                  </Typography>
                  <Typography variant="body2">
                    Send acceptance notifications and onboarding information to approved volunteers.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box textAlign="center" sx={{ p: 2 }}>
                  <Box 
                    sx={{ 
                      width: isDesktop ? 60 : 50, 
                      height: isDesktop ? 60 : 50, 
                      borderRadius: '50%', 
                      bgcolor: 'primary.main', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      margin: '0 auto', 
                      mb: 2,
                      fontSize: isDesktop ? '1.5rem' : '1.2rem',
                      fontWeight: 'bold'
                    }}
                  >
                    4
                  </Box>
                  <Typography variant="h6" color="primary" gutterBottom>
                    Onboard
                  </Typography>
                  <Typography variant="body2">
                    Provide training materials and schedule orientation sessions.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Communication Best Practices */}
      <Box mb={4}>
        <Typography variant={isDesktop ? "h3" : "h4"} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Campaign fontSize={isDesktop ? "large" : "medium"} />
          Communication Best Practices
        </Typography>
        <Grid container spacing={isDesktop ? 4 : 3}>
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-2px)', boxShadow: 4 } }}>
              <CardContent sx={{ p: isDesktop ? 4 : 3 }}>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Email fontSize="small" />
                  Before Volunteering
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Send detailed welcome emails" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Provide training materials in advance" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Share contact information and emergency procedures" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Set clear expectations and goals" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'translateY(-2px)', boxShadow: 4 } }}>
              <CardContent sx={{ p: isDesktop ? 4 : 3 }}>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EventNote fontSize="small" />
                  During & After
                </Typography>
                <List dense>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Regular check-ins and feedback sessions" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Celebrate achievements and milestones" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Request feedback for improvement" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                  <ListItem sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle color="success" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Send certificates and recognition" primaryTypographyProps={{ variant: 'body2' }} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

     

      {/* Organization Profile Tips */}
      <Box mb={{ xs: 3, sm: 4, md: 5 }}>
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
          <Business sx={{ color: 'primary.main', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }} />
          Organization Profile Tips
        </Typography>
        <Paper 
          elevation={4} 
          sx={{ 
            p: { xs: 3, sm: 4, md: 5 }, 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            borderRadius: 3,
            transition: 'all 0.3s ease',
            '&:hover': { 
              transform: 'translateY(-4px)',
              boxShadow: '0 12px 24px rgba(102, 126, 234, 0.2)',
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
            <Visibility sx={{ color: 'white' }} />
            Make Your Profile Stand Out
          </Typography>
          <Typography variant="body2" paragraph>
            A complete organization profile helps attract the right volunteers and builds trust:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <List dense>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle sx={{ color: 'white' }} fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Professional logo and branding" primaryTypographyProps={{ variant: 'body2', sx: { color: 'white' } }} />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle sx={{ color: 'white' }} fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Clear mission statement" primaryTypographyProps={{ variant: 'body2', sx: { color: 'white' } }} />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle sx={{ color: 'white' }} fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Contact information" primaryTypographyProps={{ variant: 'body2', sx: { color: 'white' } }} />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List dense>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle sx={{ color: 'white' }} fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Photos and videos" primaryTypographyProps={{ variant: 'body2', sx: { color: 'white' } }} />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle sx={{ color: 'white' }} fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Social media links" primaryTypographyProps={{ variant: 'body2', sx: { color: 'white' } }} />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}><CheckCircle sx={{ color: 'white' }} fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Success stories" primaryTypographyProps={{ variant: 'body2', sx: { color: 'white' } }} />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      {/* Tools and Resources */}
      <Box mb={4}>
        <Typography variant={isDesktop ? "h3" : "h4"} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Handshake fontSize={isDesktop ? "large" : "medium"} />
          Tools and Resources
        </Typography>
        <Grid container spacing={isDesktop ? 4 : 3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              elevation={2} 
              sx={{ 
                textAlign: "center", 
                p: isDesktop ? 3 : 2, 
                height: '100%',
                transition: '0.3s', 
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
                background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)'
              }}
            >
              <Edit sx={{ fontSize: isDesktop ? 50 : 40, color: "primary.main", mb: 2 }} />
              <Typography variant="h6" gutterBottom color="primary">
                Content Creation
              </Typography>
              <Typography variant="body2">
                Access templates for volunteer descriptions, emails, and social media posts.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              elevation={2} 
              sx={{ 
                textAlign: "center", 
                p: isDesktop ? 3 : 2, 
                height: '100%',
                transition: '0.3s', 
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
                background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)'
              }}
            >
              <Assessment sx={{ fontSize: isDesktop ? 50 : 40, color: "primary.main", mb: 2 }} />
              <Typography variant="h6" gutterBottom color="primary">
                Impact Tracking
              </Typography>
              <Typography variant="body2">
                Measure and report volunteer impact with comprehensive analytics tools.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              elevation={2} 
              sx={{ 
                textAlign: "center", 
                p: isDesktop ? 3 : 2, 
                height: '100%',
                transition: '0.3s', 
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
                background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)'
              }}
            >
              <Group sx={{ fontSize: isDesktop ? 50 : 40, color: "primary.main", mb: 2 }} />
              <Typography variant="h6" gutterBottom color="primary">
                Community Support
              </Typography>
              <Typography variant="body2">
                Connect with other organizers and share best practices in our community.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Support */}
      <Box textAlign="center" mt={isDesktop ? 8 : 6}>
        <Paper 
          elevation={2} 
          sx={{ 
            p: isDesktop ? 6 : 4, 
            background: 'linear-gradient(135deg, primary.light 0%, primary.main 100%)',
            color: 'black',
            borderRadius: 3
          }}
        >
          <Typography variant={isDesktop ? "h4" : "h5"} gutterBottom>
            Need Organizer Support?
          </Typography>
          <Typography variant={isDesktop ? "body1" : "body2"} paragraph sx={{ mb: 3 }}>
            Our organizer success team is here to help you grow your volunteer program.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Chip 
              label="organizers@volunteerplatform.com" 
              variant="outlined" 
              sx={{ 
                color: 'black', 
                borderColor: 'black',
                '&:hover': { bgcolor: 'rgba(177, 101, 101, 0.1)' }
              }} 
            />
            <Chip 
              label="Organizer FAQ" 
              variant="outlined" 
              component={RouterLink}
              to="/faq"
              sx={{ 
                color: 'black', 
                borderColor: 'black',
                '&:hover': { bgcolor: 'rgba(177, 101, 101, 0.1)' }
              }} 
            />
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default OrganizationGuide;
