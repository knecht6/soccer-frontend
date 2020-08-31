import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "./Custom/Modal";
import { Button, ButtonGroup } from "./Custom/Buttons";
import { FormDialogDonate } from "./stripe/FormDialogDonate";

export default function Donations(props) {
  const [mount, setMount] = useState(5);
  const urlPath = "#";
  const quantityList = [5, 10, 20, 50];
  const handleMount = (mount) => {
    setMount(mount);
  };
  return (
    <Modal id="donations" style={props.style}>
      <ModalHeader>
        <h2 className="bg-gradient">{props.words.title}</h2>
      </ModalHeader>
      <ModalBody>
        {props.words.legend.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <ButtonGroup>
          {quantityList.map((quantity) => {
            return (
              <Button
                key={quantity}
                type={
                  "btn-md btn-lightteal-o " +
                  (mount === quantity ? "active" : "")
                }
                onClick={() => {
                  handleMount(quantity);
                }}
              >
                $ {quantity}
              </Button>
            );
          })}
        </ButtonGroup>
        <FormDialogDonate cant={mount} stripePromise={props.stripePromise} />
      </ModalBody>
      <ModalFooter>
        <a className="close" href={urlPath}>
          {props.words.closeButton}
        </a>
      </ModalFooter>
    </Modal>
  );
}
