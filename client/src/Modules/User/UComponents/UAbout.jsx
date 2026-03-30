import React from "react";
import { Box, Typography, Container, Grid, Paper, Button } from "@mui/material";

export default function UAbout() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>

      {/* Banner */}
      <Box
        sx={{
          bgcolor: "#1976d2",
          color: "white",
          py: 8,
          textAlign: "center",
          width: "100%"
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Welcome to Our Store
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Discover quality products at the best prices
        </Typography>
      </Box>

      {/* Content */}
      <Box sx={{ px: { xs: 2, md: 10 }, py: 6 }}>

        <Typography variant="h4" gutterBottom>
          Who We Are
        </Typography>
        <Typography color="text.secondary">
          We are a modern online shopping platform dedicated to providing a wide range
          of high-quality products including electronics, fashion, home appliances, and more.
          Our platform is designed to make shopping simple, fast, and convenient for everyone.
        </Typography>

        <Typography color="text.secondary">
          Our goal is to deliver the best shopping experience by combining affordable prices,
          a diverse product selection, and seamless navigation. Whether you're looking for the
          latest gadgets or everyday essentials, we have everything in one place.
        </Typography>

        <Typography color="text.secondary">
          We focus on customer satisfaction by offering secure payment options, reliable delivery,
          and responsive customer support. Every product on our platform is carefully selected
          to ensure quality and trust.
        </Typography>

        <Typography color="text.secondary">
          With a growing community of happy customers, we continuously strive to improve our
          services and bring you the best deals and latest trends in the market.
        </Typography>

        {/* Features */}
        <Grid container spacing={4} sx={{ mt: 3 }}>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, textAlign: "center", height: "100%" }}>
              <Typography variant="h6">Wide Range</Typography>
              <Typography variant="body2">
                Explore products across multiple categories
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, textAlign: "center", height: "100%" }}>
              <Typography variant="h6">Best Prices</Typography>
              <Typography variant="body2">
                Affordable prices with great deals
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 4, textAlign: "center", height: "100%" }}>
              <Typography variant="h6">Fast Delivery</Typography>
              <Typography variant="body2">
                Quick and reliable shipping service
              </Typography>
            </Paper>
          </Grid>

        </Grid>

      </Box>
    </Box>
  );
}