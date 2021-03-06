import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Donacion from "../components/donaciones/donaciones";

const Donaciones = (props) => {
  return (
    <Layout pageTitle="Donations">
      <header>
        <Navbar />
        <Banner />
      </header>
      <Donacion />
      <Footer />
    </Layout>
  );
};

export default Donaciones;
