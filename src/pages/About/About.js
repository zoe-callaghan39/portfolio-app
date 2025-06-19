import React from "react";
import StarsBackground from "../../components/StarsBackground/StarsBackground";
import "./About.css";

/* PNG assets */
import iconCode from "../../assets/code.png";
import iconTeam from "../../assets/team.png";
import iconLightbulb from "../../assets/lightbulb.png";
import iconRocket from "../../assets/rocket.png";

/* data */
const stacks = [
  // core front-end
  "React",
  "JavaScript",
  "TypeScript",
  "Preact",
  "Next js",
  "ES6",
  "Pixi js",

  // back-end / full-stack
  "Node js",
  "Express",
  "GraphQL",

  // databases
  "MySQL",
  "SQLite",
  "PostgreSQL",

  // tooling & testing
  "Jest",
  "Prisma",
  "Docker",
  "GitHub Actions",

  // version control / hosting
  "Git",
];

const qualities = [
  {
    icon: iconCode,
    title: "Clean Code",
    text: "I write maintainable, scalable code that follows clear patterns & best practices",
  },
  {
    icon: iconTeam,
    title: "Team Player",
    text: "I work closely with designers, PDs, PMs, QAs & devs to build innovative features",
  },
  {
    icon: iconLightbulb,
    title: "Problem Solver",
    text: "I break big challenges into small steps & deliver simple, effective solutions",
  },
  {
    icon: iconRocket,
    title: "Continuous Growth",
    text: "I stay curious, learn new tech, & share knowledge so we all level-up together",
  },
];

const About = () => (
  <>
    <StarsBackground />

    <section className="wrapper">
      <h1>About Me</h1>

      {/* paragraphs + pills share card-matching horizontal padding */}
      <div className="pad-x">
        <p>
          I’m a software engineer specialising in front-end development with two
          years of professional experience building high-traffic,
          customer-facing web platforms at Flutter UK &amp; Ireland. My toolkit
          centres on React, JavaScript and TypeScript, and I love using
          data-driven experimentation and agile delivery to turn ideas into
          seamless, production-ready user experiences.
        </p>

        <p>
          Above all, I’m passionate about creating accessible, high-performance
          products and championing diversity in tech — whether by helping women
          pivot into tech careers, sharing knowledge to foster continuous
          learning, or advocating for inclusive design in every project I take
          on.
        </p>

        {/* skill pills */}
        <div className="stack">
          {stacks.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>

      {/* quality cards */}
      <div className="cards">
        {qualities.map(({ icon, title, text }) => (
          <article key={title}>
            <img
              src={icon}
              alt=""
              width={100}
              height={100}
              aria-hidden="true"
            />
            <div>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default About;
