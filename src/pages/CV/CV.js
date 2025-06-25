import React from "react";
import "./CV.css";
import bookIcon from "../../assets/book.png";
import cvFile from "../../assets/zoe-cv.pdf";

const Section = ({ title, children }) => (
  <div className="entry">
    <div className="icon-box">
      <img src={bookIcon} alt="" />
    </div>
    <div className="entry-content">
      <h2>{title}</h2>
      {children}
    </div>
  </div>
);

const CV = () => (
  <section className="cv-wrapper">
    <div className="cv-header">
      <h1>My CV</h1>

      <a href={cvFile} download className="download-btn">
        Download&nbsp;CV
      </a>
    </div>

    <div className="timeline">
      <Section title="Work Experience">
        <h3 className="marker">Flutter UK &amp; Ireland</h3>
        <p className="role">
          Software Engineer <span>(Nov 2024 – Present)</span>
        </p>
        <p className="role">
          Associate Software Engineer <span>(Jul 2023 – Nov 2024)</span>
        </p>
        <ul>
          <li>
            Engineer and maintain a large front-end monorepo that powers Sky
            Betting &amp; Gaming, Paddy Power and Betfair, serving millions of
            daily users. Primary stack: JavaScript, React, Preact, Redux,
            TypeScript, Next.js, Node.js, CSS Modules, Jest.
          </li>
          <li>
            Deliver data-driven A/B experiments; successful variants become
            permanent features and lift customer engagement by at least 18.3 %,
            boosting retention across all brands.
          </li>
          <li>
            Migrate existing components and implement new UI features via
            Prismic CMS, enabling content teams to update customer-facing
            content in minutes rather than weeks and increasing engagement.
          </li>
          <li>
            Volunteer as a manual tester for the multi-billion-pound Sky Bet
            migration to Flutter’s shared tech stack; validate desktop and
            mobile journeys to ensure a smooth, defect-free transition for
            millions of users.
          </li>
          <li>
            Work collaboratively with product, UX and data teams in discovery
            workshops; produce technical proofs of concept and implementation
            strategies that optimise customer journeys.
          </li>
          <li>
            Champion quality by expanding unit and integration test coverage;
            contribute to CI/CD pipelines (GitHub, GitLab, Bitbucket, Jenkins);
            share testing best practices and enhance Java automation tests
            (limited scope).
          </li>
          <li>
            Facilitate agile ceremonies, regularly deliver live demos to
            management and record feature demos for company-wide audiences.
          </li>
          <li>
            Author comprehensive Confluence documentation—including a squad
            onboarding guide, experiment tracker and knowledge-sharing
            articles—adopted by new hires and cross-team collaborators.
          </li>
          <li>
            Introduced an experiment-launch test workflow that coordinates QA,
            product and content teams, accelerating validation and reducing
            post-release defects.
          </li>
          <li>
            Present bi-weekly engineer chat sessions on technical topics and
            personal projects, fostering knowledge sharing and continuous
            learning.
          </li>
        </ul>

        <h3 className="marker">Sky Betting &amp; Gaming</h3>
        <p className="role">
          Customer Experience Advisor <span>(Jul 2021 – Jul 2023)</span>
        </p>
        <ul>
          <li>
            Resolved up to 150 multichannel queries per day with a 95 % quality
            score, refining clear communication and empathy that inform my
            user-centric engineering approach.
          </li>
          <li>
            Escalated recurring pain points to product &amp; engineering,
            turning frontline insights into platform enhancements that reduced
            repeat contacts and streamlined customer journeys.
          </li>
          <li>
            Collaborated with multidisciplinary teams on complex cases and
            authored weekly insight reports, strengthening cross-functional
            teamwork and continuous improvement.
          </li>
          <li>
            Provided specialised support to vulnerable customers and championed
            safer-gambling practices, ensuring responsible gaming standards were
            upheld in every interaction.
          </li>
        </ul>

        <h3 className="marker">Earlier Roles</h3>
        <p className="role">
          Sales Consultant | Luvyababes Fancy Dress <span>(2017 – 2021)</span>
        </p>
        <p className="role">
          Waitress &amp; Bar Staff | Lamberts Restaurant{" "}
          <span>(2016 – 2017)</span>
        </p>
        <p className="role">
          Waitress &amp; Bar Staff | Stick or Twist <span>(2014 – 2016)</span>
        </p>
        <ul>
          <li>
            Built strong interpersonal and communication skills through
            fast-paced customer-facing roles, ensuring clarity and empathy in
            every interaction—skills now central to delivering user-focused
            digital experiences.
          </li>
          <li>
            Developed consultative sales and upselling techniques, now
            transferable to stakeholder collaboration and presenting technical
            ideas effectively.
          </li>
          <li>
            Honed structured problem solving and multitasking under pressure,
            key to working in agile environments and delivering clean, efficient
            UI code.
          </li>
          <li>
            Learned the value of inclusive, team-driven environments—now
            mirrored in collaborative cross-functional squads delivering
            customer-first digital journeys.
          </li>
        </ul>
      </Section>

      <Section title="Leadership &amp; Volunteering">
        <h3 className="marker">Code First Girls Ambassador</h3>
        <p className="role">Jan 2025 – Current</p>
        <ul>
          <li>
            Representing CFG at client events, conferences and online workshops;
            offering mentorship to women transitioning into tech, creating
            community content, and actively advocating for women and non-binary
            talent in tech—expanding reach and driving inclusive change within
            the industry.
          </li>
        </ul>
      </Section>

      <Section title="Education">
        <h3 className="marker">
          Code First Girls Degree in Full-Stack Software Engineering (Merit)
        </h3>
        <p className="role">
          <span>Feb 2023 – Jul 2023</span>
        </p>
        <p className="small">
          What I studied: React, HTML/CSS/JavaScript, TypeScript, Python, SQL,
          Linux, Git.
        </p>

        <h3 className="marker">
          Web Development Kick Starter, Code First Girls
        </h3>
        <p className="role">
          <span>Oct 2022 – Dec 2022</span>
        </p>
        <p className="small">
          What I studied: Foundations in HTML, CSS, JavaScript.
        </p>

        <h3 className="marker">
          BSc (Hons) Architectural Technology, Leeds Beckett University
        </h3>
        <p className="role">
          <span>2017 – 2021</span>
        </p>

        <h3 className="marker">James Calvert Spence College</h3>
        <p className="role">
          <span>2009 – 2014</span>
        </p>
        <p className="small">
          A-Levels: Fine Art (B) | Product Design (C) | English Language &amp;
          Literature (D).
          <br />
          GCSEs: Grades A*–C in 11 subjects (including Maths, English &amp;
          Science).
        </p>
      </Section>
    </div>
  </section>
);

export default CV;
