import { useEffect, useState } from "react";
import {
  Container,
  Card,
  Typography,
  Stack,
  Button,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axios";

const VolunteerBlogs = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get("/blogs/list_blogs/");
      setData(res.data.results || res.data);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    }
  };

  const stripHtml = (text) => {
    return text.replace(/<[^>]+>/g, "");
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <Container maxWidth={isDesktop ? "lg" : "md"} sx={{ mt: 6, py: 4 }}>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 4 }}
      >
        <Typography 
          variant={isDesktop ? "h3" : "h4"} 
          sx={{ 
            fontWeight: 700,
            color: 'black',
          }}
        >
          Blogs
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
          Read-only view
        </Typography>

      </Stack>

      <Stack spacing={3}>

        {data.length === 0 && (
          <Box
            sx={{
              textAlign: "center",
              py: 8,
              px: 3,
            }}
          >
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              No blogs available yet
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              Check back later for inspiring volunteer stories and insights
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/home")}
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
              }}
            >
              Explore Opportunities
            </Button>
          </Box>
        )}

        {data.map((item) => (

          <Card
            key={item.id}
            sx={{
              p: isDesktop ? 4 : 3,
              borderRadius: 3,
              transition: "0.3s",
              "&:hover": { 
                boxShadow: 6,
                transform: 'translateY(-2px)',
              }
            }}
          >

            <Stack spacing={3}>

              <Typography 
                variant={isDesktop ? "h5" : "h6"} 
                sx={{ 
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              >
                {item.title}
              </Typography>

              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{
                  lineHeight: 1.6,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {stripHtml(item.excerpt)}
              </Typography>

              <Stack 
                direction={isDesktop ? "row" : "column"} 
                spacing={2}
                alignItems={isDesktop ? "center" : "flex-start"}
                justifyContent="space-between"
              >
                <Typography variant="body2" color="text.secondary">
                  {formatDate(item.created_at)} • {item.reading_time} min read
                </Typography>

                <Button
                  variant="contained"
                  size={isDesktop ? "medium" : "small"}
                  onClick={() =>
                    navigate(`/blogs/${item.slug}`, { state: { from: "volunteer" } })
                  }
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 600,
                    px: 3,
                  }}
                >
                  Read More
                </Button>

              </Stack>

            </Stack>

          </Card>

        ))}

      </Stack>

    </Container>
  );
};

export default VolunteerBlogs;
