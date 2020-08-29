import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "./Custom/Modal";
export default function WantToKnowMore(props) {
  const urlPath = "#";
  return (
    <Modal id="want-to-know-more" {...props}>
      <ModalHeader>
  <h2 className="bg-gradient">{props.words.title}</h2>
      </ModalHeader>
      <ModalBody>
        <p>{props.words.legend}</p>
      </ModalBody>
      <ModalFooter>
        <a className="close" href={urlPath}>
          {props.words.closeButton}
        </a>
      </ModalFooter>
    </Modal>
  );
}
