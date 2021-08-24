import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Formulario extends React.Component {
  render() {
    return (
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
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="nombre"
                />
              </div>

              <div class="mb-3">
                <label for="apellido" class="form-label">
                  Ingrese su apellido
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="apellido"
                />
              </div>    
                       
              <button type="submit" class="btn btn-primary">
                Obtener mi IP
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Formulario />, document.getElementById("root"));
