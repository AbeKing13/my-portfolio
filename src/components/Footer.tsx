import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/amir-hammar" target="_blank" rel="noreferrer noopener" title="Visit my GitHub profile"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/amirhammar/" target="_blank" rel="noreferrer noopener" title="Visit my LinkedIn profile"><LinkedInIcon/></a>
        <p>amirhammar2206@gmail.com</p>
      </div>
      <p>A portfolio built by Amir Hammar</p>
    </footer>
  );
}

export default Footer;