import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useCartHandle from "../../../Hooks/useCartHandle";
import Footer from "../../Home/Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Cart = () => {
  const { total, tax, shipping, grandTotal, totalQuantity } = useCartHandle();

  return (
    <>
      <Navigation></Navigation>
      <Box style={{ width: "50%", margin: "0 auto" }}>
        <Typography variant="h3">Order Summary</Typography> <br />
        <Typography variant="h5">
          Items Ordered: {totalQuantity}
        </Typography>{" "}
        <br />
        <Typography variant="p">Total: {total.toFixed(2)}</Typography> <br />
        <Typography variant="p">Shipping: {shipping}</Typography> <br />
        <Typography variant="p">Tax: {tax.toFixed(2)}</Typography> <br />
        <Typography variant="p">
          Grand Total: {grandTotal.toFixed(2)}
        </Typography>{" "}
        <br /> <br />
        <Link to="/cartreview" style={{ textDecoration: "none" }}>
          <Button variant="contained" style={{ background: "black" }}>
            Review Your Order
          </Button>
        </Link>
      </Box>
      <Footer></Footer>
    </>
  );
};

export default Cart;
