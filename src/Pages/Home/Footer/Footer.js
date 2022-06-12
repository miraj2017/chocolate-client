import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        background: "#2c3e50",
        marginTop: "100px",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container>
        <div style={{ padding: "50px 0px" }}>
          <Grid container spacing={2}>
            <Grid item xs={4} sm={4} md={4}>
              <Typography variant="h6">Useful Links</Typography> <br />
              <Link
                to="/home"
                style={{ color: "white", textDecoration: "none" }}
              >
                <Typography variant="p">Home</Typography>
              </Link>{" "}
              <br /> <br />
              <Link
                to="/chocolates"
                style={{ color: "white", textDecoration: "none" }}
              >
                <Typography variant="p">Chocolates</Typography>
              </Link>{" "}
              <br /> <br />
              <Link
                to="/login"
                style={{ color: "white", textDecoration: "none" }}
              >
                <Typography variant="p">Login</Typography>
              </Link>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Typography variant="h6">Social Platforms</Typography> <br />
              <Typography variant="p">
                <a
                  href="facebookLink"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Facebook
                </a>
              </Typography>
              <br /> <br />
              <Typography variant="p">
                <a
                  href="instaLink"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Instagram
                </a>
              </Typography>
              <br /> <br />
              <Typography variant="p">
                <a
                  href="TwitterLink"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Twitter
                </a>
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Typography variant="h6">Sign In</Typography> <br />
              <Typography variant="p">Google</Typography> <br /> <br />
              <Typography variant="p">Gmail</Typography> <br />
            </Grid>
          </Grid>
        </div>
        <div style={{ padding: "30px 0px", borderTop: "2px solid white" }}>
          <Typography variant="p">&copy; All Rights Reserved</Typography>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
