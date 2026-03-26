import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Typography, Stack, Button } from "@mui/material";
import axiosInstance from "../../../api/axios";

const VolunteerHistory = () => {
  const [data, setData] = useState([]);
  const [loadingId, setLoadingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axiosInstance.get("users/history/");
    setData(res.data);
  };

  const handleWithdraw = async (id) => {
    try {
      setLoadingId(id);

      await axiosInstance.patch(`users/${id}/withdraw_application/`);

      setData((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: "withdrawn" } : item
        )
      );

    } catch (err) {
      console.log(err);
    } finally {
      setLoadingId(null);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
        My Application History
      </Typography>
      {data.length === 0 ? (
        <Typography align="center" color="text.secondary">
          You haven’t applied to any opportunities yet.
        </Typography>
      ) : (
        <Stack spacing={3}>
          {data.map((item) => (
            <Card key={item.id} sx={{ p: 3 }}>
              <Typography variant="h6">
                {item.opportunity}
              </Typography>
              {item.category && (
                <Typography 
                  variant="caption" 
                  sx={{ 
                    backgroundColor: "#e3f2fd", 
                    color: "#1976d2", 
                    px: 1, 
                    py: 0.2, 
                    borderRadius: "10px",
                    fontWeight: 600,
                    display: "inline-block",
                    mt: 0.5,
                    mb: 1
                  }}
                >
                  {item.category.toUpperCase()}
                </Typography>
              )}

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" }
                }}
                onClick={() =>
                  navigate(`/organization/${item.organization_id}`)
                }
              >
                Organization: {item.organization}
              </Typography>

              <Typography sx={{ mt: 1 }}>
                Status:{" "}
                <strong>
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </strong>
              </Typography>

              <Typography sx={{ mt: 1 }}>
                <strong>Applied at:</strong>{" "}
                {formatDate(item.applied_at)}
              </Typography>

              {item.status !== "withdrawn" && (
                <Button
                  variant="outlined"
                  color="error"
                  sx={{ mt: 2, width: "fit-content" }}
                  disabled={loadingId === item.id}
                  onClick={() => handleWithdraw(item.id)}
                >
                  {loadingId === item.id ? "Withdrawing..." : "Withdraw"}
                </Button>
              )}
            </Card>
          ))}
        </Stack>
      )}
    </Container>
  );
};

export default VolunteerHistory;