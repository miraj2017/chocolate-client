import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import useAuth from "../../../Hooks/useAuth";
import useCartHandle from "../../../Hooks/useCartHandle";
import useItem from "../../../Hooks/useItem";
import Login from "../../Login/Login/Login";

import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../Footer/Footer";

const ItemDetails = () => {
  const { isLoading } = useAuth();
  const { item } = useItem();
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(item));
  }, [item]);

  const [open, setOpen] = React.useState(false);
  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);

  const { user } = useAuth();

  const { handleAddToCart } = useCartHandle();

  return (
    <>
      <Navigation></Navigation>

      {isLoading ? (
        <CircularProgress></CircularProgress>
      ) : (
        <Box style={{ marginTop: "120px" }}>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={5}>
                <div style={{ width: "90%", margin: "0 auto" }}>
                  <img
                    style={{ width: "80%", height: "60%" }}
                    src={item.img}
                    alt=""
                  />{" "}
                  <br /> <br />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={7}>
                <div style={{ width: "80%", margin: "0 auto" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontWeight: "600" }}
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: $ {item.price}
                  </Typography>{" "}
                  <br />
                  <div style={{ width: "80%" }}>
                    <Typography variant="p">
                      <span style={{ fontSize: "30px", fontWeight: "600" }}>
                        Description:
                      </span>
                      <br /> <br />
                      {item.description}
                    </Typography>
                    <br /> <br /> <br />
                    {user.email ? (
                      <>
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            gap: "30px",
                          }}
                        >
                          <Link
                            to="/revieworder"
                            style={{
                              textDecoration: "none",
                            }}
                          >
                            <Button
                              variant="contained"
                              style={{
                                background: "#e67e22",
                              }}
                            >
                              Buy Now
                            </Button>
                          </Link>

                          <Button
                            variant="contained"
                            style={{
                              background: "#3498db",
                            }}
                            onClick={() => handleAddToCart(item)}
                          >
                            Add To Cart
                          </Button>
                        </Box>
                      </>
                    ) : (
                      <>
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            gap: "30px",
                          }}
                        >
                          <Button
                            onClick={modalOpen}
                            variant="contained"
                            style={{
                              background: "chocolate",
                            }}
                          >
                            Buy Now
                          </Button>
                          <Button
                            onClick={modalOpen}
                            variant="contained"
                            style={{
                              background: "chocolate",
                            }}
                          >
                            Add To Cart
                          </Button>
                        </Box>
                      </>
                    )}
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
      {open && <Login open={open} close={modalClose}></Login>}

      {/* <Login open={open} close={modalClose}></Login> */}

      <Footer></Footer>
    </>
  );
};

export default ItemDetails;
