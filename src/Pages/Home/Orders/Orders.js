import { Box } from "@mui/material";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import React from "react";
// import useAuth from "../../../Hooks/useAuth";

const Orders = (props) => {
  // const { user } = useAuth();
  // const { name, price, img } = props.orders.orderCollections;
  // const { email } = props.orders.user;

  return (
    <>
      {props.orders.orderCollections.map((p) => (
        <TableRow
          key={p._id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {p._id}
          </TableCell>
          <TableCell align="right">{p.name}</TableCell>
          <TableCell align="right">{p.price}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

// {user.email === email ? (
//   <Button
//     variant="outlined"
//     style={{ color: "red", border: "none" }}
//   >
//     Delete
//   </Button>
// ) : (
//   <Button disabled>Delete</Button>
// )}

export default Orders;
