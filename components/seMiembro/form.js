import React from "react";

const MiembroForm = (props) => {
  return (
    <form method="POST" action="" onsubmit="submitForm()">
      <div class="row margin-bottom-small mt-4 center-xs">
        <div class="col-sm-6 padding-small">
          <div class="form-group custom-form-group campo-voluntario campo-miembro mb-2">
            <label for="tipo_miembro">
              Tipo <span class="text-danger">*</span>
            </label>
            <div class="form-check ml-4" style={{ marginLeft: "20px" }}>
              <input
                class="form-check-input"
                type="radio"
                name="radio_tipo"
                id="id_radio_miembro"
                value="campo-miembro"
                aria-label="Miembro con discapacidad visual"
                onchange="cambiarTipoMiembro(this)"
                checked
              />
              <label class="form-check-label" for="id_radio_miembro">
                Miembro con discapacidad visual
              </label>
            </div>
            <div class="form-check" style={{ marginLeft: "20px" }}>
              <input
                class="form-check-input"
                type="radio"
                name="radio_tipo"
                id="id_radio_voluntario"
                value="campo-voluntario"
                aria-label="Socio Voluntario"
                onchange="cambiarTipoMiembro(this)"
              />
              <label class="form-check-label" for="id_radio_voluntario">
                Socio Voluntario
              </label>
            </div>
          </div>
          <div class="form-group custom-form-group campo-voluntario campo-miembro">
            <label for="nombre">
              Nombres <span class="text-danger">*</span>
            </label>
            <input
              type="text"
              name="nombre"
              class="margin-bottom-small"
              maxlength="100"
              placeholder="Nombres y Apellidos"
              required=""
              id="id_nombre"
              aria-label="Ingrese sus nombres y apellidos"
            />
          </div>
          <div class="form-group custom-form-group campo-voluntario campo-miembro">
            <label for="direccion">
              Direcci??n de domicilio<span class="text-danger"></span>
            </label>
            <input
              type="text"
              name="direccion"
              class="margin-bottom-small"
              maxlength="200"
              placeholder="Direcci??n..."
              id="id_direccion"
              aria-label="Ingrese su direcci??n de domicilio"
            />
          </div>
          <div class="form-group custom-form-group campo-voluntario campo-miembro">
            <label for="email">
              Correo <span class="text-danger">*</span>
            </label>
            <input
              type="email"
              name="email"
              class="margin-bottom-small"
              maxlength="100"
              placeholder="Correo"
              required=""
              id="id_email"
              aria-label="Ingrese su correo electr??nico"
            />
          </div>
          <div class="row">
            <div class="form-group custom-form-group campo-voluntario campo-miembro col-sm-6">
              <label for="telefono">
                Tel??fono <span class="text-danger"></span>
              </label>
              <input
                type="number"
                name="telefono"
                class="margin-bottom-small"
                maxlength="20"
                placeholder="Tel??fono"
                id="id_telefono"
                aria-label="Ingrese su n??mero telef??nico"
              />
            </div>
            <div class="form-group custom-form-group campo-voluntario campo-miembro col-sm-6">
              <label for="edad">
                Edad <span class="text-danger"></span>
              </label>
              <input
                type="number"
                name="edad"
                class="margin-bottom-small"
                maxlength="100"
                placeholder="Edad"
                required=""
                id="id_edad"
                aria-label="Ingrese su edad en n??meros"
              />
            </div>
          </div>
          <div class="form-group custom-form-group campo-voluntario campo-miembro">
            <label for="formulario">
              Formulario de inscripci??n <span class="text-danger">*</span>
            </label>
            <em
              class="fa fa-info-circle p-0"
              data-toggle="tooltip"
              data-placement="top"
              title="Cargue su formulario brindado por la Asociaci??n escaneado como pdf"
            ></em>
            <div class="custom-file">
              <input
                type="file"
                name="formulario"
                class="margin-bottom-small custom-file-input"
                id="id_formulario"
                aria-label="Cargue su formulario brindado por la Asociaci??n escaneado como pdf"
              />
            </div>
          </div>
          <div class="form-group custom-form-group campo-voluntario campo-miembro">
            <label for="cedula">
              C??dula de Ciudadan??a <span class="text-danger">*</span>
            </label>
            <em
              class="fa fa-info-circle p-0"
              data-toggle="tooltip"
              data-placement="top"
              title="Cargue su c??dula escaneada como pdf"
            ></em>
            <div class="custom-file">
              <input
                type="file"
                name="cedula"
                class="margin-bottom-small custom-file-input"
                id="id_cedula"
                aria-label="Cargue su c??dula escaneada como pdf"
              />
            </div>
          </div>
          <div class="form-group custom-form-group campo-miembro">
            <label for="carnet">
              Carnet de Discapacidad <span class="text-danger">*</span>
            </label>
            <em
              class="fa fa-info-circle p-0"
              data-toggle="tooltip"
              data-placement="top"
              title="Cargue su carnet de discapacidad escaneado como pdf"
            ></em>
            <div class="custom-file">
              <input
                type="file"
                name="carnet"
                class="margin-bottom-small custom-file-input"
                id="id_carnet"
                aria-label="Cargue su carnet de discapacidad escaneado como pdf"
              />
            </div>
          </div>

          <input
            type="submit"
            value="Enviar"
            class="bg-dark-blue"
            aria-label="Enviar Formulario "
          />
        </div>
      </div>
    </form>
  );
};

export default MiembroForm;
