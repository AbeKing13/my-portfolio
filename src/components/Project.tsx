import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import "../assets/styles/Project.scss";

gsap.registerPlugin(ScrollTrigger);

function Project() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let playTimeout: NodeJS.Timeout;

    if (videoRef.current) {
      gsap.to(videoRef.current, {
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%",
          end: "bottom top",
          onEnter: () => {
            clearTimeout(playTimeout);
            playTimeout = setTimeout(() => {
              videoRef.current?.play();
              setIsPlaying(true);
            }, 100);
          },
          onLeave: () => {
            clearTimeout(playTimeout);
            videoRef.current?.pause();
            setIsPlaying(false);
          },
          onEnterBack: () => {
            clearTimeout(playTimeout);
            playTimeout = setTimeout(() => {
              videoRef.current?.play();
              setIsPlaying(true);
            }, 100);
          },
          onLeaveBack: () => {
            clearTimeout(playTimeout);
            videoRef.current?.pause();
            setIsPlaying(false);
          },
        },
      });
    }

    return () => {
      clearTimeout(playTimeout);
    };
  });

  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <img
            src={require("../assets/images/projects/digiclipse.png")}
            className="zoom"
            alt=""
            width="80%"
            style={{ display: "flex", justifyContent: "center" }}
          />
          <div className="project-title">
            <h2>DigiClipse</h2>
          </div>
          <p>
            Ensure the availability of parts by automating the extraction and
            verification of part numbers through Excel files and the Digikey
            API, while managing human errors using <b>Pandas</b>, <b>Python</b>,{" "}
            <b>Docker</b> and <b>APIs</b>.
          </p>
        </div>
        <div className="project">
          <video
            ref={videoRef}
            src={require("../assets/images/projects/arcade.mp4")}
            className="zoom"
            poster={require("../assets/images/projects/arcade_thumbnail.png")}
            loop
            muted
            playsInline
          />
          {!isPlaying && (
            <img
              src={require("../assets/images/projects/arcade_thumbnail.png")}
              className="thumbnail"
              alt="Arcade thumbnail"
            />
          )}
          <div className="project-title">
            <h2>Arcade</h2>
          </div>
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
          <img
            src={require("../assets/images/projects/aspire.png")}
            className="zoom"
            alt="thumbnail"
            width="100%"
            style={{ display: "flex", justifyContent: "center" }}
          />
          <div className="project-title">
            <h2>Aspire</h2>
          </div>
          <p>
            Develop a <b>voice assistant</b> named <b>Aspire</b> (still under
            development) for <b>computer control</b>. It enables users to{" "}
            <b>open applications</b>, <b>navigate the web</b>, and ask questions
            to <b>ChatGPT</b>. The project leverages <b>OpenAI GPT-3</b> and{" "}
            <b>Python</b>, utilizes <b>APIs</b> for integration, and
            incorporates <b>audio file management</b>.
          </p>
        </div>
        <div className="project">
          <img
            src={require("../assets/images/projects/voice_translator.png")}
            className="zoom"
            alt="thumbnail"
            width="100%"
            style={{ display: "flex", justifyContent: "center" }}
          />
          <div className="project-title">
            <h2>Voice Translator</h2>
          </div>
          <p>
            <p>
              Developed a <b>Python-powered</b> voice translator that converts{" "}
              <b>speech to text</b> using <b>OpenAI Whisper</b> and <b>NumPy</b>{" "}
              for processing, translates the extracted text into Japanese via an{" "}
              <b>external API</b>, and synthesizes the translated text back into
              speech using advanced speech processing techniques.
            </p>
          </p>
        </div>
        <div className="project">
          <img
            src={require("../assets/images/projects/sga.png")}
            className="zoom"
            alt="thumbnail"
            width="100%"
            style={{ display: "flex", justifyContent: "center" }}
          />
          <div className="project-title">
            <h2>Class Management System</h2>
          </div>
          <p>
            <p>
              Developed a <b>Class Management System</b> for the <b>LOG210</b>{" "}
              course, engineered to <b>streamline</b> the management of{" "}
              <b>courses</b>,<b>students</b>, and other{" "}
              <b>academic activities</b>. Built with `<b>TypeScript</b>,{" "}
              <b>Pug</b> and <b>CSS</b>.
            </p>
          </p>
        </div>
        <div className="project">
          <img
            src={require("../assets/images/projects/portfolio.png")}
            className="zoom"
            alt="thumbnail"
            width="100%"
            style={{ display: "flex", justifyContent: "center" }}
          />
          <div className="project-title">
            <h2>Personal Website</h2>
          </div>
          <p>
            Developed a <b>personal website</b> to showcase projects, skills,
            and experiences using <b>React</b> and <b>Node.js</b>. Built with{" "}
            <b>TypeScript</b> on <b>HTML5</b> and styled with <b>SASS</b> to
            ensure a robust, responsive, and interactive design.
          </p>
        </div>
        <div className="project">
          <img
            src={require("../assets/images/projects/database.png")}
            className="zoom"
            alt="thumbnail"
            width="100%"
            style={{ display: "flex", justifyContent: "center" }}
          />
          <div className="project-title">
            <h2>Web Database Interface</h2>
          </div>
          <p>
            <p>
              Set up a <b>web database interface</b> on a <b>Raspberry Pi</b>{" "}
              server with a <b>web interface</b> that simplifies{" "}
              <b>displaying</b>, <b>entering</b>, and <b>manipulating data</b>.
              Leveraging <b>web development</b> best practices, the project
              integrates <b>SQL</b> capabilities with a user-friendly{" "}
              <b>user interface</b> and utilizes <b>MariaDB</b> for robust
              database management.
            </p>
          </p>
        </div>
        <div className="project more-coming-soon">
          <h2>More coming soon...</h2>
        </div>
      </div>
    </div>
  );
}

export default Project;
