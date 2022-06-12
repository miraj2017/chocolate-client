import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Activities = () => {
  return (
    <>
      <Container>
        <Box style={{ textAlign: "center", margin: "200px 0px" }}>
          <Typography variant="h4" style={{ marginBottom: "80px" }}>
            Our Activites
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box style={{ width: "90%", margin: "0 auto" }}>
                <MdOutlineDeliveryDining
                  style={{ fontSize: "25px", marginBottom: "10px" }}
                ></MdOutlineDeliveryDining>
                <Typography variant="h6">Quality Services</Typography>
                <Typography variant="p">
                  We are determined to make our products quality best.We believe
                  in our products quality.We try to serve best products.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box style={{ width: "90%", margin: "0 auto" }}>
                <AiFillSafetyCertificate
                  style={{ fontSize: "25px", marginBottom: "10px" }}
                ></AiFillSafetyCertificate>
                <Typography variant="h6">Products Safety</Typography>
                <Typography variant="p">
                  Safety for products is must needed.Safety for our products is
                  our first priority.We deliver our food with proper safety.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box style={{ width: "90%", margin: "0 auto" }}>
                <AiOutlineShoppingCart
                  style={{ fontSize: "25px", marginBottom: "10px" }}
                ></AiOutlineShoppingCart>
                <Typography variant="h6">Order process</Typography>
                <Typography variant="p">
                  You can order anytime from here by tapping order now.We try to
                  deliver the food within 4 hours.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Activities;
