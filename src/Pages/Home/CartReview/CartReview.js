import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useCartHandle from "../../../Hooks/useCartHandle";
import useDeliveries from "../../../Hooks/useDeliveries";
import Navigation from "../../Shared/Navigation/Navigation";
import { removeFromDb } from "../../../utilities/fakedb";
import Footer from "../Footer/Footer";

const CartReview = () => {
  const { deliveries } = useDeliveries();
  const { cart, setCart } = useCartHandle(deliveries);

  const handleRemove = (_id) => {
    const newCart = cart.filter((delivery) => delivery._id !== _id);

    removeFromDb(_id);
    setCart(newCart);
  };

  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;

  return (
    <>
      <Navigation></Navigation>
      <Container>
        <div style={{ margin: "100px 0px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              {cart.map((delivery) => (
                <div>
                  <h4 className="product-name">{delivery.name}</h4>
                  <p>Price:{delivery.price}</p>
                  <p>Quantity:{delivery.quantity}</p>
                  <button
                    className="btn-regular"
                    onClick={() => handleRemove(delivery._id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box>
                <Typography variant="h4">Order Summary</Typography> <br />
                <Typography variant="h5">
                  Items Ordered: {totalQuantity}
                </Typography>
                <br />
                <Typography variant="p">
                  Total: {total.toFixed(2)}
                </Typography>{" "}
                <br />
                <Typography variant="p">Shipping: {shipping}</Typography> <br />
                <Typography variant="p">Tax: {tax.toFixed(2)}</Typography>{" "}
                <br />
                <Typography variant="p">
                  Grand Total: {grandTotal.toFixed(2)}
                </Typography>{" "}
                <br /> <br />
                <Link to="/payment" style={{ textDecoration: "none" }}>
                  <Button variant="contained" style={{ background: "black" }}>
                    payment
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>

      <Footer></Footer>
    </>
  );
};

export default CartReview;
