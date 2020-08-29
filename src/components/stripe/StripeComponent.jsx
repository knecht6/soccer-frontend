import React from "react";
import { useMediaQuery } from "react-responsive";
//import { CheckoutForm } from './CheckoutForm';
import {
  Elements,
  CardElement,
  ElementsConsumer,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

//const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
class StripeComponent extends React.Component {
  render() {
    console.log("stripe promise: ", this.props.stripePromise);
    return (
      <Elements stripe={this.props.stripePromise} options={ELEMENTS_OPTIONS}>
        <InjectedCheckoutForm cant={this.props.cant} />
      </Elements>
    );
  }
}

const InjectedCheckoutForm = ({ cant }) => (
  <ElementsConsumer>
    {({ stripe, elements }) => (
      <CheckoutForm cant={cant} stripe={stripe} elements={elements} />
    )}
  </ElementsConsumer>
);

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
    },
  ],
};

const CardField = ({ onChange }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 416px)",
  });
  if (isDesktopOrLaptop) {
    return (
      <div className="FormRow">
        <CardElement options={CARD_OPTIONS} onChange={onChange} />
      </div>
    );
  } else {
    return (
      <div className="FormRow">
        <label>
          Card number
          <CardNumberElement options={CARD_OPTIONS} />
        </label>
        <label>
          Expiration date
          <CardExpiryElement options={CARD_OPTIONS} />
        </label>
        <label>
          CVC
          <CardCvcElement options={CARD_OPTIONS} />
        </label>
      </div>
    );
  }
};

const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) => (
  <div className="FormRow">
    <label htmlFor={id} className="FormRowLabel">
      {label}
    </label>
    <input
      className="FormRowInput"
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </div>
);

const SubmitButton = ({ processing, error, children, disabled }) => (
  <button
    className={`stripe-button SubmitButton ${
      error ? "SubmitButton--error" : ""
    }`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? <div>Loading...</div> : children}
  </button>
);

const ErrorMessage = ({ children }) => (
  <div className="ErrorMessage" role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#FFF"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6772e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    {children}
  </div>
);

const DEFAULT_STATE = {
  error: null,
  cardComplete: false,
  processing: false,
  paymentMethod: null,
  email: "",
  currency: "usd",
  result: null,
};
class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { stripe, elements } = this.props;
    const { email, error, cardComplete } = this.state;

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    if (error) {
      elements.getElement("card").focus();
      return;
    }
    if (cardComplete) {
      this.setState({ processing: true });
    }
    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        email,
      },
    });

    if (payload.error) {
      this.setState({ error: payload.error });
    } else {
      var data = {
        amount: this.props.cant * 100,
        paymentMethodId: payload.paymentMethod.id,
        currency: this.state.currency,
        sitename: "SOCCER",
      };
      fetch(process.env.REACT_APP_STRIPE_API_URL + "/pay", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          this.setState({ processing: false });
          if (res.status === "succeeded") {
            this.setState({
              thanks:
                "Thank you very much for your donation. We really appreciate your contribution and will be in touch as we continue to update the tool.",
            });
          } else {
            this.setState({
              result: res,
            });
          }
        });
    }
  };

  reset = () => {
    this.setState(DEFAULT_STATE);
  };

  render() {
    const { error, processing, email } = this.state;
    const { stripe } = this.props;
    if (this.state.thanks) {
      return <SuccessAlerts>{this.state.thanks}</SuccessAlerts>;
    } else if (this.state.result) {
      if (this.state.result.error) {
        return <ErrorAlerts>{this.state.result.error}</ErrorAlerts>;
      } else {
        return (
          <WarningAlerts>
            Requires Source Action
            {this.state.result.clientSecret}
          </WarningAlerts>
        );
      }
    } else {
      return (
        <form
          className="Form"
          onSubmit={this.handleSubmit}
          style={{ marginBottom: "15px" }}
        >
          <fieldset className="FormGroup">
            <Field
              label="Email"
              id="email"
              type="email"
              placeholder="janedoe@gmail.com"
              required
              value={email}
              onChange={(event) => {
                this.setState({ email: event.target.value });
              }}
            />
          </fieldset>
          <fieldset className="FormGroup">
            <CardField
              onChange={(event) => {
                this.setState({
                  error: event.error,
                  cardComplete: event.complete,
                });
              }}
            />
          </fieldset>
          <div style={{ textAlign: "center" }}>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
            <SubmitButton
              processing={processing}
              error={error}
              disabled={!stripe}
            >
              Donate ${this.props.cant}
            </SubmitButton>
          </div>
        </form>
      );
    }
  }
}
const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    invalid: {
      iconColor: "#FFC7EE",
      color: "#FFC7EE",
    },
  },
};

function SuccessAlerts({ children }) {
  return (
    <div>
      <div severity="success">
        <div>Success</div>
        {children}
      </div>
    </div>
  );
}

function WarningAlerts({ children }) {
  return (
    <div>
      <div severity="warning">
        <span>Warning</span>
        {children}
      </div>
    </div>
  );
}

function ErrorAlerts({ children }) {
  return (
    <div>
      <div>
        <span>Error</span>
        {children}
      </div>
    </div>
  );
}

export { StripeComponent };
