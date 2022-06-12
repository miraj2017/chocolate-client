import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../Footer/Footer";

const ReviewOrder = () => {
  const item = JSON.parse(localStorage.getItem("item"));

  return (
    <>
      <Navigation></Navigation>
      <Container>
        <div style={{ margin: "200px 0px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <img
                  style={{ width: "400px" }}
                  src={item.img}
                  alt={item.name}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="h6">{item.price}</Typography>
                <Typography variant="h6">Quantity: 1</Typography>
                <br /> <br />
                <NavLink to="/payment" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    style={{ background: "#e67e22", textDecoration: "none" }}
                  >
                    Go For Payment
                  </Button>
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>

      <Footer></Footer>
    </>
  );
};

export default ReviewOrder;
