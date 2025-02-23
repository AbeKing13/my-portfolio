import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import "../assets/styles/Project.scss";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

function Project() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    let playTimeout: NodeJS.Timeout;

    if (videoRef.current) {
      gsap.to(videoRef.current, {
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%",
          end: isMobile ? "bottom 15%" : "bottom 25%",
          onEnter: () => {
            clearTimeout(playTimeout);
            playTimeout = setTimeout(() => {
              videoRef.current?.play();
            }, 100);
          },
          onLeave: () => {
            clearTimeout(playTimeout);
            videoRef.current?.pause();
          },
          onEnterBack: () => {
            clearTimeout(playTimeout);
            playTimeout = setTimeout(() => {
              videoRef.current?.play();
            }, 100);
          },
          onLeaveBack: () => {
            clearTimeout(playTimeout);
            videoRef.current?.pause();
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
      <h1>{t("projects.title")}</h1>
      <div className="projects-grid">
        <div className="project">
          <div className="image-container">
            <img
              src={require("../assets/images/projects/digiclipse_main.jpg")}
              className="zoom"
              alt="DigiClipse interface"
              width="50%"
            />
            <img
              src={require("../assets/images/projects/digiclipse_showcase.png")}
              className="zoom"
              alt="DigiClipse code"
              width="50%"
            />
          </div>
          <div className="project-title">
            <h2>{t("projects.digiclipse.title")}</h2>
          </div>
          <p dangerouslySetInnerHTML={{ __html: t("projects.digiclipse.description") }}/>
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
          <div className="project-title">
            <h2>{t("projects.arcade.title")}</h2>
          </div>
          <p dangerouslySetInnerHTML={{ __html: t("projects.arcade.description") }}/>
        </div>
        <div className="project">
          <img
            src={require("../assets/images/projects/aspire.jpg")}
            className="zoom"
            alt="thumbnail"
            width="100%"
          />
          <div className="project-title">
            <h2>{t("projects.aspire.title")}</h2>
          </div>
          <p dangerouslySetInnerHTML={{ __html: t("projects.aspire.description") }}/>
        </div>
        <div className="project">
          <img
            src={require("../assets/images/projects/database.jpg")}
            className="zoom"
            alt="thumbnail"
            width="100%"
          />
          <div className="project-title">
            <h2>{t("projects.database.title")}</h2>
          </div>
          <p dangerouslySetInnerHTML={{ __html: t("projects.database.description") }}/>
        </div>
        <div className="project">
          <img
            src={require("../assets/images/projects/voice_translator.jpg")}
            className="zoom"
            alt="thumbnail"
            width="100%"
          />
          <div className="project-title">
            <h2>{t("projects.voiceTranslator.title")}</h2>
          </div>
          <p>
          <p dangerouslySetInnerHTML={{ __html: t("projects.voiceTranslator.description") }}/>
          </p>
        </div>
        <div className="project">
          <div className="image-container">
            <img
              src={require("../assets/images/projects/ssc_main.png")}
              className="zoom main-image"
              alt="Main project view"
              width="100%"
            />
            <img
              src={require("../assets/images/projects/ssc_settings.png")}
              className="zoom"
              alt="Project detail 1"
              width="100%"
            />
          </div>
          <div className="project-title">
            <h2>{t("projects.dataUpdater.title")}</h2>
          </div>
          <p dangerouslySetInnerHTML={{ __html: t("projects.dataUpdater.description") }}/>
        </div>
        <div className="project">
          <img
            src={require("../assets/images/projects/sga.png")}
            className="zoom"
            alt="thumbnail"
            width="100%"
          />
          <div className="project-title">
            <h2>{t("projects.classManagement.title")}</h2>
          </div>
          <p dangerouslySetInnerHTML={{ __html: t("projects.classManagement.description") }}/>
        </div>
        <div className="project">
          <img
            src={require("../assets/images/projects/portfolio.png")}
            className="zoom"
            alt="thumbnail"
            width="100%"
          />
          <div className="project-title">
            <h2>{t("projects.portfolio.title")}</h2>
          </div>
          <p dangerouslySetInnerHTML={{ __html: t("projects.portfolio.description") }}/>
        </div>
      </div>
    </div>
  );
}

export default Project;
