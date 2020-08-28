import React from "react";

import { NavLink } from "react-router-dom";
import {StripeComponent} from '../stripe/StripeComponent'
import '../../assets/css/stripe.css';


function FormDialogDonate({ cant, stripePromise }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        className="play-button"
        style={{ position: "initial" }}
        onClick={handleClickOpen}
      >
        <h1>
          <span className="blink-3">D</span>
          <span className="blink-4">o</span>
          <span>n</span>
          <span className="blink-4">a</span>
          <span>t</span>
          <span className="blink-4">e</span>
        </h1>
      </div>
      <div className="row" style={{ marginTop: '1.3em' }}>
        <NavLink
          to="/"
          style={{ textDecoration: "none", color: "white" }}
          className="play-again-button"
        >
          <h1>
            <span className="blink-2">P</span>lay{" "}
            <span className="first">A</span>gain
          </h1>
        </NavLink>
      </div>        
          <h3>
            <label>Join us today.</label>
          </h3>
          <StripeComponent cant={cant} stripePromise={stripePromise}/>
    </div>
  );
}




export {FormDialogDonate};