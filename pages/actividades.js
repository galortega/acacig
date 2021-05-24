import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Actividad from "../components/actividades/actividades";

const Actividades = (props) => {
  return (
    <Layout pageTitle="Activities">
      <header>
        <Navbar />
        <Banner />
      </header>
      <Actividad />
      <Footer />
    </Layout>
  );
};

export default Actividades;
