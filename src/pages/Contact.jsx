import { Info } from "../components/Info/Info.jsx";
import "../components/Info/Info.css";
import ContactForm from "../components/ContactForm/ContactFrom.jsx";

export const Contact = () => {
  return (
    <>
      <section className="contact-wrapper">
        <div className="contact-info">
          <Info
            email="Lam@gmail.com"
            number="+46 258 538 392"
            location="Sweden"
          />
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
      </section>
    </>
  );
};
