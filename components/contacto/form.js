import React from "react";

const ContactForm = (props) => {
    return(
        <form method="POST" action="" onsubmit="submitForm()">
            <div class="row margin-bottom-small mt-4 center-xs">        
                <div class="col-sm-6 padding-small">
                    <div class="form-group custom-form-group">
                        <label for="nombre">Nombres <span class="text-danger">*</span></label>
                        <input type="text" name="nombre" class="margin-bottom-small" maxlength="100" placeholder="Nombres y Apellidos" required="" id="id_nombre" aria-label="Ingrese sus nombres y apellidos"/>
                    </div> 
                    <div class="row">    
                        <div class="form-group custom-form-group col-sm-6">
                            <label for="email">Correo <span class="text-danger">*</span></label>
                            <input type="email" name="email" class="margin-bottom-small" maxlength="100" placeholder="Correo Electrónico" required="" id="id_email" aria-label="Ingrese su correo electrónico"/>
                        </div>   
                        <div class="form-group custom-form-group col-sm-6">
                            <label for="email">Teléfono <span class="text-danger"></span></label>
                            <input type="number" name="telefono" class="margin-bottom-small" maxlength="20" placeholder="Teléfono" id="id_telefono" aria-label="Ingrese su número telefónico"/>
                        </div> 
                    </div>
                    <div class="form-group custom-form-group">
                        <label for="asunto">Asunto <span class="text-danger">*</span></label>
                        <input type="text" name="email" class="margin-bottom-small" maxlength="100" placeholder="Asunto" required="" id="id_asunto" aria-label="Ingrese el asunto de su mensaje"/>
                    </div>  
                    <div class="form-group custom-form-group">
                        <label for="mensaje">Mensaje <span class="text-danger">*</span></label>
                        <textarea type="text" name="mensaje" class="margin-bottom-small" maxlength="300" rows="5" placeholder="Escriba su mensaje..." required="" id="id_mensaje"></textarea>
                    </div>  

                    <input type="submit" value="Enviar" class="bg-dark-blue" aria-label="Enviar formulario"/>
                </div>    
            </div>
        </form>
    )
}

export default ContactForm;