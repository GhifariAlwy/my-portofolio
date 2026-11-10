import yunasStudioWorkspace1 from "../assets/yunas-studio-workspace-1.jpg";
import yunasStudioWorkspace2 from "../assets/yunas-studio-workspace-2.jpg";
import studyitCollaboration from "../assets/studyit-collaboration.jpg";

export const projects = [
  {
    title: "Scholarship/Training Registration App",
    period: "Sep 2026",
    description:
      "Recruitment project for PT. Bentang Inspira Teknologi: designed, built, and verified a 6-service microservices architecture (API Gateway, RBAC, Master Data, Transaction, Document, Frontend) with Node.js 20, TypeScript, Express, Prisma, React 18, and Docker Compose. Automated unit and integration tests via Vitest, asymmetric JWT (RS256) with argon2id and refresh-token reuse detection, Docker private-network isolation (rate limiting, CORS whitelisting, Helmet), secure upload pipeline (magic-byte validation, ClamAV antivirus, UUID storage, SHA-256 checksums), MySQL + PostgreSQL (JSONB) 14-table state-machine workflow, and full QA/technical documentation (ERD, OpenAPI spec, security audit, ADRs).",
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
    period: "Aug 2026 — Oct 2026",
    description:
      "Developed, customized, and performed end-to-end functional quality assurance on an ERP system using the Odoo framework for a retreaded and truck tire distribution company. Configured, reconciled, and validated Inventory (multi-warehouse stock tracking), Sales & Purchase workflows, Accounting, Employees/Attendance rules, and Product pricing structures.",
    proofs: [],
    links: [
      {
        name: "odoo_demo",
        href: "https://github.com/GhifariAlwy/odoo_demo",
      },
    ],
  },
  {
    title: "Yunas Studio — Capstone System Analysis",
    period: "Sep 2025 — Jul 2026",
    description:
      "End-to-end requirements engineering, testability analysis, and system design for a photo studio booking PWA: 40 functional + 14 non-functional requirements with testable acceptance criteria, FOOM business modeling (DFD, 10-entity ERD), and full OOAD (23 use cases, activity, sequence, and 9-class diagrams) for Midtrans/Xendit payment automation. Authored SRS & SDD with 100% RTM coverage across 54 requirements and led UAT achieving 100% stakeholder approval across 10 core business process aspects.",
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
      {
        name: "System Analysis Docs",
        href: "https://drive.google.com/drive/folders/1BgGARaNlHF4TpT5QCr--qUiNpg8M7KVw?usp=sharing",
      },
    ],
  },
  {
    title: "ShelfLink — Digital Library Management System",
    period: "Sep 2025 — Jun 2026",
    description:
      "Academic startup project built with Laravel + MySQL (MVC) to digitalize book cataloging, borrowing, returning, and review workflows. Set up an automated CI/CD pipeline via GitHub Actions running PHPUnit test suites on every commit, integrated with SonarCloud for static code analysis and test coverage tracking. Led functional, regression, and usability testing across RBAC, AI image book-damage detection (confidence thresholds), boundary-checked fine calculation, and Laravel Mail notifications.",
    proofs: [
      {
        name: "ShelfLink",
        href: "https://github.com/PajarAland/ShelfLink/tree/Ghifari",
        src: "https://opengraph.githubassets.com/1/PajarAland/ShelfLink",
        alt: "ShelfLink GitHub repository preview",
      },
    ],
    links: [
      {
        name: "ShelfLink",
        href: "https://github.com/PajarAland/ShelfLink/tree/Ghifari",
      },
    ],
  },
  {
    title: "DASH-DISM",
    period: "Jul 2025 — Sep 2025",
    description:
      "Dashboard Analyst prototype (React.js/TypeScript + Express.js) for monitoring microwave antenna dismantling on the 1879 HOP telecom project. Performed functional QA and verified RBAC test scenarios across three roles, validated collaborative morning/evening reporting replacing manual Notepad/WhatsApp recaps, verified S-Curve and weighted KPI calculations, and tested Excel import validation, export, and audit logs.",
    proofs: [
      {
        name: "TI-dismantling-project-dashboard",
        href: "https://github.com/GhifariAlwy/TI-dismantling-project-dashboard",
        src: "https://opengraph.githubassets.com/1/GhifariAlwy/TI-dismantling-project-dashboard",
        alt: "GitHub repository preview for TI dismantling project dashboard",
      },
    ],
    links: [
      {
        name: "TI-dismantling-project-dashboard",
        href: "https://github.com/GhifariAlwy/TI-dismantling-project-dashboard",
      },
    ],
  },
  {
    title: "Restaurant Order Management System",
    period: "Jun 2024",
    description:
      "WinForms desktop app built with C# .NET Framework using MVC architecture to separate business logic, UI, and data layers for testability. Implemented strict input validation, boundary checks, defensive coding, JSON persistence (System.Text.Json), and a table-driven order state machine (Pending → Processing → Completed/Cancelled) with generic classes and Design by Contract (DbC) assertions.",
    proofs: [],
    links: [
      {
        name: "TUBES_KPL_GUI",
        href: "https://github.com/Aldinorasend/TUBES_KPL_GUI",
      },
    ],
  },
  {
    title: "StudyIT & StudyIT Mobile",
    period: "Sep 2023 — Jun 2024",
    description:
      "Cross-platform web and mobile learning platform built and tested using React.js, Flutter, Laravel MVC, and an OOP-based MVC Express.js REST API. Verified responsive cross-device UIs, API endpoints across resource controllers, JWT authentication, two-factor authentication (OTP), and secure file upload validation (Multer).",
    proofs: [
      {
        name: "studyit-collaboration.jpg",
        href: "https://github.com/Aldinorasend/WebStudyIT.git",
        src: studyitCollaboration,
        alt: "Students collaborating with laptops",
      },
    ],
    links: [
      {
        name: "WebStudyIT",
        href: "https://github.com/Aldinorasend/WebStudyIT.git",
      },
    ],
  },
];
