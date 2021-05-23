import React from "react";
import Layout from "../components/layout";

const Inicio = (props) => {
  return (
    <Layout pageTitle="Be ACACIG">
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark-blue">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
              <img
                alt="logo de la asociación de ciegos del Guayas."
                class="logo-navbar"
                tabindex="-1"
                src="img/logo_blanco.png"
              />
            </a>
            <div id="skip-to-content">
              <a href="#main">Saltar al contenido</a>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse"
              id="navbarNav"
              role="navigation"
            >
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link active" href="index.html">
                    Inicio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="nosotros.html">
                    Nosotros
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="actividades.html">
                    Actividades
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="donaciones.html">
                    Donaciones
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="se_miembro.html">
                    Sé miembro
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="noticias.html">
                    Noticias
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contacto.html">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="hero flex middle-xs banner-index">
          <div class="hero-text">
            <h1>ACACIG</h1>
            <p class="text-center font-weight-light">
              Asociación de ciegos y amigos de los ciegos del Guayas.
            </p>
          </div>
        </div>
      </header>
      <body></body>
      <footer>
        <div class="col-md-4 text-center">
          <img
            src="img/facebook.png"
            alt="icono de facebook"
            class="iconos-md text-left"
          />{" "}
          Síguenos en nuestra página oficial
        </div>
        <div class="col-md-3">
          <h3 class="subtitulos">ACACIG</h3>
          <ul class="links">
            <li>
              <a href="index.html" title="inicio" target="_blank">
                Inicio
              </a>
            </li>
            <li>
              <a href="nosotros.html" title="Nosotros" target="_blank">
                Nosotros
              </a>
            </li>
            <li>
              <a href="actividades.html" title="Actividades" target="_blank">
                Actividades
              </a>
            </li>
            <li>
              <a href="donaciones.html" title="donaciones" target="_blank">
                Donaciones
              </a>
            </li>
            <li>
              <a href="contacto.html" title="se miembro" target="_blank">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <ul>
            <li class="info">
              <img
                src="img/ubicacion.png"
                alt="icono de ubicación"
                class="iconos"
              />{" "}
              Lizardo García 831 y Alcedo esquina
            </li>
            <li class="info">
              <img
                src="img/telefono.png"
                alt="icono de teléfono"
                class="iconos"
              />{" "}
              0999674622
            </li>
            <li class="info">
              <img
                src="img/correo-electronico.png"
                alt="icono de correo"
                class="iconos"
              />{" "}
              acacig.77@gmail.com
            </li>
          </ul>
        </div>
        <div class="col-md-2">
          <img
            src="img/LOGO-removebg-preview.png"
            alt="icono de ACACIG"
           // style="width: 100px;"
          />
        </div>
      </footer>
    </Layout>
  );
};

export default Inicio;
