import React from "react";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a>
            <img
              src={require("../assets/images/projects/digiclipse.png")}
              className="zoom"
              alt=""
              width="70%"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </a>
          <a>
            <h2>DigiClipse</h2>
          </a>
          <p>
            Ensure the availability of parts by automating the extraction and
            verification of part numbers through Excel files and the Digikey
            API, while managing human errors using <b>Pandas</b>, <b>Python</b>,{" "}
            <b>Docker</b> and <b>APIs</b>.
          </p>
        </div>
        <div className="project">
          <a>
            <img
              src={require("../assets/images/projects/arcade.png")}
              className="zoom"
              alt="thumbnail"
              width="50%"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </a>
          <a>
            <h2>Arcade</h2>
          </a>
          <p>
            Built an <b>arcade game</b> from scratch, designing both the{" "}
            <b>hardware</b> and <b>software</b>. Programmed <b>gameplay</b>,{" "}
            <b>UI</b>, <b>menus</b>, and <b>settings</b> while optimizing
            performance for a smooth experience. Applied skills in{" "}
            <b>game programming</b>, <b>Arduino</b>, <b>UI design</b>,{" "}
            <b>controller integration</b>, and <b>electronics</b>.
          </p>
        </div>
        <div className="project">
          <a>
            <img
              src={require("../assets/images/projects/website.png")}
              className="zoom"
              alt="thumbnail"
              width="100%"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </a>
          <a>
            <h2>Personal Website</h2>
          </a>
          <p>
            Developed a <b>personal website</b> to showcase projects, skills,
            and experiences. Implemented <b>React</b>, <b>HTML</b>, <b>CSS</b>,
            and <b>JavaScript</b> to create a responsive and interactive
            website.
          </p>
        </div>
        <div className="project">
          <a>
            <img
              src={require("../assets/images/projects/voice_translator.png")}
              className="zoom"
              alt="thumbnail"
              width="70%"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </a>
          <a>
            <h2>Voice Translator</h2>
          </a>
          <p>
            <p>
              Developed a <b>Python-powered</b> voice translator that
              converts <b>speech to text</b> using <b>OpenAI Whisper</b> and{" "}
              <b>NumPy</b> for processing, translates the extracted text into{" "}
              Japanese via an <b>external API</b>, and synthesizes the
              translated text back into speech using{" "}
              advanced speech processing techniques.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
