import React from "react";

const Contact = (props) => {
  return (
    <div class="col-md-12">
      <h1 class="titulos-primarios">Contacto</h1>
      <div class="row margin-bottom-small center-xs">
        <div class="col-md">
          <em class="fa fa-map-marker fa-4x p-0"></em>
          <br />
          <strong>Nuestra Ubicación</strong>
          <br />
          Lizardo García 831 y Alcedo esquina.
        </div>
        <div class="col-md">
          <em class="fa fa-phone fa-4x p-0"></em>
          <br />
          <strong>Teléfono</strong>
          <br />
          0999674622
        </div>
        <div class="col-md">
          <em class="fa fa-envelope fa-4x p-0"></em>
          <br />
          <strong>Escríbenos</strong>
          <br />
          <a href="mailto:acacig.77@gmail.com">acacig.77@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
