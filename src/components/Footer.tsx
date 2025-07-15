import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/albert-kindundu/" target="_blank" rel="noreferrer noopener" title="LinkedIn"><LinkedInIcon/></a>
        <p>albertkindundu@yahoo.ca</p>
      </div>
    </footer>
  );
}

export default Footer;