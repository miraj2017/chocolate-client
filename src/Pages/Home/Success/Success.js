import { Typography } from "@mui/material";
import React from "react";
import useCartHandle from "../../../Hooks/useCartHandle";
import { clearTheCart } from "../../../utilities/fakedb";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../Footer/Footer";

const Success = () => {
  const { setCart } = useCartHandle();
  const handlePayment = () => {
    setCart([]);
    clearTheCart();
  };
  return (
    <div onFocus={handlePayment}>
      <Navigation></Navigation>
      <div>
        <Typography
          variant="h3"
          style={{ marginTop: "100px", textAlign: "center" }}
        >
          Congrats! Successfully Done
        </Typography>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Success;
