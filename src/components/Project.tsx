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

      videoRef.current.defaultPlaybackRate = 2.0;
      videoRef.current.playbackRate = 2.0;

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
              src={require("../assets/images/projects/bati_main.jpg")}
              className="zoom"
              alt="Welded Frame Structure 3D"
              width="50%"
            />
            <img
              src={require("../assets/images/projects/bati_contrainte.jpg")}
              className="zoom"
              alt="Welded Frame Structure 2D"
              width="50%"
            />
          </div>
          <div className="project-title">
            <h2>{t("projects.bati.title")}</h2>
          </div>
          <p dangerouslySetInnerHTML={{ __html: t("projects.bati.description") }}/>
        </div>
        
        
        <div className="project">
          <div className="image-container-second">
            <img
                src={require("../assets/images/projects/convoyeur_main.jpg")}
                className="zoom"
                alt="DigiClipse interface"
                width="50%"
              />
              <img
                src={require("../assets/images/projects/convoyeur_2d.jpg")}
                className="zoom"
                alt="DigiClipse code"
                width="50%"
              />
          </div>
          <div className="project-title">
            <h2>{t("projects.convoyeur.title")}</h2>
          </div>
          <p dangerouslySetInnerHTML={{ __html: t("projects.convoyeur.description") }}/>
        </div>
        
        
        <div className="project">
          <video
            ref={videoRef}
            src={require("../assets/images/projects/escabot.mp4")}
            className="zoom"
            poster={require("../assets/images/projects/escabot_thumbnail.jpg")}
            loop
            muted
            playsInline
          />
          <div className="project-title">
            <h2>{t("projects.escabot.title")}</h2>
          </div>
          <p dangerouslySetInnerHTML={{ __html: t("projects.escabot.description") }}/>
        </div>


        <div className="project">
          <div className="image-container-small-video">
            <img
              src={require("../assets/images/projects/cnc_main.jpg")}
              className="zoom"
              alt="Welded Frame Structure 3D"
              width="50%"
            />
            {/* <video
              ref={videoRef}
              src={require("../assets/images/projects/cnc.mp4")}
              className="zoom"
              poster={require("../assets/images/projects/escabot_thumbnail.jpg")}
              loop
              muted
              playsInline
            /> */}
          </div>
          <div className="project-title">
            <h2>{t("projects.cnc.title")}</h2>
          </div>
          <p dangerouslySetInnerHTML={{ __html: t("projects.cnc.description") }}/>
        </div>

      </div>
    </div>
  );
}

export default Project;
