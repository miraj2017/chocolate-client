import { Grid, Typography } from "@mui/material";
import React from "react";
import MyOrders from "../../Home/MyOrders/MyOrders";

const DashboardHome = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Your Orders
            <MyOrders></MyOrders>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardHome;
