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
        <a href="https://github.com/amir-hammar" target="_blank" rel="noreferrer noopener" title="GitHub"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/amirhammar/" target="_blank" rel="noreferrer noopener" title="LinkedIn"><LinkedInIcon/></a>
        <p>amirhammar2206@gmail.com</p>
      </div>
      <p>{t("main.footer")}</p>
    </footer>
  );
}

export default Footer;