import { Container, Typography, Paper } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper sx={{ p: 5 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>

        <Typography component="p" sx={{ mb: 2 }}>
          If you have any questions regarding volunteering opportunities,
          partnerships, or platform usage, feel free to contact us.
        </Typography>

        <Typography component="p" sx={{ mb: 2 }}>
          Our support team is committed to assisting volunteers and organizers
          with technical guidance and general inquiries.
        </Typography>

        <Typography component="p" sx={{ mb: 1 }}>
          Email: support@CommunityConnect.com
        </Typography>

        <Typography component="p" sx={{ mb: 1 }}>
          Phone: +91 9876543210
        </Typography>

        <Typography component="p">
          Office Hours: Monday – Friday, 9:00 AM – 6:00 PM
        </Typography>
      </Paper>
    </Container>
  );
};

export default Contact;