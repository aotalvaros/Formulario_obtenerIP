import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Formulario extends React.Component {
    
    constructor(props){
        super(props);
        this.nombre = React.createRef();
        this.apellido= React.createRef();
    }

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
                  ref={this.nombre}
                  class="form-control"
                  placeholder="Nombre"
                  
                />
              </div>

              <div class="mb-3">
                <label for="apellido" class="form-label">
                  Ingrese su apellido
                </label>
                <input
                  type="text"
                  ref={this.apellido}
                  class="form-control"
                  placeholder="Apellido"
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
