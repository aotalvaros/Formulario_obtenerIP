import React, { useState } from "react";

export const App = () => {

  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
  });

  const[usuarioIP,enviarIpUsuario]=useState("")

  function actualizarCampos(evento) {
    setFormulario({ ...formulario, [evento.target.name]: evento.target.value });
  }

  function valirFormulario(evento) { 
    evento.preventDefault();
   

    if (formulario.nombre === "" || formulario.apellido === "") {
      alert("ingresar los valores de nombre y apellido ");
      enviarIpUsuario(null);
    }
    else{
    fetch('https://api.ipify.org/?format=json')
    .then(respuesta => respuesta.json())
    .then(datos => {     
      enviarIpUsuario(datos.ip)}
      )
    }
  }

  return (
    <>
      <div className="container">
        <div className="abs-center">
          <div className="card card-container">
            <form>
              <div class="mb-3">
                <label for="nombre" class="form-label">
                  Ingrese su nombre
                </label>
                <input
                  type="text"
                  value={formulario.nombre}
                  class="form-control"
                  name="nombre"
                  onChange={actualizarCampos}
                />
              </div>

              <div class="mb-3">
                <label for="apellido" class="form-label">
                  Ingrese su apellido
                </label>
                <input
                  type="text"
                  value={formulario.apellido}
                  class="form-control"            
                  name="apellido"
                  onChange={actualizarCampos}
                />
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                onClick={valirFormulario}
              >
                Obtener mi IP
              </button>
              
              {usuarioIP ?
              (<p>hola {formulario.nombre} {formulario.apellido} tu direccion ip es: {usuarioIP} </p>) :null
                }
            </form>
          </div>
        </div>
      </div>
    </>
  );
};