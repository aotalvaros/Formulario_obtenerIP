import React, { useState } from "react";
import { Modals } from "./CarpetaModals/Modals";
import { Formulario } from "./Formularios/Formulario";

export const App = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
  });
  const [ventana, setVentana] = useState({ model: false });

  const [usuarioIP, enviarIpUsuario] = useState("");

  function actualizarCampos(evento) {
    setFormulario({ ...formulario, [evento.target.name]: evento.target.value });

    if (evento.target.value === "") {
      enviarIpUsuario(null);
    }
  }

  function validarFormulario(evento) {
    evento.preventDefault();

    if (
      formulario.nombre.trim().length === 0 ||
      formulario.apellido.trim().length === 0
    ) {
      alert("ingresar los valores de nombre y apellido ");
    } else {
      fetch("https://api.ipify.org/?format=json")
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          enviarIpUsuario(datos.ip);
        });

      abrirModal();
    }
  }
  const abrirModal = () => {
    setVentana({ model: !ventana.model });
  };

  return (
    <>
      <div className="container">
        <div className="abs-center">
          <div className="card card-container">
            <Formulario
              nombre={formulario.nombre}
              apellido={formulario.apellido}
              actualizarCampos={actualizarCampos}
              validarFormulario={validarFormulario}
            />

            <button
              type="submit"
              className="btn btn-primary"
              onClick={validarFormulario}
            >
              Obtener mi IP
            </button>
          </div>
        </div>
      </div>

      <Modals
        nombre={formulario.nombre}
        apellido={formulario.apellido}
        estado={ventana.model}
        cerrarModel={abrirModal}
        IP={usuarioIP}
      />
    </>
  );
};
