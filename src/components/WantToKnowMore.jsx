import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "./Custom/Modal";
export default function WantToKnowMore(props) {
  const urlPath = "#";
  return (
    <Modal id="want-to-know-more" {...props}>
      <ModalHeader>
        <h2 className="bg-gradient">Want to Know More?</h2>
      </ModalHeader>
      <ModalBody>
        <p>{props.legend}</p>
      </ModalBody>
      <ModalFooter>
        <a className="close" href={urlPath}>
          Close
        </a>
      </ModalFooter>
    </Modal>
  );
}
