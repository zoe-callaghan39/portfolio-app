import React from "react";
import { Link } from "react-router-dom";
import StarsBackground from "../../components/StarsBackground/StarsBackground";
import "./BlogPost1.css";

import demoVideo from "../../assets/blogpost1.mp4";
import arrowIcon from "../../assets/arrow.png";

const BlogPost1 = () => (
  <>
    <StarsBackground />

    <section className="bp1-wrapper">
      <h1>
        Career Switching
        <br className="bp1-mobile-break" />
        Journey
      </h1>
      <Link to="/blog" className="bp1-back">
        <img src={arrowIcon} alt="Back to blog" />
      </Link>

      <div className="bp1-body">
        <div className="bp1-text">
          <p>
            Back in customer service, I never imagined trading headsets for a
            code editor— until I discovered Code First Girls. I’d been told tech
            courses cost thousands and required full-time commitment. Then I
            found a part-time web development kickstarter, tried it, and
            absolutely loved coding.
          </p>
          <p>
            That led me to enroll in the Code First Girls degree: 100% free,
            evenings-only, and by the end I’d earned a job offer as a junior
            engineer—it felt too good to be true. The pace was intense, but
            breaking each subject into small, digestible chunks let me learn at
            my own speed.
          </p>
          <p>
            <strong>Tips for your own switch:</strong>
          </p>
          <ul>
            <li>
              Start with a free or low-cost online mini-course to test the
              waters.
            </li>
            <li>
              Join supportive communities (Slack/Discord) to ask questions in
              real-time.
            </li>
            <li>Pair-program with a buddy to stay accountable.</li>
            <li>
              Build small side projects—nothing cements learning like shipping
              code.
            </li>
            <li>
              Use document-driven tools (Notion, Confluence) to track your
              progress.
            </li>
          </ul>
        </div>

        <div className="bp1-video">
          <video
            controls
            autoPlay
            muted
            playsInline
            src={demoVideo}
            className="bp1-video-el"
          />
        </div>
      </div>
    </section>
  </>
);

export default BlogPost1;
