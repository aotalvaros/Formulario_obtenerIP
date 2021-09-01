import React, { useState } from "react";
import { Modals } from "../CarpetaModals/Modals";
import { Form, Col } from "react-bootstrap";

export const Formulario = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
  });
  const [ventana, setVentana] = useState({ model: false, model2: false });
  const [validated, setValidated] = useState(false);
  const [usuarioIP, enviarIpUsuario] = useState("");
  const [esValido, formularioEsValido] = useState({
    nombre: false,
    apellido: false,
  });

  function actualizarCampos(evento) {
    setFormulario({ ...formulario, [evento.target.name]: evento.target.value });

    if (evento.target.value === "") {
      enviarIpUsuario(null);
    }
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const prevents = () => {
      event.preventDefault();
      event.stopPropagation();
    };
    const validaprevents = () => {
      prevents();
      formularioEsValido({
        nombre: true,
        apellido: true,
      });
      setValidated(false);
    };

    if (form.checkValidity() === false) {
      prevents();
    }

    if (
      expresiones.numero.test(formulario.nombre) ||
      expresiones.numero.test(formulario.apellido)
    ) {
      validaprevents();
    } else if (
      expresiones.usuario.test(formulario.nombre) &&
      expresiones.usuario.test(formulario.apellido)
    ) {
      prevents();
      formularioEsValido({
        nombre: false,
        apellido: false,
      });
      setValidated(true);
      consumoApi();
    } else {
      validaprevents();
    }
  };
  const expresiones = {
    usuario: /^[A-Za-z]+$/i,
    numero: /^[\s0-9]+$/u,
  };

  const consumoApi = () => {
    fetch("https://ai.ipify.org/?format=json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        enviarIpUsuario(datos.ip);
      })
      .then((respuesta) => abrirModal())
      .catch((erro) => abrirModal2());
  };

  const abrirModal = () => {
    setVentana({ model: !ventana.model });
  };
  const abrirModal2 = () => {
    setVentana({ model2: !ventana.model2 });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <img
          className="img-serponsive logo-img"
          src="https://sedeelectronica.antioquia.gov.co/info/antioquia_se/media/bloque2071.png"
        ></img>

        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            value={formulario.nombre}
            className="form-control"
            name="nombre"
            onChange={actualizarCampos}
            isInvalid={esValido.nombre}
          />
          <Form.Control.Feedback type="invalid">
            ingresa un nombre valido
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            value={formulario.apellido}
            className="form-control"
            name="apellido"
            onChange={actualizarCampos}
            isInvalid={esValido.apellido}
          />
          <Form.Control.Feedback type="invalid">
            ingresa un apellido valido
          </Form.Control.Feedback>

          <button type="submit" className="btn btn-primary ">
            Obtener mi IP
          </button>
        </Form.Group>
      </Form>

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
