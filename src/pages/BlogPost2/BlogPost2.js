import React from "react";
import { Link } from "react-router-dom";
import StarsBackground from "../../components/StarsBackground/StarsBackground";
import "./BlogPost2.css";

import rocket from "../../assets/rocket.png";
import arrowIcon from "../../assets/arrow.png";

const BlogPost2 = () => (
  <>
    <StarsBackground />

    <section className="bp2-wrapper">
      <div className="bp2-header">
        <div className="bp2-header-left">
          <h1>
            Levelling Up from
            <br className="bp2-mobile-break" />
            Junior to Mid-Level
          </h1>
          <img src={rocket} alt="Rocket" className="bp2-rocket" />
        </div>
        <Link to="/blog" className="bp2-back">
          <img src={arrowIcon} alt="Back to blog" />
        </Link>
      </div>

      <div className="bp2-text">
        <p>
          In just over a year as a Junior Software Engineer, I found my stride
          and earned a mid-level promotion—without any magic, just deliberate
          habits and a growth mindset.
        </p>
        <p>
          <strong>Key insights:</strong>
        </p>
        <ul>
          <li>
            <strong>Own your learning curve.</strong> Volunteer for features
            slightly outside your comfort zone.
          </li>
          <li>
            <strong>Seek continuous feedback.</strong> Pair-program weekly, ask
            for code reviews, and iterate quickly.
          </li>
          <li>
            <strong>Automate the mundane.</strong> Build scripts or tests to
            remove repetitive work.
          </li>
          <li>
            <strong>Document as you go.</strong> Use Notion/Confluence to cement
            your understanding and help others.
          </li>
          <li>
            <strong>Share your wins.</strong> Present mini-demos in team
            meetings to build visibility and trust.
          </li>
        </ul>
        <p>
          By intentionally stretching yourself, building habits around feedback,
          and sharing knowledge, the transition from “junior jitters” to
          “mid-level momentum” becomes entirely within your control.
        </p>
      </div>
    </section>
  </>
);

export default BlogPost2;
