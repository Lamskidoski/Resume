import { Info } from "../components/Info/Info.jsx";
import "../components/Info/Info.css";
import ContactForm from "../components/ContactForm/ContactFrom.jsx";

export const Contact = () => {
  return (
    <>
      <ContactForm />
      <Info email="lam@gmail.com" number="+46 258 538 392" location="Sweden" />
    </>
  );
};
