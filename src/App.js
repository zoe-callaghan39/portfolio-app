import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import CV from "./pages/CV/CV";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Newsletter from "./pages/Newsletter/Newsletter";
import Demo from "./pages/Demo/Demo";
import BlogPost1 from "./pages/BlogPost1/BlogPost1";
import BlogPost2 from "./pages/BlogPost2/BlogPost2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* default route = About page */}
          <Route index element={<About />} />
          <Route path="cv" element={<CV />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="newsletter-proposal" element={<Newsletter />} />
          <Route path="*" element={<About />} />
          <Route path="demo-video" element={<Demo />} />
          <Route path="blog/career-switching" element={<BlogPost1 />} />
          <Route path="blog/levelling-up" element={<BlogPost2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
