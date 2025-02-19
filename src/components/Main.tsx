import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import avatar from "../assets/images/home/avatar_circle.jpeg";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/amir-hammar"
              target="_blank"
              rel="noreferrer noopener"
              title="Visit my GitHub profile"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/amirhammar/"
              target="_blank"
              rel="noreferrer noopener"
              title="Visit my LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Amir Hammar</h1>
          <div className="student-info">
            <p>
              Software Engineering Student
              <a
                href="https://www.etsmtl.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../assets/images/home/ets.png")}
                  alt="ÉTS Logo"
                  className="ets-logo"
                />
              </a>
            </p>
          </div>
          <div className="mobile_social_icons">
            <a
              href="https://github.com/amir-hammar"
              target="_blank"
              rel="noreferrer noopener"
              title="Visit my GitHub profile"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/amirhammar/"
              target="_blank"
              rel="noreferrer noopener"
              title="Visit my LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
