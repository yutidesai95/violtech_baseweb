import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import classes from '../../menu.module.css';
import Formsection from '../../../contact/containers/Form';
import styles from '../../../layout/layout.module.css';
function Modalmenu(props) {
  console.log(props);
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Button
        className={props.className ? props.className : styles.btndesign}
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
       {props.buttonText ? props.buttonText : 'Get in touch'}
      </Button>
      <Modal className={classes.modalpopup} toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>

        <ModalBody className={classes.modalcontent}>
        <button
            aria-label="Close"
            className={classes.close}
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}><b>X</b></span>
          </button>
            <Formsection />
        </ModalBody>
      </Modal>
    </>
  );
}

export default Modalmenu;