import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ecommerceimg from "../../../images/gift-e-commerce-removebg-preview.png";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    // background: "#f7b731"
    <div style={{ padding: "160px 0px", background: "#FEF3EC" }}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img src={ecommerceimg} alt="" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box
                style={{
                  margin: "100px auto",
                  // textAlign:'center'
                }}
              >
                <Typography variant="h3">
                  Wonderful
                  <br />
                  Collections
                </Typography>
                <br />
                <Typography variant="p">
                  Get Whatever You Want.We have Bunch Of Collections <br /> Of
                  Your Most Favourite Chocolates.
                </Typography>
                <br /> <br />
                <Link to="/gift" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    style={{ color: "black", border: " 1px solid black" }}
                  >
                    Get Gifts
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Banner;
