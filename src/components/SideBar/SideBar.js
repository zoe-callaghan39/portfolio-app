import React from "react";
import "./SideBar.css";
import avatar from "../../assets/avatar.gif";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/linkedin.png";
import tiktokIcon from "../../assets/ticktock.png";

const SideBar = () => (
  <aside className="sidebar">
    <div className="avatar-box">
      <img src={avatar} alt="Zoe Callaghan avatar" />
    </div>

    <h2>Zoe Callaghan</h2>
    <p className="role">Software Engineer</p>
    <p className="tag">Code First Girls&nbsp;Ambassador</p>

    <div className="details">
      <div>
        <span>EMAIL</span>
        <a href="mailto:zoe@gmail.com">zoe@gmail.com</a>
      </div>
      <div>
        <span>PHONE</span>
        <a href="tel:+447551768063">+44&nbsp;7551&nbsp;768&nbsp;063</a>
      </div>
      <div>
        <span>LOCATION</span>
        Leeds, UK
      </div>
    </div>

    <div className="socials">
      <a
        href="https://github.com/yourUser"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a
        href="https://www.instagram.com/yourUser"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagramIcon} alt="Instagram" />
      </a>
      <a
        href="https://www.linkedin.com/in/yourUser"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
      <a
        href="https://www.tiktok.com/@yourUser"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={tiktokIcon} alt="TikTok" />
      </a>
    </div>
  </aside>
);

export default SideBar;
