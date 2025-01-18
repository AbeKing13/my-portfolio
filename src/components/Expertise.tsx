import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faCode} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const programmingSkills = [
    { name: "Python", icon: faPython },
    { name: "C" },
    { name: "C++" },
    { name: "JavaScript" },
    { name: "Java" }
];

const webDevelopmentAndDatabases = [
    { name: "React", icon: faReact },
    { name: "HTML" },
    { name: "CSS" },
    { name: "JQuery" },
    { name: "JSON" },
    { name: "SQL" },
    { name: "MySQL" },
    { name: "MariaDB" },
    { name: "PostgreSQL" }
];

const softwareAndTools = [
    { name: "GitHub" },
    { name: "Docker"},
    { name: "Azure"},
    { name: "Bash" },
    { name: "VirtualBox" },
    { name: "MATLAB" },
    { name: "SQL Server Management Studio" },
    { name: "Ubuntu"},
    { name: "Windows Server"},
    { name: "Visual Studio Code" },
    { name: "PyCharm" },
    { name: "IntelliJ IDEA" }
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Programming</h3>
                    <div className="flex-chips">
                        {programmingSkills.map((skill, index) => (
                            <Chip key={index} className='chip' label={skill.name} icon={skill.icon && <FontAwesomeIcon icon={skill.icon} />} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Web Development & Databases</h3>
                    <div className="flex-chips">
                        {webDevelopmentAndDatabases.map((skill, index) => (
                            <Chip key={index} className='chip' label={skill.name} icon={skill.icon && <FontAwesomeIcon icon={skill.icon} />} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMicrosoft} size="3x"/>
                    <h3>Software & Tools</h3>
                    <div className="flex-chips">
                        {softwareAndTools.map((service, index) => (
                            <Chip key={index} className='chip' label={service.name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;