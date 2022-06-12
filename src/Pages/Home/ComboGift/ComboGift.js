import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../Footer/Footer";
import useDeliveries from "../../../Hooks/useDeliveries";
import { Container, Grid } from "@mui/material";

const ComboGift = () => {
  const { deliveries } = useDeliveries();
  const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }));

  return (
    <>
      <Navigation></Navigation>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box
              style={{ marginTop: "200px" }}
              sx={{ width: 500, minHeight: 829 }}
            >
              <Masonry columns={3} spacing={2}>
                {deliveries.slice(5, 14).map((item, index) => (
                  <div key={index}>
                    <Label>{item.name}</Label>
                    <img
                      src={`${item.img}?w=162&auto=format`}
                      srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                      alt={item?.name}
                      loading="lazy"
                      style={{
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        display: "block",
                        width: "100%",
                      }}
                    />
                  </div>
                ))}
              </Masonry>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Box
              style={{ marginTop: "200px" }}
              sx={{ width: 500, minHeight: 829 }}
            >
              <Masonry columns={3} spacing={2}>
                {deliveries.slice(15, 24).map((item, index) => (
                  <div key={index}>
                    <Label>{item.name}</Label>
                    <img
                      src={`${item.img}?w=162&auto=format`}
                      srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                      alt={item?.name}
                      loading="lazy"
                      style={{
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        display: "block",
                        width: "100%",
                      }}
                    />
                  </div>
                ))}
              </Masonry>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Footer></Footer>
    </>
  );
};

export default ComboGift;
