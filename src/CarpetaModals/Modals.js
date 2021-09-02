import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

export const Modals = ({
  nombre,
  apellido,
  estado,
  estado2,
  cerrarModel,
  cerrarModel2,
  IP,
}) => {
  return (
    <>
      <Modal isOpen={estado} className="contenedorInformacion">
        <ModalHeader>
          <img
            className="img-serponsive logo-img" alt=""
            src="https://sedeelectronica.antioquia.gov.co/info/antioquia_se/media/bloque2071.png"
          ></img>
        </ModalHeader>
        <ModalBody>
          <label>
            Hola {nombre} {apellido} tu direccion IP es: {IP}{" "}
          </label>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={cerrarModel}>
            Cerrar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={estado2} className="contenedorInformacion">
        <ModalHeader>
          <img
            className="img-serponsive logo-img" alt=""
            src="https://sedeelectronica.antioquia.gov.co/info/antioquia_se/media/bloque2071.png"
          ></img>
        </ModalHeader>
        <ModalBody className="border">
        <img  alt=""className="img-serponsive logo-img" src="https://image.flaticon.com/icons/png/512/929/929416.png">
        </img>
          <label>
            En este momento el sistema no esta disponible, intentalo mas tarde
          </label>
        </ModalBody>
        <ModalFooter>
          <button className="border" onClick={cerrarModel2}>
            Cerrar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};
