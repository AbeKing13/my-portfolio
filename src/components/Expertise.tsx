import { useTranslation } from "react-i18next";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faToolbox, faChartArea, faCompassDrafting } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

function Expertise() {
  const { t } = useTranslation();

  const mechanicalDesignSkills = [
    { name: t("expertise.mechanicalDesign.skills.solidworks") },
    { name: t("expertise.mechanicalDesign.skills.autocad") },
    { name: t("expertise.mechanicalDesign.skills.inventor") }
  ];

  const manufacturingSkills = [
    { name: t("expertise.manufacturing.skills.cnc") },
    { name: t("expertise.manufacturing.skills.lathe") },
    { name: t("expertise.manufacturing.skills.milling") },
    { name: t("expertise.manufacturing.skills.welding") },
    { name: t("expertise.manufacturing.skills.threeDPrinting") },
    { name: t("expertise.manufacturing.skills.cadCam") }
  ];

  const analysisSkills = [
    { name: t("expertise.analysis.skills.fea") },
    { name: t("expertise.analysis.skills.thermodynamics") },
    { name: t("expertise.analysis.skills.statics") },
    { name: t("expertise.analysis.skills.strengthOfMaterials") }
  ];

  const technicalTools = [
    { name: t("expertise.technicalTools.skills.msOffice") },
    { name: t("expertise.technicalTools.skills.mathcad") },
    { name: t("expertise.technicalTools.skills.isoStandards") },
    { name: t("expertise.technicalTools.skills.asmeStandards") },
    { name: t("expertise.technicalTools.skills.safety") }
  ];

  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>{t("expertise.title")}</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faCompassDrafting} size="3x" />
            <h3>{t("expertise.mechanicalDesign.title")}</h3>
            <div className="flex-chips">
              {mechanicalDesignSkills.map((skill, index) => (
                <Chip key={index} className="chip" label={skill.name} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faGear} size="3x" />
            <h3>{t("expertise.manufacturing.title")}</h3>
            <div className="flex-chips">
              {manufacturingSkills.map((service, index) => (
                <Chip key={index} className="chip" label={service.name} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faChartArea} size="3x" />
            <h3>{t("expertise.analysis.title")}</h3>
            <div className="flex-chips">
              {analysisSkills.map((skill, index) => (
                <Chip key={index} className="chip" label={skill.name} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faToolbox} size="3x" />
            <h3>{t("expertise.technicalTools.title")}</h3>
            <div className="flex-chips">
              {technicalTools.map((service, index) => (
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
