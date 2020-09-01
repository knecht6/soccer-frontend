import React from "react";
import { StripeComponent } from "../stripe/StripeComponent";
import "../../assets/css/stripe.css";

function FormDialogDonate({ cant, stripePromise, title, formDialogs }) {
  return (
    <div className="join-us-today">
      <h2 className="t-center">
        <span className="gradient">{formDialogs.title}</span>
      </h2>
      <StripeComponent
        cant={cant}
        stripePromise={stripePromise}
        formDialogs={formDialogs}
      />
    </div>
  );
}

export { FormDialogDonate };
