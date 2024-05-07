import { useNavigate } from "react-router-dom";
import "../Nav/Nav.css";
import img from "../Nav/cvbild.png";

export const Nav = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="navbar">
        <img className="img" src={img} alt="Picture of Lam" />
        <div className="info">
          <div className="name">Lam Ky</div>
          <div className="jobb">Feature Frontend Developer</div>
        </div>
      </section>
      <div className="nav__container">
        <button className="button home" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="button about" onClick={() => navigate("/About")}>
          About
        </button>
        <button className="button github" onClick={() => navigate("/Github")}>
          Github
        </button>
        <button className="button contact" onClick={() => navigate("/Contact")}>
          Contact
        </button>
        {/* <a className="Games" onClick={() => navigate("/Games")}>
      Games
    </a> 
    <a className="Gym" onClick={() => navigate("/Gym")}>
      Gym
    </a> */}
      </div>
    </>
  );
};
