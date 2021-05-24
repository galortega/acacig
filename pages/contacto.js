import React from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Contact from "../components/contacto/contacto";
import ContactForm from "../components/contacto/form";

const Contacto = (props) => {
  return (
    <Layout pageTitle="Contact">
      <header>
        <Navbar />
        <Banner />
      </header>
      <div class="container">
        <div class="row">
          <main id="main" tabindex="-1">
            <Contact />
            <ContactForm />
          </main>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Contacto;
