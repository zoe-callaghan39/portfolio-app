import React, { useState } from "react";
import "./SideBar.css";
import avatar from "../../assets/avatar.gif";
import chevron from "../../assets/chevron.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/linkedin.png";
import tiktokIcon from "../../assets/ticktock.png";
import emailIcon from "../../assets/email.png";
import phoneIcon from "../../assets/phone.png";
import locationIcon from "../../assets/location.png";

const SideBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [avatarLoaded, setAvatarLoaded] = useState(false);

  return (
    <aside className={`sidebar ${expanded ? "sidebar--expanded" : ""}`}>
      <div className="sidebar-header">
        <div className="avatar-box">
          <img
            src={avatar}
            alt="Zoe Callaghan avatar"
            onLoad={() => setAvatarLoaded(true)}
            className={`avatar-img ${avatarLoaded ? "avatar-img--ready" : ""}`} // NEW
            width="105"
            height="105"
          />
        </div>

        <div className="titles">
          <h2>Zoe Callaghan</h2>
          <p className="role-x">Software Engineer</p>
          <p className="tag-x">Code First Girls Ambassador</p>
        </div>

        <button
          className="chevron-btn"
          onClick={() => setExpanded((prev) => !prev)}
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          <img src={chevron} className="chevron" alt="" />
        </button>
      </div>

      <div className="details">
        <div className="detail-item">
          <div className="icon-box-x">
            <img src={emailIcon} alt="Email" />
          </div>
          <div>
            <span>EMAIL:</span> <a href="mailto:zoe@gmail.com">zoe@gmail.com</a>
          </div>
        </div>

        <div className="detail-item">
          <div className="icon-box-x">
            <img src={phoneIcon} alt="Phone" />
          </div>
          <div>
            <span>PHONE:</span> <a href="tel:+447551768063">+44 7551 768 063</a>
          </div>
        </div>

        <div className="detail-item">
          <div className="icon-box-x">
            <img src={locationIcon} alt="Location" />
          </div>
          <div>
            <span>LOCATION:</span> <span>Leeds, UK</span>
          </div>
        </div>
      </div>

      <div className="socials">
        <a
          href="https://github.com/zoe-callaghan39"
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
          href="https://www.linkedin.com/in/zoe-callaghan/"
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
};

export default SideBar;
