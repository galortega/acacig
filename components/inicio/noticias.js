import React from "react";
import { baseImg } from "../../utils/constants";

const Noticias = (props) => {
  return (
    <section class="portfolio" id="portfolio">
      <div class="container">
        <div class="row center-xs">
          <div class="col-md">
            <h2 class="titulos-index">Noticias</h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row mb-5">
          <div class="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img
              src={`${baseImg}/reunion.jpg`}
              alt="reunion con miembros sobre desarrollo personal"
            />
          </div>
          <div class="col-sm">
            <h3>Reunion de directiva</h3>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent luptatum zzril delenit augue duis dolore te
              feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat.
            </p>
            <a href="noticias_internas.html"> Leer más</a>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src={`${baseImg}/brailer.jpeg`} alt="taller brailer" />
          </div>
          <div class="col-sm">
            <h3>Se realizó taller de braille a nuevos miembros</h3>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent luptatum zzril delenit augue duis dolore te
              feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat.
            </p>
            <a href="noticias_internas.html">Leer más</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Noticias;
