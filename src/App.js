import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DeliveryIteams from "./Pages/Home/DeliveryIteams/DeliveryIteams";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./context/AuthProvider";
import ItemDetails from "./Pages/Home/ItemDetails/ItemDetails";
import Success from "./Pages/Home/Success/Success";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import ReviewOrder from "./Pages/Home/ReviewOrder/ReviewOrder";
import Payment from "./Pages/Home/Payment/Payment";
import AllOrders from "./Pages/Home/AllOrders/AllOrders";
import MyOrders from "./Pages/Home/MyOrders/MyOrders";
import Cart from "./Pages/Shared/Cart/Cart";
import CartReview from "./Pages/Home/CartReview/CartReview";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import Gifts from "./Pages/Home/Gifts/Gifts";
import ComboGift from "./Pages/Home/ComboGift/ComboGift";
import WishList from "./Pages/Home/WishList/WishList";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/deliveryitems">
              <DeliveryIteams></DeliveryIteams>
            </Route>
            <Route path="/deliveries/:itemid">
              <ItemDetails></ItemDetails>
            </Route>
            <Route path="/success">
              <Success></Success>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <PrivateRoute path="/revieworder">
              <ReviewOrder></ReviewOrder>
            </PrivateRoute>
            <Route path="/payment">
              <Payment></Payment>
            </Route>
            <Route path="/allorders">
              <AllOrders></AllOrders>
            </Route>
            <Route path="/myorders">
              <MyOrders></MyOrders>
            </Route>

            <Route path="/cart">
              <Cart></Cart>
            </Route>
            <Route path="/cartreview">
              <CartReview></CartReview>
            </Route>
            <Route path="/gifts">
              <Gifts></Gifts>
            </Route>
            <Route path="/combogift">
              <ComboGift></ComboGift>
            </Route>
            <Route path="/wishlist">
              <WishList></WishList>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
