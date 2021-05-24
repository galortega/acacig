import React from "react";
import Link from "next/link";

const Navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark-blue">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
          <img
            alt="logo de la asociación de ciegos del Guayas."
            class="logo-navbar"
            tabindex="-1"
            src="../assets/img/logo_blanco.png"
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
        <div class="collapse navbar-collapse" id="navbarNav" role="navigation">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link href="/">
                <a class="nav-link active">Inicio</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/nosotros">
                <a class="nav-link">Nosotros</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/actividades">
                <a class="nav-link">Actividades</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/donaciones">
                <a class="nav-link">Donaciones</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/seMiembro">
                <a class="nav-link">Sé miembro</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/noticias">
                <a class="nav-link">Noticias</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link href="/contacto">
                <a class="nav-link">Contacto</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
