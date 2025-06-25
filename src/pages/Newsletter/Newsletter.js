import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Newsletter.css";

import newsletter1 from "../../assets/Newsletter1.png";
import newsletter2 from "../../assets/Newsletter2.png";
import newsletter3 from "../../assets/Newsletter5.png";
import newsletter4 from "../../assets/Newsletter4.png";
import arrowIcon from "../../assets/arrow.png";

const allNewsletterImages = [
  newsletter1,
  newsletter2,
  newsletter3,
  newsletter4,
];

allNewsletterImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

const NewsletterImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="newsletter-screenshot-wrapper">
      <img
        src={src}
        alt={alt}
        className={`newsletter-screenshot ${loaded ? "loaded" : ""}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

const Newsletter = () => (
  <section className="newsletter-wrapper">
    <h1>Newsletter Proposal</h1>
    <Link to="/portfolio" className="newsletter-back">
      <img src={arrowIcon} alt="Back to portfolio" />
    </Link>

    <div className="newsletter-pad">
      <p>
        I proposed a weekly Tech-Talk newsletter summarising diverse topics
        across the tech landscape. Each issue is supported by a linked Knowledge
        Hub on Confluence, where team members can dive deeper, add resources,
        and collaborate. To boost engagement and reinforce learning, I also
        designed interactive quizzes at the end of each issue, helping readers
        test their knowledge and uncover skill gaps.
      </p>
    </div>

    <div className="newsletter-images">
      <NewsletterImage src={newsletter1} alt="Newsletter mockup 1" />
      <NewsletterImage src={newsletter2} alt="Newsletter mockup 2" />
      <NewsletterImage src={newsletter3} alt="Newsletter mockup 3" />
      <NewsletterImage src={newsletter4} alt="Newsletter mockup 4" />
    </div>
  </section>
);

export default Newsletter;
