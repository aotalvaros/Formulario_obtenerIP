import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modals } from "../CarpetaModals/Modals";

export const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const consumoApi=()=> {   
      fetch("https://api.ipify.org/?format=json")
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          enviarIpUsuario(datos.ip);
        });

      abrirModal();
  }

  const abrirModal = () => {
    setVentana({ model: !ventana.model });
  };

  return (
    <>
      <form onSubmit={handleSubmit(consumoApi)}>
        <img
          className="img-serponsive logo-img"
          src="https://sedeelectronica.antioquia.gov.co/info/antioquia_se/media/bloque2071.png"
        ></img>
        <div></div>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            {...register("nombre", {
              required: true,
              maxLength: 20,
              minLength: 1,
              pattern: /^[A-Za-z]+$/i
            }
            )}
            type="text"
            value={formulario.nombre}
            className="form-control"
            name="nombre"
            onChange={actualizarCampos}
          />
        </div>
        {errors?.nombre?.type === "required" && <p>Ingrese su nombre</p>}
        {errors?.nombre?.type === "pattern" && (
        <p>Solo caracteres alfanumericos </p>
      )}

        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellido
          </label>
          <input
            {...register("apellido", {
              required: true,
              maxLength: 20,
              minLength: 1,
              pattern: /^[A-Za-z]+$/i
            })}
            type="text"
            value={formulario.apellido}
            className="form-control"
            name="apellido"
            onChange={actualizarCampos}
          />
        </div>

        {errors?.apellido?.type === "required" && <p>Ingrese su apellido</p>}
        {errors?.apellido?.type === "pattern" && (
        <p>Solo caracteres alfanumericos </p>
      )}
        
        <button
          type="submit"
          className="btn btn-primary"   
        >
          Obtener mi IP
        </button>
      </form>

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
