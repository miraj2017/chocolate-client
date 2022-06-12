import { Container, Typography } from "@mui/material";
import React from "react";

import useOrders from "../../../Hooks/useOrders";
import Navigation from "../../Shared/Navigation/Navigation";
import Orders from "../Orders/Orders";
const AllOrders = () => {
  const { orders } = useOrders();
  return (
    <>
      <Navigation></Navigation>
      <Container>
        <div style={{ marginTop: "50px" }}>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Customers All Orders
          </Typography>

          {orders.map((p) => (
            <Orders orders={p}></Orders>
          ))}
        </div>
      </Container>
    </>
  );
};

export default AllOrders;
