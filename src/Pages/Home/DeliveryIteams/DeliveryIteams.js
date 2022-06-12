import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import useDeliveries from "../../../Hooks/useDeliveries";
import ChocolateDeliveryItem from "../ChocolateDeliveryItem/ChocolateDeliveryItem";
import CoupleGiftDeliveryItem from "../CoupleGiftDeliveryItem/CoupleGiftDeliveryItem";
import GiftDeliveyItem from "../GiftDeliveyItem/GiftDeliveyItem";
import IcecreamDeliveryItem from "../IcecreamDeliveryItem/IcecreamDeliveryItem";

const DeliveryIteams = () => {
  const { deliveries } = useDeliveries();
  return (
    <div style={{ background: "#ecf0f1" }}>
      <Container
        maxWidth="lg"
        style={{ padding: "100px 0px", background: "#ecf0f1" }}
      >
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            margin: "100px 0px",
          }}
        >
          Explore All Categories
          <hr style={{ width: "25%", margin: "15px auto", padding: "1px" }} />
        </Typography>
        <Typography variant="h5" style={{ color: "gray" }}>
          Chocolates
        </Typography>{" "}
        <br />
        <Grid container spacing={2}>
          {deliveries.map((p) => (
            <ChocolateDeliveryItem
              id="chocolate"
              key={p._id}
              delivery={p}
            ></ChocolateDeliveryItem>
          ))}
        </Grid>{" "}
        <br /> <br /> <br />
        <br /> <br />
        <Typography variant="h5" style={{ color: "gray" }}>
          Ice-Cream
        </Typography>{" "}
        <br />
        <Grid container spacing={2}>
          {deliveries.map((p) => (
            <IcecreamDeliveryItem
              key={p._id}
              delivery={p}
            ></IcecreamDeliveryItem>
          ))}
        </Grid>{" "}
        <br /> <br /> <br />
        <br /> <br />
        <Typography variant="h5" style={{ color: "gray" }}>
          Presents
        </Typography>{" "}
        <br />
        <Grid container spacing={2}>
          {deliveries.map((p) => (
            <GiftDeliveyItem key={p._id} delivery={p}></GiftDeliveyItem>
          ))}
        </Grid>
        <br /> <br /> <br />
        <br /> <br />
        <Typography variant="h5" style={{ color: "gray" }}>
          Couple Presents
        </Typography>
        <br />
        <Grid container spacing={2}>
          {deliveries.map((p) => (
            <CoupleGiftDeliveryItem
              key={p._id}
              delivery={p}
            ></CoupleGiftDeliveryItem>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default DeliveryIteams;
