import { Card } from "../components/Cards/Card.jsx";

const jobs = [
  "Ungledare | 2014-2016",
  "KK:s Bygg & Fastigheter | 2015-2017",
  "NCC Sverige | 2018",
  "Ica Lagret Konsult | 2010-2022",
  "Nordic Invasion | 2022",
  "F Lindström | 2022",
  "Ica Lagret Ica-anställd | 2023",
];

const skills = ["Javascript | OKEY", "HTML | GOOD", "CSS | GOOD"];

export const About = () => {
  return (
    <>
      <div className="card-wrapper">
        <Card
          title="Jobs"
          description={
            <ul style={{ listStyle: "none", padding: 0 }}>
              {" "}
              {jobs.map((jobs, index) => (
                <li key={index}> {jobs} </li>
              ))}{" "}
            </ul>
          }
        />

        <Card
          title="About Me"
          description="My name is Lam. I am student and a part time worker, currently studing at Folkuniversitetet. In my free time, I enojys to go for a walk and train aswell, and I'm passionate about traveling (Love to travel) "
        />

        <Card
          title="Skills"
          description={
            <ul style={{ listStyle: "none", padding: 0 }}>
              {" "}
              {skills.map((skills, index) => (
                <li key={index}> {skills} </li>
              ))}{" "}
            </ul>
          }
        />
      </div>
    </>
  );
};
