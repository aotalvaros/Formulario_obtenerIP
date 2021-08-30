import {Modal, ModalHeader,ModalBody, ModalFooter} from "reactstrap";


export const Modals=({nombre,apellido,estado,cerrarModel,IP})=>{
 return(
    <>
    <Modal isOpen={estado}>      
     <ModalHeader>
             <img className="img-serponsive logo-img" 
             src="https://sedeelectronica.antioquia.gov.co/info/antioquia_se/media/bloque2071.png"></img>
           </ModalHeader>
           <ModalBody>
             <label>Hola {nombre} {apellido} tu direccion IP es: {IP} </label>
           </ModalBody>
           <ModalFooter>
           <button className="btn btn-primary" onClick={cerrarModel}>Cerrar</button>
           </ModalFooter>

           </Modal>
    </>
 );
 }