import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          main: {
            role: "Software Engineer Student",
            footer: "A portfolio built by Amir Hammar",
          },

          navigation: {
            expertise: "Expertise",
            career: "Career",
            projects: "Projects",
            contact: "Contact",
          },

          expertise: {
            title: "Expertise",
            programming: {
              title: "Programming",
              skills: {
                python: "Python",
                java: "Java",
                c: "C",
                cpp: "C++",
                javascript: "JavaScript",
                typescript: "TypeScript",
                apiIntegration: "API Integration",
                objectOrientedProgramming: "Object-Oriented Programming",
              },
            },
            webDevelopment: {
              title: "Web Development",
              skills: {
                reactjs: "React.js",
                nodejs: "Node.js",
                html: "HTML",
                css: "CSS",
                jquery: "JQuery",
                maven: "Maven",
              },
            },
            data: {
              title: "Data",
              skills: {
                etl: "ETL",
                json: "JSON",
                bigquery: "BigQuery",
                sqlQuery: "SQL Query",
                mysql: "MySQL",
                postgresql: "PostgreSQL",
                mariadb: "MariaDB",
                pandas: "Pandas",
                numpy: "NumPy",
                statisticalAnalysis: "Statistical Analysis",
              },
            },
            tools: {
              title: "Development Tools & Environments",
              skills: {
                github: "GitHub",
                docker: "Docker",
                azure: "Azure",
                visualStudioCode: "Visual Studio Code",
                pycharm: "PyCharm",
                intellijIdea: "IntelliJ IDEA",
                ubuntu: "Ubuntu",
                windowsServer: "Windows Server",
                bash: "Bash",
                matlab: "Matlab",
              },
            },
          },

          career: {
            title: "Career History",
            stingray: {
              date: "Jan 2025 - Present",
              title: "Software Developer Intern",
              company: "Stingray",
              city: "Montreal, QC, CA",
              tasks: {
                title: "Tasks",
                list: [
                  "Develop and maintain ETL pipelines",
                  "Analyze and investigate data inconsistencies",
                  "Build and optimize data processes"
                ]
              },
              technologies: {
                title: "Technologies",
                stack: [
                  "Python",
                  "SQL",
                  "Java",
                  "Rust",
                  "ETL",
                  "BigQuery",
                  "Apache Beam",
                  "Google Cloud Platform",
                  "GitLab"
                ]
              }
            },
            ssc: {
              date: "May 2024 - Dec 2024",
              title: "Data Analyst",
              company: "Shared Services Canada",
              city: "Montreal, QC, CA",
              tasks: {
                title: "Tasks",
                list: [
                  "Automate extraction, verification, and updating of email data in Excel",
                  "Migrate Excel data to SQL Server with Azure SQL",
                  "Automate SQL data updates using Power Automate",
                  "Prepare data for Power BI visualizations",
                  "Work in a Scrum Agile environment"
                ]
              },
              technologies: {
                title: "Technologies",
                stack: [
                  "Python",
                  "SQL",
                  "User Interface",
                  "Azure SQL",
                  "AI Hub",
                  "Power Automate",
                  "Power BI",
                  "Power Query"
                ]
              }
            },
            matrox: {
              date: "Jan 2023 - Aug 2023",
              title: "R&D Technician",
              company: "Matrox",
              city: "Montreal, QC, CA",
              tasks: {
                title: "Tasks",
                list: [
                  "Develop new features and enhance functionality in an existing C project",
                  "Resolve bugs affecting new features",
                  "Operate within an Ubuntu environment",
                  "Perform HDMI protocol tests on devices using an oscilloscope"
                ]
              },
              technologies: {
                title: "Technologies",
                stack: [
                  "C/C++",
                  "Ubuntu",
                  "Oscilloscope",
                  "Electronics",
                  "Raspberry Pico"
                ]
              }
            },
            addatech: {
              date: "June 2022 - Aug 2022",
              title: "Technical Support Technician",
              company: "Addatech",
              city: "Laval, QC, CA",
              tasks: {
                title: "Tasks",
                list: [
                  "Execute SQL queries",
                  "Assist with software installation and configuration",
                  "Provide internal hardware assistance for setting up computers",
                  "Document solutions and troubleshooting steps",
                  "Provide technical support via email and phone in English and French"
                ]
              },
              technologies: {
                title: "Technologies",
                stack: [
                  "SQL"
                ]
              }
            }
          },

          projects: {
            title: "Projects",
            digiclipse: {
              title: "DigiClipse",
              description:
                "Ensure the availability of parts by automating the extraction and verification of part numbers through Excel files and the Digikey API, while managing human errors using <b>Pandas</b>, <b>Python</b>, <b>Docker</b> and <b>APIs</b>.",
            },
            arcade: {
              title: "Arcade",
              description:
                "Built an <b>arcade game</b> from scratch, designing both the <b>hardware</b> and <b>software</b>. Programmed <b>gameplay</b>, <b>UI</b>, <b>menus</b>, and <b>settings</b> while optimizing performance for a smooth experience. Applied skills in <b>game programming</b>, <b>Arduino</b>, <b>UI design</b>, <b>controller integration</b>, and <b>electronics</b>.",
            },
            aspire: {
              title: "Aspire",
              description:
                "Develop a <b>voice assistant</b> named <b>Aspire</b> (still under development) for <b>computer control</b>. It enables users to <b>open applications</b>, <b>navigate the web</b>, and ask questions to <b>ChatGPT</b>. The project leverages <b>OpenAI GPT-3</b> and <b>Python</b>, utilizes <b>APIs</b> for integration, and incorporates <b>audio file management</b>.",
            },
            database: {
              title: "Web Database Interface",
              description:
                "Set up a <b>web database interface</b> on a <b>Raspberry Pi</b> server with a <b>web interface</b> that simplifies <b>displaying</b>, <b>entering</b>, and <b>manipulating data</b>. Leveraging <b>web development</b> best practices, the project integrates <b>SQL</b> capabilities with a user-friendly <b>user interface</b> and utilizes <b>MariaDB</b> for robust database management.",
            },
            voiceTranslator: {
              title: "Voice Translator",
              description:
                "Developed a <b>Python-powered</b> voice translator that converts <b>speech to text</b> using <b>OpenAI Whisper</b> and <b>NumPy</b> for processing, translates the extracted text into Japanese via an <b>external API</b>, and synthesizes the translated text back into <b>speech</b> using advanced speech processing techniques.",
            },
            dataUpdater: {
              title: "Data Updater Application",
              description:
                "<b>Automate</b> the extraction, verification, and updating of email <b>data</b> in Excel based on selected dates and subjects, as part of my work at Shared Services Canada, using <b>Python</b>, <b>customTkinter</b> for the <b>GUI</b>, and <b>Excel query libraries</b> for seamless data integration.",
            },
            classManagement: {
              title: "Class Management System",
              description:
                "Developed a <b>Class Management System</b> for the LOG210 course, engineered to <b>streamline</b> the management of <b>courses</b>, <b>students</b>, and other academic activities. Built with <b>TypeScript</b>, <b>Pug</b> and <b>CSS</b>.",
            },
            portfolio: {
              title: "Portfolio Website",
              description:
                "Developed a personal website to showcase projects, skills, and experiences using <b>React</b> and <b>Node.js</b>. Built with <b>TypeScript</b> on <b>HTML5</b> and styled with <b>SASS</b> to ensure a robust, responsive, and interactive design.",
            },
          },

          contact: {
            title: "Contact Me",
            description: "Got a project waiting to be realized? Let's collaborate and make it happen!",
            button: "Send me an email"
          },
        },
      },

      fr: {
        translation: {
          main: {
            role: "Étudiant en Génie Logiciel",
            footer: "Un portfolio construit par Amir Hammar",
          },

          navigation: {
            expertise: "Expertise",
            career: "Carrière",
            projects: "Projets",
            contact: "Contact",
          },

          expertise: {
            title: "Expertise",
            programming: {
              title: "Programmation",
              skills: {
                python: "Python",
                java: "Java",
                c: "C",
                cpp: "C++",
                javascript: "JavaScript",
                typescript: "TypeScript",
                apiIntegration: "Intégration d'API",
                objectOrientedProgramming: "Programmation Orientée Objet",
              },
            },
            webDevelopment: {
              title: "Développement Web",
              skills: {
                reactjs: "React.js",
                nodejs: "Node.js",
                html: "HTML",
                css: "CSS",
                jquery: "JQuery",
                maven: "Maven",
              },
            },
            data: {
              title: "Données",
              skills: {
                etl: "ETL",
                json: "JSON",
                bigquery: "BigQuery",
                sqlQuery: "Requêtes SQL",
                mysql: "MySQL",
                postgresql: "PostgreSQL",
                mariadb: "MariaDB",
                pandas: "Pandas",
                numpy: "NumPy",
                statisticalAnalysis: "Analyse Statistique",
              },
            },
            tools: {
              title: "Outils et Environnements de Développement",
              skills: {
                github: "GitHub",
                docker: "Docker",
                azure: "Azure",
                visualStudioCode: "Visual Studio Code",
                pycharm: "PyCharm",
                intellijIdea: "IntelliJ IDEA",
                ubuntu: "Ubuntu",
                windowsServer: "Windows Server",
                bash: "Bash",
                matlab: "Matlab",
              },
            },
          },

          career: {
            title: "Parcours Professionnel",
            stingray: {
              date: "Jan 2025 - Présent",
              title: "Stagiaire en Développement Logiciel",
              company: "Stingray",
              city: "Montréal, QC, CA",
              tasks: {
                title: "Tâches",
                list: [
                  "Développer et maintenir des pipelines ETL",
                  "Analyser et investiguer les incohérences de données",
                  "Construire et optimiser les processus de données"
                ]
              },
              technologies: {
                title: "Technologies",
                stack: [
                  "Python",
                  "SQL",
                  "Java",
                  "Rust",
                  "ETL",
                  "BigQuery",
                  "Apache Beam",
                  "Google Cloud Platform",
                  "GitLab"
                ]
              }
            },
            ssc: {
              date: "Mai 2024 - Déc 2024",
              title: "Analyste de Données",
              company: "Services Partagés Canada",
              city: "Montréal, QC, CA",
              tasks: {
                title: "Tâches",
                list: [
                  "Automatiser l'extraction, la vérification et la mise à jour des données d'emails dans Excel",
                  "Migrer les données Excel vers SQL Server avec Azure SQL",
                  "Automatiser les mises à jour SQL avec Power Automate",
                  "Préparer les données pour les visualisations Power BI",
                  "Travailler dans un environnement Scrum Agile"
                ]
              },
              technologies: {
                title: "Technologies",
                stack: [
                  "Python",
                  "SQL",
                  "Interface Utilisateur",
                  "Azure SQL",
                  "AI Hub",
                  "Power Automate",
                  "Power BI",
                  "Power Query"
                ]
              }
            },
            matrox: {
              date: "Jan 2023 - Août 2023",
              title: "Technicien R&D",
              company: "Matrox",
              city: "Montréal, QC, CA",
              tasks: {
                title: "Tâches",
                list: [
                  "Développer de nouvelles fonctionnalités et améliorer un projet C existant",
                  "Résoudre les bugs affectant les nouvelles fonctionnalités",
                  "Opérer dans un environnement Ubuntu",
                  "Effectuer des tests de protocole HDMI sur des appareils avec un oscilloscope"
                ]
              },
              technologies: {
                title: "Technologies",
                stack: [
                  "C/C++",
                  "Ubuntu",
                  "Oscilloscope",
                  "Électronique",
                  "Raspberry Pico"
                ]
              }
            },
            addatech: {
              date: "Juin 2022 - Août 2022",
              title: "Technicien Support Technique",
              company: "Addatech",
              city: "Laval, QC, CA",
              tasks: {
                title: "Tâches",
                list: [
                  "Exécuter des requêtes SQL",
                  "Assister à l'installation et la configuration de logiciels",
                  "Fournir une assistance matérielle interne pour la configuration des ordinateurs",
                  "Documenter les solutions et les étapes de dépannage",
                  "Fournir un support technique par email et téléphone en anglais et en français"
                ]
              },
              technologies: {
                title: "Technologies",
                stack: [
                  "SQL"
                ]
              }
            }
          },

          projects: {
            title: "Projets",
            digiclipse: {
              title: "DigiClipse",
              description:
                "Assurer la disponibilité des pièces en automatisant l'extraction et la vérification des numéros de pièces via des fichiers Excel et l'API Digikey, tout en gérant les erreurs humaines à l'aide de <b>Pandas</b>, <b>Python</b>, <b>Docker</b> et des <b>APIs</b>.",
            },
            arcade: {
              title: "Arcade",
              description:
                "Création d'un <b>jeu d'arcade</b> à partir de rien, conception du <b>matériel</b> et du <b>logiciel</b>. Programmation du <b>gameplay</b>, de l'<b>interface utilisateur</b>, des <b>menus</b> et des <b>paramètres</b> tout en optimisant les performances. Application des compétences en <b>programmation de jeux</b>, <b>Arduino</b>, <b>conception d'interface</b>, <b>intégration de contrôleur</b> et <b>électronique</b>.",
            },
            aspire: {
              title: "Aspire",
              description:
                "Développement d'un <b>assistant vocal</b> nommé <b>Aspire</b> (en cours de développement) pour le <b>contrôle d'ordinateur</b>. Il permet aux utilisateurs d'<b>ouvrir des applications</b>, de <b>naviguer sur le web</b> et de poser des questions à <b>ChatGPT</b>. Le projet utilise <b>OpenAI GPT-3</b> et <b>Python</b>, des <b>APIs</b> pour l'intégration, et la gestion de <b>fichiers audio</b>.",
            },
            database: {
              title: "Interface de Base de Données Web",
              description:
                "Mise en place d'une <b>interface de base de données web</b> sur un serveur <b>Raspberry Pi</b> avec une <b>interface web</b> qui simplifie l'<b>affichage</b>, la <b>saisie</b> et la <b>manipulation des données</b>. Utilisation des meilleures pratiques de <b>développement web</b>, intégration des capacités <b>SQL</b> avec une <b>interface utilisateur</b> conviviale et utilisation de <b>MariaDB</b> pour une gestion robuste de la base de données.",
            },
            voiceTranslator: {
              title: "Traducteur Vocal",
              description:
                "Développement d'un traducteur vocal alimenté par <b>Python</b> qui convertit la <b>parole en texte</b> à l'aide d'<b>OpenAI Whisper</b> et <b>NumPy</b> pour le traitement, traduit le texte extrait en japonais via une <b>API externe</b>, et synthétise le texte traduit en <b>parole</b> en utilisant des techniques avancées de traitement de la parole.",
            },
            dataUpdater: {
              title: "Application de Synchronisation des Données",
              description:
                "<b>Automatisation</b> de l'extraction, de la vérification et de la mise à jour des <b>données</b> d'emails dans Excel en fonction des dates et sujets sélectionnés, dans le cadre de mon travail à Services Partagés Canada, en utilisant <b>Python</b>, <b>customTkinter</b> pour l'<b>interface graphique</b> et des <b>bibliothèques de requêtes Excel</b> pour une intégration transparente des données.",
            },
            classManagement: {
              title: "Système de Gestion de Classe",
              description:
                "Développement d'un <b>Système de Gestion de Classe</b> pour le cours LOG210, conçu pour <b>simplifier</b> la gestion des <b>cours</b>, des <b>étudiants</b> et d'autres activités académiques. Construit avec <b>TypeScript</b>, <b>Pug</b> et <b>CSS</b>.",
            },
            portfolio: {
              title: "Site Web Portfolio",
              description:
                "Développement d'un site web personnel pour présenter mes projets, compétences et expériences en utilisant <b>React</b> et <b>Node.js</b>. Construit avec <b>TypeScript</b> sur <b>HTML5</b> et stylisé avec <b>SASS</b> pour assurer une conception robuste, responsive et interactive.",
            },
          },

          contact: {
            title: "Me Contacter",
            description: "Vous avez un projet en attente de réalisation ? Collaborons pour le concrétiser !",
            button: "Envoyez-moi un email"
          },

        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
