import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Objetivos from "../components/inicio/objetivos";
import Actividades from "../components/inicio/actividades";
import CallToAction from "../components/inicio/callToAction";
import Noticias from "../components/inicio/noticias";
import NewsLetter from "../components/inicio/newsLetter";
import Donar from "../components/inicio/donar";

const Inicio = (props) => {
  return (
    <Layout pageTitle="Home">
      <header>
        <Navbar />
        <Banner />
      </header>
      <div class="wrapper">
        <main id="main" tabindex="-1">
          <Objetivos />
          <Actividades />
          <CallToAction />
          <Noticias />
          <NewsLetter />
          <Donar />
        </main>
      </div>
      <Footer />
    </Layout>
  );
};

export default Inicio;
