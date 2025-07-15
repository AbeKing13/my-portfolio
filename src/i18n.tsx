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
            role: "Mechanical Engineering Technician"
          },

          navigation: {
            expertise: "Expertise",
            projects: "Projects",
            contact: "Contact",
          },

          expertise: {
            title: "Expertise",
            mechanicalDesign: {
              title: "Mechanical Design",
              skills: {
                solidworks: "SolidWorks",
                autocad: "AutoCAD",
                inventor: "Autodesk Inventor"
              }
            },
            manufacturing: {
              title: "Manufacturing Processes",
              skills: {
                cnc: "CNC Machining",
                lathe: "Lathe Operation",
                milling: "Milling",
                welding: "Welding",
                threeDPrinting: "3D Printing",
                cadCam: "CAD/CAM"
              }
            },
            analysis: {
              title: "Mechanical Analysis",
              skills: {
                fea: "Finite Element Analysis (FEA)",
                thermodynamics: "Thermodynamics",
                statics: "Statics",
                strengthOfMaterials: "Strength of Materials",
              }
            },
            technicalTools: {
              title: "Technical Tools & Environment",
              skills: {
                msOffice: "Microsoft Office (Excel, Word)",
                mathcad: "Mathcad",
                isoStandards: "ISO Standards",
                asmeStandards: "ASME Standards",
                safety: "Health & Safety Standards"
              }
            }
          },

          projects: {
            title: "Projects",
            bati: {
              title: "Industrial welded frame structure",
              description:
                "Designed an <b>industrial welded frame structure</b> based on a <b>specification sheet</b>. Developed the <b>complete system</b>, selected appropriate <b>materials</b>, <b>profiles</b>, and <b>mechanical joints</b> (welding, bolts, mortise-and-tenon). Created a <b>3D model</b> using <b>SolidWorks</b>, performed <b>strength calculations</b>, and validated the design through <b>finite element analysis (FEA)</b>. Produced <b>technical drawings</b> and a <b>design report</b> in accordance with <b>industrial standards</b>. Applied skills in <b>statics</b>, <b>dynamics</b>, <b>strength of materials</b>, <b>technical drawing</b>, <b>project management</b>, and <b>technical presentation</b>."
            },
            convoyeur: {
              title: "Pallet Conveyor",
              description:
                "Complete design of an <b>industrial pallet conveyor</b> based on a defined load profile. Selection of the <b>chain type (RS Tsubaki)</b>, <b>sprockets</b>, <b>SEW gearmotor</b>, and <b>bearings</b>. Performed <b>power calculations</b>, <b>chain tension analysis</b>, <b>reduction ratio calculations</b>, and <b>sizing of the main shaft</b>. Created a <b>3D model</b> in <b>SolidWorks</b> and produced <b>technical drawings</b> (assembly, shaft, gearmotor), along with a complete engineering package including the <b>Excel calculation sheet</b> and the <b>Pack&Go</b>. Applied skills in <b>industrial component selection</b>, <b>mechanical joints</b>, <b>CAD modeling</b>, and <b>technical drawing standards</b>."
            },
            escabot: {
              title: "Ladder",
              description:
                "Complete design of a custom <b>mechanical assembly</b> using advanced <b>SolidWorks</b> tools. Modeled parts using <b>sheet metal</b> and <b>weldment</b> features, and integrated a <b>fully assembled system with hardware</b> that complies with industry standards. Created over <b>10 detailed technical drawings</b>, including an <b>annotated exploded view</b> following manufacturing conventions. Produced a <b>'Motion Study' presentation video</b> to clearly and professionally illustrate the assembly’s operation for <b>client presentations or technical demonstrations</b>. Highlighted skills in <b>3D modeling</b>, <b>industrial assembly design</b>, <b>drafting standards</b>, and <b>visual communication</b>.",
            },
            cnc: {
              title: "Projet CNC",
              description:
                "Completed a <b>full machining project</b> on a CNC machining center. Designed a <b>custom mechanical part</b> in <b>3D with Autodesk Inventor</b>, wrote the <b>G‑code program</b> both manually and with <b>Mastercam</b> (G00, G01, G02, G03, fixed cycles), then validated it through simulation in <b>Vericut</b>. Prepared the <b>machining setup</b>, adjusted <b>work offsets</b>, and ran the machine. Produced the part on the CNC while optimizing <b>feed rates</b>, <b>tool selection</b>, and <b>cutting parameters</b>. Performed dimensional and visual inspection of the final piece to ensure <b>machining quality</b>."
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
                "Developed a personal website to showcase projects, skills, and experiences using <b>React</b>. Built with <b>TypeScript</b> on <b>HTML5</b> and styled with <b>SASS</b> to ensure a robust, responsive, and interactive design.",
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
            role: "Diplômé en Technique du Génie Mécanique"
          },

          navigation: {
            expertise: "Expertise",
            projects: "Projets",
            contact: "Contact",
          },

          expertise: {
            title: "Expertise",
            mechanicalDesign: {
              title: "Conception Mécanique",
              skills: {
                solidworks: "SolidWorks",
                autocad: "AutoCAD",
                inventor: "Autodesk Inventor"
              }
            },
            manufacturing: {
              title: "Procédés de Fabrication",
              skills: {
                cnc: "Usinage CNC",
                lathe: "Opération de Tour",
                milling: "Fraisage",
                welding: "Soudure",
                threeDPrinting: "Impression 3D",
                cadCam: "Conception/Fabrication Assistée par Ordinateur (CAD/CAM)",
              }
            },
            analysis: {
              title: "Analyse Mécanique",
              skills: {
                fea: "Analyse par Éléments Finis (FEA)",
                thermodynamics: "Thermodynamique",
                statics: "Statique",
                strengthOfMaterials: "Résistance des Matériaux"
              }
            },
            technicalTools: {
              title: "Outils Techniques et Environnement",
              skills: {
                msOffice: "Microsoft Office (Excel, Word)",
                mathcad: "Mathcad",
                isoStandards: "Normes ISO",
                asmeStandards: "Normes ASME",
                safety: "Normes de Santé et Sécurité"
              }
            }
          },

          projects: {
            title: "Projets",
            bati: {
              title: "Bâti mécano-soudé industriel",
              description:
                "Réalisation d’un <b>bâti mécano-soudé industriel</b> à partir d’un <b>cahier des charges</b>. Conception du <b>système complet</b>, choix des <b>matériaux</b>, des <b>profilés</b> et des <b>liaisons</b> (soudure, boulons, tenons/mortaises). <b>Modélisation 3D</b> sous <b>SolidWorks</b>, calculs de <b>résistance</b> et validation par <b>éléments finis</b>. Production des <b>dessins techniques</b> et d’un <b>rapport de conception</b> respectant les <b>normes industrielles</b>. Application des compétences en <b>statique</b>, <b>dynamique</b>, <b>résistance des matériaux</b>, <b>dessin technique</b>, <b>gestion de projet</b> et <b>présentation technique</b>."
            },
            convoyeur: {
              title: "Convoyeur à palettes",
              description:
                "Conception complète d’un <b>convoyeur à palettes</b> industriel selon un profil de charge défini. Sélection du <b>type de chaîne (RS Tsubaki)</b>, des <b>roues dentées</b>, du <b>motoréducteur SEW</b> et des <b>roulements</b>. Réalisation des <b>calculs de puissance</b>, de <b>tension dans les chaînes</b>, de <b>rapport de réduction</b> et de <b>dimensionnement de l’arbre principal</b>. Modélisation 3D sous <b>SolidWorks</b>, création des <b>dessins techniques</b> (assemblage, arbre, motoréducteur) et remise d’un dossier complet incluant le <b>fichier Excel de calculs</b> et le <b>Pack&Go</b>. Application des compétences en <b>sélection de composants industriels</b>, <b>liaisons mécaniques</b>, <b>modélisation CAO</b>, et <b>normes de dessin technique</b>.",
            },
            escabot: {
              title: "Escabot",
              description:
                "Conception complète d’un <b>assemblage mécanique</b> personnalisé à l’aide des outils avancés de <b>SolidWorks</b>. Modélisation de pièces à l’aide des fonctions de <b>tôlerie</b> et de <b>mécano-soudure</b>, intégration d’un <b>assemblage complet avec quincaillerie</b> respectant les normes. Réalisation de plus de <b>10 mises en plan techniques</b> précises, incluant une <b>vue éclatée annotée</b> selon les standards de fabrication. Création d’une <b>vidéo de présentation 'Motion Study'</b> visant à illustrer le fonctionnement de l’assemblage de manière claire et professionnelle, dans une optique de <b>présentation client ou démonstration technique</b>. Mise en valeur des compétences en <b>modélisation 3D</b>, <b>conception d’assemblages industriels</b>, <b>normes de dessin</b> et <b>communication visuelle</b>."
            },
            cnc: {
              title: "Project CNC",
              description:
                "Réalisation d’un <b>projet d’usinage complet</b> sur centre d’usinage CNC. Conception d’une <b>pièce mécanique personnalisée</b> en <b>3D avec Autodesk Inventor</b>, rédaction du <b>programme G-code</b> manuellement et avec <b>Mastercam</b> (G00, G01, G02, G03, cycles fixes), puis simulation dans <b>Véricut</b> pour validation. Préparation du <b>montage d’usinage</b>, ajustement des <b>origines</b> et mise en marche de la machine. Réalisation de la pièce sur MOCN avec optimisation des <b>vitesses d’avance</b>, du <b>choix d’outil</b> et des <b>paramètres de coupe</b>. Vérification dimensionnelle et visuelle de la pièce finale pour garantir la <b>qualité d’usinage</b>."
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
                "Développement d'un site web personnel pour présenter mes projets, compétences et expériences en utilisant <b>React</b>. Construit avec <b>TypeScript</b> sur <b>HTML5</b> et stylisé avec <b>SASS</b> pour assurer une conception robuste, responsive et interactive.",
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
