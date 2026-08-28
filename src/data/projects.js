import yunasStudioWorkspace1 from "../assets/yunas-studio-workspace-1.jpg";
import yunasStudioWorkspace2 from "../assets/yunas-studio-workspace-2.jpg";
import studyitCollaboration from "../assets/studyit-collaboration.jpg";

export const projects = [
  {
    title: "Odoo ERP — CV. Permata Alam Perkasa",
    period: "Aug 2026 — Present",
    description:
      "ERP system developed and customized on the Odoo framework to support end-to-end operations for a retreaded and truck tire distribution company, including inventory, sales, purchasing, accounting, employees/attendance, and product management.",
    proofs: [],
    links: [],
  },
  {
    title: "DASH-DISM",
    period: "Jul 2025 — Sep 2025",
    description:
      "Dashboard Analyst prototype for monitoring microwave antenna dismantling on a nationwide telecom project. Role-based portal replaced manual WhatsApp/Notepad recaps with live S-Curve analytics and KPI tracking.",
    proofs: [
      {
        name: "TI-dismantling-project-dashboard",
        href: "https://github.com/GhifariAlwy/TI-dismantling-project-dashboard",
        src: "https://opengraph.githubassets.com/1/GhifariAlwy/TI-dismantling-project-dashboard",
        alt: "GitHub repository preview for TI dismantling project dashboard",
      },
    ],
    links: [
      "https://github.com/GhifariAlwy/TI-dismantling-project-dashboard",
    ],
  },
  {
    title: "Yunas Studio — Capstone System Analysis",
    period: "Sep 2025 — Jul 2026",
    description:
      "End-to-end requirements engineering and system design for a photo studio booking platform: 40 functional + 14 non-functional requirements, FOOM business modeling, and full OOAD (23 use cases, activity, sequence and class diagrams) for a PWA with automated payment verification.",
    proofs: [
      {
        name: "yunas-studio-workspace-1.jpg",
        href: "https://drive.google.com/drive/folders/1BgGARaNlHF4TpT5QCr--qUiNpg8M7KVw?usp=sharing",
        src: yunasStudioWorkspace1,
        alt: "Creative studio workspace",
      },
      {
        name: "yunas-studio-workspace-2.jpg",
        src: yunasStudioWorkspace2,
        alt: "Laptop showing a software planning workspace",
      },
    ],
    links: [
      "https://drive.google.com/drive/folders/1BgGARaNlHF4TpT5QCr--qUiNpg8M7KVw?usp=sharing",
    ],
  },
  {
    title: "ShelfLink",
    period: "Sep 2025 — Jun 2026",
    description:
      "Digital library management system digitalizing cataloging, borrowing, returning, and review workflows, with CI/CD-automated testing and deployment.",
    proofs: [
      {
        name: "ShelfLink",
        href: "https://github.com/PajarAland/ShelfLink/tree/Ghifari",
        src: "https://opengraph.githubassets.com/1/PajarAland/ShelfLink",
        alt: "ShelfLink GitHub repository preview",
      },
    ],
    links: ["https://github.com/PajarAland/ShelfLink/tree/Ghifari"],
  },
  {
    title: "StudyIT & StudyIT Mobile",
    period: "Sep 2023 — Jun 2024",
    description:
      "Web and mobile learning platform with responsive interfaces across both surfaces, built and maintained collaboratively with a product team.",
    proofs: [
      {
        name: "studyit-collaboration.jpg",
        href: "https://github.com/Aldinorasend/WebStudyIT.git",
        src: studyitCollaboration,
        alt: "Students collaborating with laptops",
      },
    ],
    links: ["https://github.com/Aldinorasend/WebStudyIT.git"],
  },
];
