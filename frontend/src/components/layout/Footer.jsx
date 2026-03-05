import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 5,
        py: 2,
        textAlign: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2026 CommunityConnect. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;