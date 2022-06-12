import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Activities from "../Activities/Activities";
import Banner from "../Banner/Banner";
import DeliveryIteams from "../DeliveryIteams/DeliveryIteams";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <DeliveryIteams></DeliveryIteams>
      <Activities></Activities>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
};

export default Home;
