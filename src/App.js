import React, { useState } from "react";

export const App = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
  });

  const [usuarioIP, enviarIpUsuario] = useState("");

  function actualizarCampos(evento) {
    setFormulario({ ...formulario, [evento.target.name]: evento.target.value });
   
    if (evento.target.value === "") {
      enviarIpUsuario(null);
    }
  }

  function valirFormulario(evento) {
    evento.preventDefault();

    if (formulario.nombre === "" || formulario.apellido === "") {
      alert("ingresar los valores de nombre y apellido ");
    } else {
      fetch("https://api.ipify.org/?format=json")
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          enviarIpUsuario(datos.ip);
        });
    }
  }

  return (
    <>
      <div className="container">
        <div className="abs-center">
          <div className="card card-container">
            <form>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Ingrese su nombre
                </label>
                <input
                  type="text"
                  value={formulario.nombre}
                  className="form-control"
                  name="nombre"
                  onChange={actualizarCampos}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                  Ingrese su apellido
                </label>
                <input
                  type="text"
                  value={formulario.apellido}
                  className="form-control"
                  name="apellido"
                  onChange={actualizarCampos}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={valirFormulario}
              >
                Obtener mi IP
              </button>

              {usuarioIP ? (
                <p>
                  hola {formulario.nombre} {formulario.apellido} tu direccion ip
                  es: {usuarioIP}{" "}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
