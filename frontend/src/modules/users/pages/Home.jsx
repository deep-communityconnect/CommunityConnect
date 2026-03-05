import { useEffect, useState } from "react";
import {
  Container,
  Card,
  Typography,
  Button,
  Stack,
  Avatar,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../api/axios";
import BASE_URL from "../../../config/config";

const Home = () => {
  const [opportunities, setOpportunities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const res = await axiosInstance.get("users/feed/");
        setOpportunities(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFeed();
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      {opportunities.length === 0 ? (
        <Typography
          align="center"
          color="text.secondary"
          sx={{ mt: 10 }}
        >
          There are no active opportunities available right now.
          <br />
          Please check back later.
        </Typography>
      ) : (
        <Stack spacing={4}>
          {opportunities.map((item) => (
            <Card
              key={item.id}
              sx={{
                p: 3,
                transition: "0.3s",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <Stack direction="row" spacing={3} alignItems="center">
                <Avatar
                  src={`${BASE_URL}${item.organization_image}`}
                  sx={{ width: 70, height: 70 }}
                />

                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                  >
                    {item.organization}
                  </Typography>

                  <Typography variant="h6">
                    {item.title}
                  </Typography>

                  <Typography color="text.secondary">
                    {item.location}
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  onClick={() =>
                    navigate(`/opportunity/${item.id}`)
                  }
                >
                  View
                </Button>
              </Stack>
            </Card>
          ))}
        </Stack>
      )}
    </Container>
  );
};

export default Home;