import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { MyCheckoutForm } from "./MyCheckoutForm";
import "./App.css";

const stripePromise = loadStripe("pk_test_51HCwZgAFSxGkCVjcbDXmWGH6mDyNJt64TW0UfQoK3mt7ZixBb6rd3qKVksZnQUgIwZpHphyWylkU3AUWAskhHZbv00ByKNGw1K");

function App() {
  return (
    <Elements stripe={stripePromise}>
      <MyCheckoutForm />
    </Elements>
  );
}

export default App;