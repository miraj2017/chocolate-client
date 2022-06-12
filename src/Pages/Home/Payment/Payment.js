import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../Footer/Footer";
import { useForm } from "react-hook-form";
import useCartHandle from "../../../Hooks/useCartHandle";
import useAuth from "../../../Hooks/useAuth";

import { useHistory } from "react-router-dom";

const Payment = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  // ORDER SIZE

  // Cart er jonno eita
  const { cart } = useCartHandle();

  // buy er jonno eita
  const { user } = useAuth();
  const item = JSON.parse(localStorage.getItem("item"));
  const orderCollections = [item, ...cart];
  const orderedItem = { user, orderCollections };

  const history = useHistory();

  const handleOrder = () => {
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderedItem),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    history.push("/success");
  };

  return (
    <>
      <Navigation></Navigation>
      <Container>
        <Box sx={{ flexGrow: 1 }} style={{ margin: "150px 0px " }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <form
                onSubmit={handleSubmit(handleOrder)}
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input {...register("Name")} placeholder="Your Name" />
                <input {...register("Address")} placeholder="address" />

                <input
                  type="number"
                  {...register("phone no")}
                  placeholder="Phn No"
                />

                <input type="submit" value="Submit & Confirm Payment" />
              </form>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography variant="h4">Select payment Method</Typography> <br />{" "}
              <br />
              <Button
                variant="contained"
                style={{ background: "red", marginRight: "10px" }}
              >
                Bkash
              </Button>
              <Button
                variant="contained"
                style={{ background: "orange", marginRight: "10px" }}
              >
                Nagad
              </Button>
              <Button variant="contained" style={{ background: "black" }}>
                Credit Card
              </Button>{" "}
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* <div style={{ width: "40%", margin: "0 auto" }}></div> */}
      <Footer></Footer>
    </>
  );
};

export default Payment;
