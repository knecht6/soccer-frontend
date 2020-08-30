import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "./Custom/Modal";
import { Button, ButtonGroup } from "./Custom/Buttons";
import { FormDialogDonate } from "./stripe/FormDialogDonate";
const style = {
  backgroundColor: "#4BDA9B",
};
export default function Donations(props) {
  const [mount, setMount] = useState(10);
  const urlPath = "#";
  const handleMount = (mount) => {
    setMount(mount);
  };
  return (
    <Modal id="donations" style={props.style}>
      <ModalHeader>
        <h2 className="bg-gradient">{props.words.title}</h2>
      </ModalHeader>
      <ModalBody>
        <p>{props.words.legend}</p>
        <ButtonGroup>
          <Button
            type="btn-md btn-lightteal-o"
            style={mount === 5 ? style : {}}
            onClick={() => {
              handleMount(5);
            }}
          >
            $ 5
          </Button>
          <Button
            type="btn-md btn-lightteal-o"
            style={mount === 10 ? style : {}}
            onClick={() => {
              handleMount(10);
            }}
          >
            $ 10
          </Button>
          <Button
            type="btn-md btn-lightteal-o"
            style={mount === 20 ? style : {}}
            onClick={() => {
              handleMount(20);
            }}
          >
            $ 20
          </Button>
          <Button
            type="btn-md btn-lightteal-o"
            style={mount === 50 ? style : {}}
            onClick={() => {
              handleMount(50);
            }}
          >
            $ 50
          </Button>
        </ButtonGroup>
        <FormDialogDonate mount={mount} stripePromise={props.stripePromise} />
      </ModalBody>
      <ModalFooter>
        <a className="close" href={urlPath}>
          {props.words.closeButton}
        </a>
      </ModalFooter>
    </Modal>
  );
}
