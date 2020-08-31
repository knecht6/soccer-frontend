import React from "react";
import { StripeComponent } from "../stripe/StripeComponent";
import "../../assets/css/stripe.css";

function FormDialogDonate({ cant, stripePromise }) {
  return (
    <div className="join-us-today">
      <h2 className="t-center">
        <span className="gradient">Join us today.</span>
      </h2>
      <StripeComponent cant={cant} stripePromise={stripePromise} />
    </div>
  );
}

export { FormDialogDonate };
