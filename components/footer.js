import React from "react";

const Footer = (props) => {
    return(
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
            style={{ width: "100px" }}
          />
        </div>
      </footer>
    )
}

export default Footer;