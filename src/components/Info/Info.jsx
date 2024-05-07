import "../Info/Info.css";

export const Info = ({ email, number, location }) => {
  return (
    <>
      <div className="info-wrapper">
        <div className="info-container">
          <h1 className="info-title">contacts</h1>
          <ul className="info-list">
            <h3 className="info-h3">email</h3>
            <li className="info-p">{email}</li>
            <h3 className="info-h3">phone number</h3>
            <li className="info-p">{number}</li>
            <h3 className="info-h3">location</h3>
            <li className="info-p">{location}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
