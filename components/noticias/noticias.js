import React from "react";

const Noticia = (props) => {
    return (
        <section class="portfolio" id="portfolio">
          <div class="container">
              <div class="row center-xs">
                  <div class="col-md">
                      <h2 class="section-title">Noticias</h2>
                      
                  </div>
              </div>
          </div>
          <div class="container">
            <main id="main" tabindex="-1">
              <div class="row mb-5">
                <div class="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <img src="img/reunion.jpg" alt="reunion con miembros sobre desarrollo personal"/>                
                </div>
                <div class="col-sm">
                  <h3>Reunion de directiva</h3>
                  <span>12/04/2021</span>
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                
                    <a href="#">Leer más</a>
                </div>
              </div>              
              <div class="row mb-5">
                  <div class="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <img src="img/brailer.jpeg" alt="taller braille"/>                  
                  </div>
                  <div class="col-sm">
                      <h3>Nuevos miembros recibieron taller de braille</h3>
                      <span>12/04/2021</span>
                      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                      <a href="noticias_internas.html">Leer más</a>
                </div>

                </div>
              </main>
            </div>      
    </section> 
    )
}

export default Noticia;