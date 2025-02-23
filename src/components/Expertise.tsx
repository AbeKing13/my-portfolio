import { useTranslation } from "react-i18next";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faTools } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

function Expertise() {
  const { t } = useTranslation();

  const programmingSkills = [
    { name: t("expertise.programming.skills.python") },
    { name: t("expertise.programming.skills.java") },
    { name: t("expertise.programming.skills.c") },
    { name: t("expertise.programming.skills.cpp") },
    { name: t("expertise.programming.skills.javascript") },
    { name: t("expertise.programming.skills.typescript") },
    { name: t("expertise.programming.skills.apiIntegration") },
    { name: t("expertise.programming.skills.objectOrientedProgramming") },
  ];

  const webDevelopmentSkills = [
    { name: t("expertise.webDevelopment.skills.reactjs") },
    { name: t("expertise.webDevelopment.skills.nodejs") },
    { name: t("expertise.webDevelopment.skills.html") },
    { name: t("expertise.webDevelopment.skills.css") },
    { name: t("expertise.webDevelopment.skills.jquery") },
    { name: t("expertise.webDevelopment.skills.maven") },
  ];

  const dataSkills = [
    { name: t("expertise.data.skills.etl") },
    { name: t("expertise.data.skills.json") },
    { name: t("expertise.data.skills.bigquery") },
    { name: t("expertise.data.skills.sqlQuery") },
    { name: t("expertise.data.skills.mysql") },
    { name: t("expertise.data.skills.postgresql") },
    { name: t("expertise.data.skills.mariadb") },
    { name: t("expertise.data.skills.pandas") },
    { name: t("expertise.data.skills.numpy") },
    { name: t("expertise.data.skills.statisticalAnalysis") },
  ];

  const toolsAndPlatforms = [
    { name: t("expertise.tools.skills.github") },
    { name: t("expertise.tools.skills.docker") },
    { name: t("expertise.tools.skills.azure") },
    { name: t("expertise.tools.skills.visualStudioCode") },
    { name: t("expertise.tools.skills.pycharm") },
    { name: t("expertise.tools.skills.intellijIdea") },
    { name: t("expertise.tools.skills.ubuntu") },
    { name: t("expertise.tools.skills.windowsServer") },
    { name: t("expertise.tools.skills.bash") },
    { name: t("expertise.tools.skills.matlab") },
  ];

  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>{t("expertise.title")}</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faCode} size="3x" />
            <h3>{t("expertise.programming.title")}</h3>
            <div className="flex-chips">
              {programmingSkills.map((skill, index) => (
                <Chip key={index} className="chip" label={skill.name} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <h3>{t("expertise.data.title")}</h3>
            <div className="flex-chips">
              {dataSkills.map((skill, index) => (
                <Chip key={index} className="chip" label={skill.name} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>{t("expertise.webDevelopment.title")}</h3>
            <div className="flex-chips">
              {webDevelopmentSkills.map((service, index) => (
                <Chip key={index} className="chip" label={service.name} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faTools} size="3x" />
            <h3>{t("expertise.tools.title")}</h3>
            <div className="flex-chips">
              {toolsAndPlatforms.map((service, index) => (
                <Chip key={index} className="chip" label={service.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
