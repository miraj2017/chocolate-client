// import React, { useState } from "react";
// import useCartHandle from "../../../Hooks/useCartHandle";
// import useDeliveries from "../../../Hooks/useDeliveries";
// import { BsSearch } from "react-icons/bs";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import Tooltip from "@mui/material/Tooltip";
// import { Link } from "react-router-dom";
// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Container,
//   Grid,
//   Typography,
// } from "@mui/material";
// import DeliveryIteams from "../DeliveryIteams/DeliveryIteams";

// const NavSearch = () => {
//   const { deliveries } = useDeliveries();
//   const [searchDeliveries, setSearchDeliveries] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [result, setResult] = useState(false);

//   const { cart } = useCartHandle();
//   let totalQuantity = 0;
//   let total = 0;
//   for (const delivery of cart) {
//     if (!delivery.quantity) {
//       delivery.quantity = 1;
//     }
//     total = total + delivery.price * delivery.quantity;
//     totalQuantity = totalQuantity + delivery.quantity;
//   }

//   const handleSearchText = (e) => {
//     const text = e.target.value;
//     setSearchText(text);
//   };

//   const handleSearch = () => {
//     setResult(true);
//     const matchedProducts = deliveries.filter((delivery) =>
//       delivery.name.toLowerCase().includes(searchText.toLowerCase())
//     );

//     setSearchDeliveries(matchedProducts);
//   };

//   const handleChocolateCategory = () => {
//     setResult(true);
//     const chocolate = deliveries.filter(
//       (delivery) => delivery.category === "chocolate"
//     );
//     setSearchDeliveries(chocolate);
//   };
//   return (
//     <>
//       <div style={{ margin: "100px auto" }}>
//         <div
//           style={{
//             width: "60%",
//             margin: "0 15%",
//             display: "flex",
//             justifyContent: "flex-start",
//             alignItems: "center",
//           }}
//         >
//           <div
//             style={{
//               width: "80%",
//               padding: "10px 20px",

//               outline: "none",
//             }}
//           >
//             <input type="text" placeholder="search by categories" disabled />
//             <select>
//               <option value="Chocolates">Chocolates</option>

//               <option value="Ice-cream">Ice-cream</option>
//               <option value="gifts">gifts</option>
//             </select>
//           </div>
//           <input
//             onBlur={handleSearchText}
//             style={{
//               width: "100%",
//               padding: "10px 20px",
//               background: "#ecf0f1",
//               border: "none",
//               outline: "none",
//             }}
//             type="text"
//             placeholder="Search.."
//           />
//           <div
//             style={{
//               border: "1px solid #E9EBEC",
//               padding: "8px 13px",
//               cursor: "pointer",
//             }}
//           >
//             <BsSearch
//               onClick={handleSearch}
//               style={{
//                 fontSize: "20px",
//               }}
//             ></BsSearch>
//           </div>
//           <Tooltip
//             title="View Your
//         Cart"
//           >
//             <Link to="/cartreview" style={{ textDecoration: "none" }}>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItem: "center",
//                   marginLeft: "30px",
//                 }}
//               >
//                 <AiOutlineShoppingCart
//                   style={{
//                     color: "orange",
//                     fontSize: "25px",
//                     toolTip: "view cart",
//                   }}
//                 ></AiOutlineShoppingCart>
//                 <Typography style={{ color: "orange" }}>
//                   {totalQuantity}
//                 </Typography>
//               </div>
//             </Link>
//           </Tooltip>
//         </div>
//       </div>
//       <Container>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={12} md={4} lg={4}></Grid>
//         </Grid>
//       </Container>
//       {result ? (
//         <Container>
//           {searchDeliveries.length === 0 ? (
//             <>
//               <Typography variant="h5" style={{ textAlign: "center" }}>
//                 🤦‍♂️ No Products Found
//               </Typography>
//             </>
//           ) : (
//             <>
//               <Grid container spacing={2} style={{ margin: "100px 0px" }}>
//                 {searchDeliveries.map((p) => (
//                   <Grid item xs={12} sm={6} md={3}>
//                     <Card
//                       sx={{ maxWidth: 345 }}
//                       style={{
//                         boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
//                         padding: "10px",
//                         cursor: "pointer",
//                       }}
//                     >
//                       <div
//                         style={{
//                           width: "60%",
//                           margin: "0 auto",
//                         }}
//                       >
//                         <CardMedia
//                           component="img"
//                           height="140"
//                           image={p.img}
//                           alt="green iguana"
//                         />
//                       </div>
//                       <CardContent>
//                         <Typography gutterBottom variant="h6" component="div">
//                           {p.name}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           $ {p.price}
//                         </Typography>
//                         <Typography variant="p">{p.description}</Typography>
//                       </CardContent>
//                       <CardActions>
//                         <Link to={`/deliveries/${p._id}`}>
//                           <Button>See Details</Button>
//                         </Link>
//                       </CardActions>
//                     </Card>
//                   </Grid>
//                 ))}
//               </Grid>
//             </>
//           )}
//         </Container>
//       ) : (
//         <DeliveryIteams></DeliveryIteams>
//       )}
//     </>
//   );
// };

// export default NavSearch;
