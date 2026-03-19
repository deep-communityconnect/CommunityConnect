import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../api/axios";
import BASE_URL from "../../../config/config";

import {
  Container,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Divider,
  Link
} from "@mui/material";

function OrganizationDetail() {
  const { id } = useParams();
  const [org, setOrg] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`users/${id}/organization_detail/`)
      .then((res) => setOrg(res.data));
  }, [id]);

  if (!org) return <Typography align="center">Loading...</Typography>;

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card elevation={4}>
        <CardContent>

          {/* Header */}
          <Grid container spacing={3} alignItems="center">

            <Grid item>
              <Avatar
                src={`${BASE_URL}${org.image}`}
                sx={{ width: 90, height: 90 }}
              />
            </Grid>

            <Grid item xs>
              <Typography variant="h4" fontWeight="bold">
                {org.name}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Organization Profile
              </Typography>
            </Grid>

          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Bio */}
          <Typography variant="h6" gutterBottom>
            About
          </Typography>

          <Typography color="text.secondary" paragraph>
            {org.bio || "No description provided."}
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Contact Section */}
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>

          <Grid container spacing={2}>

            <Grid item xs={12} sm={6}>
              <Typography>
                <b>Email:</b> {org.contact_email || "N/A"}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography>
                <b>Phone:</b> {org.contact_phone || "N/A"}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography>
                <b>Website:</b>{" "}
                {org.website ? (
                  <Link href={org.website} target="_blank">
                    {org.website}
                  </Link>
                ) : (
                  "N/A"
                )}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography>
                <b>Address:</b> {org.address || "N/A"}
              </Typography>
            </Grid>

          </Grid>

        </CardContent>
      </Card>
    </Container>
  );
}

export default OrganizationDetail;