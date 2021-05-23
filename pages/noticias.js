import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Noticia from "../components/noticias/noticias";

const Noticias = (props) => {
  return (
    <Layout pageTitle="News">
      <header>
        <Navbar/>
        <Banner/>
      </header>
      <Noticia/>
      <Footer/>
    </Layout>
  );
};

export default Noticias;
