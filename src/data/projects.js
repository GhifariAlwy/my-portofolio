import yunasStudioWorkspace1 from "../assets/yunas-studio-workspace-1.jpg";
import yunasStudioWorkspace2 from "../assets/yunas-studio-workspace-2.jpg";
import studyitCollaboration from "../assets/studyit-collaboration.jpg";

export const projects = [
  {
    title: "Scholarship/Training Registration App",
    period: "Sep 2026",
    description:
      "Recruitment project for PT. Bentang Inspirasi Teknologi: a 6-service microservices platform (API Gateway, RBAC, Master Data, Transaction, Document, Frontend) built with Node.js 20, TypeScript, Express, Prisma, React 18, and Docker Compose. Secure auth with asymmetric JWT (RS256), argon2id, and refresh-token rotation with reuse detection; upload pipeline with magic-byte validation, ClamAV scanning, and SHA-256 checksums; MySQL + PostgreSQL data layer, Vitest test suite, and full documentation (ERD, OpenAPI spec, security audit, ADRs).",
    proofs: [],
    links: [
      {
        name: "Aplikasi_beasiswa",
        href: "https://github.com/GhifariAlwy/Aplikasi_beasiswa",
      },
      {
        name: "api-gateway",
        href: "https://github.com/GhifariAlwy/api-gateway",
      },
      {
        name: "service-rbac",
        href: "https://github.com/GhifariAlwy/service-rbac",
      },
      {
        name: "service-master",
        href: "https://github.com/GhifariAlwy/service-master",
      },
      {
        name: "service-dokumen",
        href: "https://github.com/GhifariAlwy/service-dokumen",
      },
      {
        name: "frontend",
        href: "https://github.com/GhifariAlwy/frontend",
      },
    ],
  },
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
      "End-to-end requirements engineering and system design for a photo studio booking platform: 40 functional + 14 non-functional requirements, FOOM business modeling (DFD, ERD with 10 entities), and full OOAD (23 use cases, activity, sequence and class diagrams) for a layered PWA with Midtrans/Xendit payment gateway and 100% RTM coverage across 54 requirements.",
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
      "Digital library management system built with Laravel + MySQL (MVC) that digitalizes cataloging, borrowing, returning, and review workflows. Features AI-based image analysis to detect book damage from return photos with a confidence score and suggested fine, automated fine calculation and email notifications, and a CI/CD pipeline with GitHub Actions + SonarCloud.",
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
      "Full-stack learning platform: React.js web app with a Laravel MVC backend, plus a Flutter mobile app powered by an Express.js REST API (OOP-based MVC). Includes JWT auth with two-factor authentication (OTP) and Multer-based file upload handling.",
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
  {
    title: "Restaurant Order Management System",
    period: "Jun 2024",
    description:
      "WinForms desktop app for managing restaurant orders, built with C# .NET Framework using an MVC architecture. Orders flow through a state machine (Pending → Processing → Completed/Cancelled) implemented with Design by Contract principles to enforce valid transitions and pre/post-condition integrity.",
    proofs: [],
    links: [
      {
        name: "TUBES_KPL_GUI",
        href: "https://github.com/Aldinorasend/TUBES_KPL_GUI",
      },
    ],
  },
];
