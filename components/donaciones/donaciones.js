import React from "react";
import Link from "next/link";

const Donacion = (props) => {
    return(
    <div class="container">
      <main id="main" tabindex="-1">
        <div class="row">
            <div class="col-md-12">
                <h1 class="titulos-primarios">Donaciones</h1>
            </div>
        </div>
        <div class="row espaciado-filas">
            <div class="col-md-6 col-xs-12">  
                <h2 class="titulos-secundarios">¿Por qué es importante donar?</h2>
                <p>Somos una organización sin fines de lucro, que no recibe apoyo del estado ni de otras organizaciones gubernamentales ni no gubernamentales. Al realizar una donación haces posible que podamos seguir con nuestra labor. El dinero donado es utilizado para las diversas actividades de la asosiación y también para el mantenimiento de la misma. <br/> Otra forma de apoyarnos es convirtiendote en miembro voluntario <Link href="/seMiembro"><a><strong>Quiero ser miembro!</strong></a></Link></p>
                <p><strong>Banco (nombre del banco)</strong></p>
                <ul>
                    <li><strong>Número de cuenta: </strong> #######</li>
                    <li><strong>Tipo de cuenta: </strong> #######</li>
                    <li><strong>N. Cédula: </strong> #######</li>
                    <li><strong>Nombre de la cuenta: </strong> #######</li>
                </ul>
            </div>
            <div class="col-md-6 col-xs-12">  
                <img class="imagenes-actividades" src="img/foto-equipo.jpg" alt="Miembros de la ACACIG." />
            </div>
        </div>
      </main>
    </div>
    )
}

export default Donacion;