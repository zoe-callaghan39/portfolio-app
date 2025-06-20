import React from "react";
import StarsBackground from "../../components/StarsBackground/StarsBackground";
import "./Blog.css";

import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";

const posts = [
  {
    title: "Career Switching",
    img: blog1,
    desc: `Two years ago I traded a headset for a code editor. Here’s my lowdown on how I moved from support calls to crafting pixel perfect interfaces— the transferable skills, resources & mindset shifts that powered the leap.`,
    link: "/blog/career-switching",
  },
  {
    title: "Levelling up",
    img: blog2,
    desc: `After earning a promotion a little over a year into my junior role, here’s my advice on levelling up from junior jitters to mid-level momentum—plus the habits, feedback loops & growth tactics that powered the climb.`,
    link: "/blog/levelling-up",
  },
];

const Blog = () => (
  <>
    <StarsBackground />

    <section className="blog-page">
      <h1 className="blog-title">Blog</h1>

      <div className="blog-grid">
        {posts.map(({ title, img, desc, link }) => (
          <article key={title} className="blog-card">
            <img src={img} alt={title} className="blog-screenshot" />

            <div className="blog-content">
              <h4 className="blog-card-title">{title}</h4>
              <p className="blog-desc">{desc}</p>
            </div>

            <div className="blog-footer">
              <a href={link} className="blog-btn">
                Read&nbsp;More
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default Blog;
