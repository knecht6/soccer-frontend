import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "./Custom/Modal";
import { Button, ButtonGroup } from "./Custom/Buttons";
import { FormDialogDonate } from "./stripe/FormDialogDonate";
export default function Donations(props) {
  const urlPath = "#";
  return (
    <Modal id="donations" style={props.style}>
      <ModalHeader>
        <h2 className="bg-gradient">{props.words.title}</h2>
      </ModalHeader>
      <ModalBody>
        <p>{props.words.legend}</p>
        <ButtonGroup>
          <Button type="btn-md btn-lightteal-o">$ 5</Button>
          <Button type="btn-md btn-lightteal-o">$ 10</Button>
          <Button type="btn-md btn-lightteal-o">$ 20</Button>
          <Button type="btn-md btn-lightteal-o">$ 50</Button>
        </ButtonGroup>
        <FormDialogDonate stripePromise={props.stripePromise} />
      </ModalBody>
      <ModalFooter>
        <a className="close" href={urlPath}>
          {props.words.closeButton}
        </a>
      </ModalFooter>
    </Modal>
  );
}
