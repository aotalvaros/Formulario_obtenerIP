import React, { useState } from "react";
import { Modals } from "../CarpetaModals/Modals";
import { Form, Col,Button, Modal } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";



export const Formulario = () => {

  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
  });
  const [ventana, setVentana] = useState({ 
    model: false, 
    model2: false });
  const [usuarioIP, enviarIpUsuario] = useState("");
  const [esValido, formularioEsValido] = useState({
    nombreEsValido: false,
    apellidoEsValido: false,
  });
  const [esValidoSpinner,spinnerEsValido]=useState(false);

  function actualizarCampos(evento) {
    setFormulario({ ...formulario, [evento.target.name]: evento.target.value });
  }

  const handleSubmit = () => {
    if (expresiones.letras.test(formulario.nombre)
      && expresiones.letras.test(formulario.apellido)) {    
      formularioEsValido({nombreEsValido:false,apellidoEsValido:false});
      consumirApi();
    } else {
      formularioEsValido({nombreEsValido:true,apellidoEsValido:true});
    }  
  };
  const expresiones = {
    letras: /^[A-Za-z]+$/i,
    patronIP: /^([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})+$/, 
  };

  const consumirApi = ()=> {
    fetch("https://api.ipify.org/?format=json")
      .then((respuesta) => respuesta.json())
      .then((datos) =>{
        enviarIpUsuario(datos.ip);                
      } 
      )
      .then(spinnerEsValido(true))
      .then((respuesta) =>{ 
        abrirModal();
        spinnerEsValido(false);      
      })
      .catch((erro) => {
        abrirModal2();
        spinnerEsValido(false);
      });
    
  };

  const abrirModal = () => {
    setVentana({ model: !ventana.model });
  };
  const abrirModal2 = () => {
    setVentana({ model2: !ventana.model2 });   
  };

  return (
    <>
      <Form noValidate validated={esValido.nombreEsValido }  onSubmit={handleSubmit}>
        <img
          className="img-serponsive logo-img" alt=""
          src="https://sedeelectronica.antioquia.gov.co/info/antioquia_se/media/bloque2071.png"
        >         
        </img>

        <Form.Group as={Col} id={"cuerpo"}>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            value={formulario.nombre}            
            name="nombre"
            placeholder="nombre"
            onChange={actualizarCampos}           
          />
          <Form.Control.Feedback type="invalid">
            ingresa un nombre valido
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            value={formulario.apellido}
            name="apellido"
            placeholder="apellido"
            onChange={actualizarCampos}
          />
          <Form.Control.Feedback type="invalid">
            ingresa un apellido valido
          </Form.Control.Feedback>
        </Form.Group>
      </Form>

          <Button  onClick={handleSubmit} className="text-center mb-2">
            Obtener mi IP
          </Button>

          <Modal show={esValidoSpinner} ria-labelledby="contained-modal-title-vcenter"
      centered>
          <ClipLoader loading={true}  size={50} speedMultiplier={0.7} color={"#216101"} />
          </Modal>
        
      <Modals
        nombre={formulario.nombre}
        apellido={formulario.apellido}
        estado={ventana.model}
        estado2={ventana.model2}
        cerrarModel={abrirModal}
        cerrarModel2={abrirModal2}
        IP={usuarioIP}
      />
    </>
  );
};
