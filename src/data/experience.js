import dashDismAnalytics1 from "../assets/dash-dism-analytics-1.jpg";
import dashDismAnalytics2 from "../assets/dash-dism-analytics-2.jpg";

export const experience = [
  {
    role: "Full Stack Developer (Freelance)",
    company: "CV. Permata Alam Perkasa",
    period: "Aug 2026 — Present",
    current: true,
    proofs: [
      {
        name: "odoo_demo",
        href: "https://github.com/GhifariAlwy/odoo_demo",
        src: "https://opengraph.githubassets.com/1/GhifariAlwy/odoo_demo",
        alt: "GitHub repository preview for odoo_demo",
      },
    ],
    bullets: [
      "Developing and customizing an ERP system on the Odoo framework to support end-to-end operations of a retreaded and truck tire distribution company.",
      "Configuring and managing the Inventory module to track stock levels, warehouse locations, and product movement.",
      "Setting up Sales and Purchase modules to manage distribution, incoming/outgoing goods, and vendor/customer transactions.",
      "Implementing the Accounting module for financial recording and reporting aligned with business processes.",
      "Configuring Employees/Attendance and Product modules, including categories and pricing structures.",
    ],
  },
  {
    role: "System Analyst",
    company: "Yunas Studio",
    period: "Sep 2025 — Jul 2026",
    current: false,
    proofs: [],
    bullets: [
      "Led requirements engineering for a photo studio booking platform: 40 functional and 14 non-functional requirements across three roles (Customer, Admin, Superadmin).",
      "Produced FOOM documentation (DFD and ERD with 10 entities) and full OOAD artifacts — 23 use cases, 23 activity diagrams, 23 sequence diagrams, and a class diagram with 9 core classes.",
      "Designed a layered PWA architecture with payment gateway integration (Midtrans/Xendit).",
      "Authored the SRS and SDD with a requirements traceability matrix covering 54 requirements (100% coverage).",
      "Validated deliverables with stakeholders, achieving 100% approval across review sessions.",
    ],
  },
  {
    role: "Internship, IT Support Specialist — Project & Service Delivery 2 Division",
    company: "PT Infrastruktur Telekomunikasi Indonesia",
    period: "Jul 2025 — Sep 2025",
    current: false,
    proofs: [
      {
        name: "dash-dism-analytics-1.jpg",
        src: dashDismAnalytics1,
        alt: "Analytics dashboard displayed on a monitor",
      },
      {
        name: "dash-dism-analytics-2.jpg",
        src: dashDismAnalytics2,
        alt: "Project planning documents on a desk",
      },
    ],
    bullets: [
      "Developed DASH-DISM, a web-based dashboard prototype for monitoring microwave antenna dismantling on the 1879 HOP project (React.js/TypeScript frontend, Express.js backend).",
      "Designed role-based authentication and access control for three roles: Project Manager, Field Coordinator, and Data Entry User.",
      "Built a collaborative data entry portal for daily plan and actual reporting, replacing manual recap via Notepad and WhatsApp groups.",
      "Developed an analytics dashboard with real-time S-Curve visualization, weekly dismantling charts, and KPI-weighted progress breakdowns.",
      "Implemented automated reporting with Excel import/export and audit logs; provided hardware, software, and network troubleshooting support.",
    ],
  },
];
