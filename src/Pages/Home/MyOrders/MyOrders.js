import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useOrders from "../../../Hooks/useOrders";
import Orders from "../Orders/Orders";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import { Box } from "@mui/material";
import TableBody from "@mui/material/TableBody";

const MyOrders = () => {
  const { orders } = useOrders();

  // const { email } = orders.user;
  // console.log(email);
  const { user } = useAuth();

  return (
    <>
      <Box style={{ width: "70%", height: "100px", margin: "0 auto" }}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Key</TableCell>
                <TableCell align="right">Product</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((p) =>
                p.user.email === user.email ? (
                  <Orders orders={p}></Orders>
                ) : (
                  false
                )
              )}
              {/* 
          {user.email === email ? (
            orders.map((p) => <Orders orders={p}></Orders>)
          ) : (
            <Typography>You didnt order yet</Typography>
          )} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default MyOrders;
