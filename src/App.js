import React, {  useState } from "react";
import { Modal,ModalHeader,ModalBody, ModalFooter} from "reactstrap";

export const App = () => {

  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
  });
  const [ventana,setVentana]= useState({model: false});

  const [usuarioIP, enviarIpUsuario] = useState("");

  function actualizarCampos(evento) {
    setFormulario({ ...formulario, [evento.target.name]: evento.target.value });

    if (evento.target.value === "") {
      enviarIpUsuario(null);
    }
  }

  function validarFormulario(evento) {
    evento.preventDefault();

    if (formulario.nombre === "" || formulario.apellido === "") {
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
  const abrirModal=()=>{
     setVentana({model: !ventana.model})
  }

  return (
    <>
      <div className="container">
        <div className="abs-center">
          <div className="card card-container">
            <form>
            <img className="img-serponsive logo-img" 
          src="https://sedeelectronica.antioquia.gov.co/info/antioquia_se/media/bloque2071.png"></img>
          <div>
            
          </div>
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

              <button type="submit" className="btn btn-primary" onClick={validarFormulario}>
                Obtener mi IP
              </button>
            </form>
          </div>
        </div>
      </div>

      <Modal isOpen={ventana.model}>
        <ModalHeader>
          <img className="img-serponsive logo-img" 
          src="https://sedeelectronica.antioquia.gov.co/info/antioquia_se/media/bloque2071.png"></img>
        </ModalHeader>
        <ModalBody>
          <label> Hola {formulario.nombre} {formulario.apellido} tu direccion ip
                  es: {usuarioIP} </label>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={abrirModal}>Cerrar</button>
        </ModalFooter>
      </Modal>
    </>
  
  );
};
