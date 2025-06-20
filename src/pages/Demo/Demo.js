import React from "react";
import { Link } from "react-router-dom";
import StarsBackground from "../../components/StarsBackground/StarsBackground";
import "./Demo.css";

import demoVideo from "../../assets/demo1.mp4";
import arrowIcon from "../../assets/arrow.png";

const Demo = () => (
  <>
    <StarsBackground />

    <section className="demo-wrapper">
      <h1>Recorded Demo</h1>
      <Link to="/portfolio" className="demo-back">
        <img src={arrowIcon} alt="Back to portfolio" />
      </Link>

      <div className="demo-pad">
        <p>
          I made this video demo for a company-wide audience. Our team’s new
          “Wonder Wheel” losing-screen is now fully configurable via Prismic
          CMS. This feature lets us run A/B experiments directly in Prismic—so
          we can learn which post-spin screens drive the most customer
          engagement. With around 200 k daily views of that losing screen, this
          gives us powerful insights and helps keep players on the Paddy Power
          Gaming journey.
        </p>
      </div>

      <div className="demo-container">
        <video controls src={demoVideo} className="demo-video" />
      </div>
    </section>
  </>
);

export default Demo;
