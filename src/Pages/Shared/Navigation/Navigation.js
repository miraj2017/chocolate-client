import { Avatar, Typography } from "@mui/material";
import { AiOutlineShoppingCart } from "react-icons/ai";

import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Login from "../../Login/Login/Login";
import useCartHandle from "../../../Hooks/useCartHandle";

const Navigation = () => {
  const { totalQuantity } = useCartHandle();
  const { user, logout } = useAuth();

  const [open, setOpen] = React.useState(false);
  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        // bg="gray"
        // variant="dark"
        style={{
          padding: "20px 0px",
          boxShadow: "0px 0.5px 1px gray ",
          // background: "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px",
          background: "white",
        }}
        fixed="top"
      >
        <Container>
          <Navbar.Brand to="/home">GIFT BOX</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/gifts">
                Gift Products
              </Nav.Link> */}
              <Nav.Link as={Link} to="/combogift">
                Combogifts
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/cartreview">
                Revieworder
              </Nav.Link> */}

              {user.email ? (
                <>
                  <Nav.Link as={Link} to="/wishlist">
                    WishList
                  </Nav.Link>
                  <Nav.Link as={Link} to="/dashboard">
                    Dashboard
                  </Nav.Link>
                </>
              ) : (
                <button
                  style={{ border: "none", background: "white", color: "gray" }}
                  onClick={modalOpen}
                >
                  LogIn
                </button>
              )}
            </Nav>
            <Nav>
              {user.email && (
                <>
                  <NavLink as={Link} to="/cart">
                    <AiOutlineShoppingCart
                      style={{ fontSize: "25px", color: "orange" }}
                    ></AiOutlineShoppingCart>
                    <Typography
                      style={{
                        display: "inline",
                        fontWeight: "bold",
                        color: "orange",
                        position: "relative",
                        top: "-4px",
                        left: "-13px",
                      }}
                    >
                      {totalQuantity}
                    </Typography>
                  </NavLink>
                  <Nav.Link as={Link} onClick={logout}>
                    Logout
                  </Nav.Link>
                </>
              )}
              {user.email && <Avatar src={user.photoURL} alt="userPhoto" />}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {open && <Login open={open} close={modalClose}></Login>}
    </div>
  );
};

export default Navigation;
