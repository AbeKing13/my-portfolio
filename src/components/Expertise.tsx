import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faTools} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const programmingSkills = [
    { name: "Python" },
    { name: "Java" },
    { name: "C" },
    { name: "C++" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "API Integration" },
    { name: "Object-Oriented Programming" }
];

const webDevelopmentSkills = [
    { name: "React.js" },
    { name: "Node.js" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "JQuery" },
    { name: "Maven" }
];

const dataSkills = [
    { name: "ETL" },
    { name: "JSON" },
    { name: "BigQuery" },
    { name: "SQL Query" },
    { name: "MySQL" },
    { name: "PostgreSQL" },
    { name: "MariaDB" },
    { name: "Pandas" },
    { name: "NumPy" },
    { name: "Statistical Analysis" }
];

const toolsAndPlatforms = [
    { name: "GitHub" },
    { name: "Docker" },
    { name: "Azure" },
    { name: "Visual Studio Code" },
    { name: "PyCharm" },
    { name: "IntelliJ IDEA" },
    { name: "Ubuntu" },
    { name: "Windows Server" },
    { name: "Bash" },
    { name: "Matlab" },
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
                            <Chip key={index} className='chip' label={skill.name} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data</h3>
                    <div className="flex-chips">
                        {dataSkills.map((skill, index) => (
                            <Chip key={index} className='chip' label={skill.name} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Web Development</h3>
                    <div className="flex-chips">
                        {webDevelopmentSkills.map((service, index) => (
                            <Chip key={index} className='chip' label={service.name} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faTools} size="3x"/>
                    <h3>Development Tools & Environments</h3>
                    <div className="flex-chips">
                        {toolsAndPlatforms.map((service, index) => (
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