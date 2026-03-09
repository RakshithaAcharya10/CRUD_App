import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

export default function About() {
  return (
    <Box>

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "green",
          color: "white",
          py: 8,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Green Earth Initiative
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Working Together for a Cleaner and Greener Planet
        </Typography>
      </Box>

      {/* About Content */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h5" gutterBottom>
          About Us
        </Typography>

        <Typography color="text.secondary" paragraph>
          Green Earth Initiative is a community-driven organization focused on
          promoting environmental awareness and sustainable living. Our goal is
          to encourage individuals and communities to take small steps that
          create a big impact on the planet.
        </Typography>

        <Typography color="text.secondary" paragraph>
          We organize tree plantation drives, recycling campaigns, and
          educational workshops to spread awareness about climate change and
          environmental protection.
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: "green",
            "&:hover": { bgcolor: "darkgreen" },
          }}
        >
          Join Us
        </Button>
      </Container>

    </Box>
  );
}