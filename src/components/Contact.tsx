import React from "react";
import "../assets/styles/Contact.scss";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const handleEmailClick = () => {
    window.location.href = "mailto:albertkindundu@yahoo.ca";
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>{t("contact.title")}</h1>
          <p>
            {t("contact.description")}
          </p>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleEmailClick}
            className="email-button"
          >
            {t("contact.button")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;