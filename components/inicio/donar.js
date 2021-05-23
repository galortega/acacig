import React from "react";

const Donar = (props) => {
    return(
        <section>
                    <div class="container">
                        <div class="row">
                            <div class="col col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-5">
                                <div class="card " style={{width: "100%"}}>
                                    
                                    <img src="img/donaciones.png" class="card-img-top" alt="Sé parte de nosotros"/>
                                    <div class="card-body">
                                    <h2 class="card-title">Deseas apoyar nuestra labor?</h2>
                                    <p class="card-text">Realiza una donación para que podamos seguir realizando y ayudando a personas no videntes..</p>
                                    <a href="donaciones.html" class="btn btn-primary">Deseo donar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    )
}

export default Donar;