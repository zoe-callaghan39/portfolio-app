import React from "react";
import StarsBackground from "../../components/StarsBackground/StarsBackground";
import "./Portfolio.css";
import leaderboardImg from "../../assets/PortfolioLeaderboard.png";
import weatherImg from "../../assets/PortfolioWeather.png";
import portfolioProjectImg from "../../assets/PortfolioZoe.png";
import newsletterImg from "../../assets/PortfolioNewsletter.png";
import demoImg from "../../assets/PortfolioDemo.png";
import comingSoonImg from "../../assets/PortfolioComingSoon.gif";
import codeIcon from "../../assets/code.png";

const projects = [
  {
    title: "Team Leaderboard",
    img: leaderboardImg,
    desc: `Built a leaderboard app for my team that tracks trivia points, auto-updates monthly standings, and archives past and all-time leaderboard rankings.`,
    skills: [
      "React",
      "CSS Modules",
      "Axios",
      "Node.js",
      "Express",
      "REST API",
      "PostgreSQL",
      "Render",
    ],
    codeLink: "https://github.com/zoe-callaghan39/leaderboard-app",
    liveLink: "https://www.avalanche-leaderboard.com/",
  },
  {
    title: "Weather App",
    img: weatherImg,
    desc: `Built a weather app that displays current conditions and local time for any city worldwide, storing favorite locations in localStorage.`,
    skills: [
      "React",
      "React Router",
      "CSS",
      "LocalStorage",
      "Pixi JS",
      "Custom Hooks",
      "GitHub Pages",
    ],
    codeLink: "https://github.com/zoe-callaghan39/weather-app",
    liveLink: "https://zoe-callaghan39.github.io/weather-app/",
  },
  {
    title: "Portfolio Project",
    img: portfolioProjectImg,
    desc: `My portfolio website—you're on it now! It gives an overview of me, my skills, and my work.`,
    skills: [
      "React",
      "Render",
      "CSS",
      "UI Design",
      "Accessibility",
      "Git",
      "Responsive Layout",
    ],
    codeLink: "https://github.com/zoe-callaghan39/portfolio-app",
  },
  {
    title: "Newsletter Proposal",
    img: newsletterImg,
    desc: `Proposed a Tech-Talk newsletter with an Education Hub & interactive quizzes to share knowledge & make learning tech fun.`,
    skills: [
      "Content Strategy",
      "UX Writing",
      "Photoshop",
      "Graphic Design",
      "Audience Segmentation",
    ],
    liveLink: "/newsletter-proposal",
  },
  {
    title: "Recorded Demo",
    img: demoImg,
    desc: `A recorded demo of our team's feature: integrating the Paddy Power "Wonder Wheel" losing screen into Prismic CMS.`,
    skills: ["Video Production", "Prismic CMS", "Collaboration"],
    liveLink: "/demo-video",
  },
  {
    title: "Coming Soon",
    img: comingSoonImg,
    desc: `I’m building a football-prediction competition site with full front- and back-end. Stay tuned!`,
    skills: [
      "Next.js",
      "Node.js",
      "Prisma",
      "Authentication",
      "Email Verification",
    ],
  },
];

const Portfolio = () => (
  <>
    <StarsBackground />

    <section className="pf-page">
      <h1 className="pf-title">Portfolio</h1>

      <div className="pf-grid">
        {projects.map(({ title, img, desc, skills, codeLink, liveLink }) => (
          <article key={title} className="pf-card">
            <img
              src={img}
              alt={title}
              height={100}
              width={100}
              className="pf-screenshot"
            />

            {skills && (
              <div className="pf-skills">
                {skills.map((skill) => (
                  <span key={skill} className="pf-pill">
                    {skill}
                  </span>
                ))}
              </div>
            )}

            <div className="pf-content">
              <h4 className="pf-card-title">{title}</h4>
              <p className="pf-desc">{desc}</p>
              <div className="pf-footer">
                {codeLink && (
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pf-btn pf-btn-code"
                  >
                    <img src={codeIcon} alt="Code" />
                  </a>
                )}
                {liveLink && (
                  <a
                    href={liveLink}
                    className="pf-btn pf-btn-live"
                    target={liveLink.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    View&nbsp;Live
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default Portfolio;
