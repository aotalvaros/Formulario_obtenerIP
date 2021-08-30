import React, {  useState } from "react";

export const Formulario=({nombre,apellido,actualizarCampos,validarFormulario})=>{
    return(
        <>
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
                  value={nombre}
                  className="form-control"
                  name="nombre"
                  onChange={actualizarCampos}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                  Ingrese su apellido
                </label>
                <input
                  type="text"
                  value={apellido}
                  className="form-control"
                  name="apellido"
                  onChange={actualizarCampos}
                  required
                />
              </div>
            </form>
        </>
    )
}