import React from "react";
import {Modal, ModalBody, ModalHeader, ModalFooter} from './Custom/Modal';
import {Button, ButtonGroup} from './Custom/Buttons';
import {FormDialogDonate} from './stripe/FormDialogDonate';
export default function Donations(props) {
    return <Modal id='donations' {...props}>
        <ModalHeader>
            <h2 className='bg-gradient'>Donate</h2>
        </ModalHeader>
        <ModalBody>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Sit amet massa vitae tortor condimentum lacinia quis vel.
            </p>
            <p>
                Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Arcu vitae elementum curabitur
                vitae nunc sed. Pellentesque habitant morbi tristique senectus. Viverra aliquet eget sit amet tellus.
            </p>
            <ButtonGroup>
                <Button type='btn-md btn-lightteal-o'>
                    $ 5
                </Button>
                <Button type='btn-md btn-lightteal-o'>
                    $ 10
                </Button>
                <Button type='btn-md btn-lightteal-o'>
                    $ 20
                </Button>
                <Button type='btn-md btn-lightteal-o'>
                    $ 50
                </Button>
            </ButtonGroup>
            <FormDialogDonate stripePromise={props.stripePromise}/>
        </ModalBody>
        <ModalFooter>

        </ModalFooter>
    </Modal>
}
