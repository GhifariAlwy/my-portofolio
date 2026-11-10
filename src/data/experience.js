import dashDismAnalytics1 from "../assets/dash-dism-analytics-1.jpg";
import dashDismAnalytics2 from "../assets/dash-dism-analytics-2.jpg";

export const experience = [
  {
    role: "Technical Writer",
    company: "PT. Bentang Inspira Teknologi (Project SPLP)",
    period: "Sep 2026 — Present",
    current: true,
    proofs: [],
    bullets: [
      "Authored comprehensive High-Level Design (HLD) and Low-Level Design (LLD) technical documentation for the National Government Service Integration System (Sistem Penghubung Layanan Pemerintah / SPLP), establishing clear architectural baselines, system specifications, and acceptance criteria for engineering and QA teams.",
      "Documented end-to-end SPLP Portal Management specifications across Frontend and Backend microservices, detailing UI/UX workflows, role-based access control (RBAC), RESTful API contracts, data models, and state transitions to support functional and integration testing.",
      "Produced detailed integration, routing, and policy documentation for WSO2 API Manager (WSO2 APIM) and WSO2 Identity Server (WSO2 IS), defining API gateway throttling/rate-limiting rules, OAuth2/OIDC authentication flows, and centralized identity governance.",
      "Authored technical architecture, message routing flows, and capacity planning documentation for the event-driven platform powered by Apache Kafka (KRaft mode) and Go-based Message Exchange Service (MES), specifying topic partitioning, schema validation, and fault-tolerance benchmarks for load and reliability testing.",
      "Documented the full-stack monitoring and observability pipeline utilizing Grafana, Grafana Alloy, Prometheus, Jaeger, and ClickHouse, defining metrics collection, distributed tracing, and centralized audit logging standards to monitor system health and SLA compliance.",
      "Developed technical security and network infrastructure documentation covering Site-to-Site/Client VPN access controls, mTLS encryption, Wazuh SIEM security monitoring, and Intrusion Detection Systems (IDS) to support security auditing and vulnerability verification.",
    ],
  },
  {
    role: "Full Stack Developer (Freelance)",
    company: "CV. Permata Alam Perkasa",
    period: "Aug 2026 — Oct 2026",
    current: false,
    proofs: [
      {
        name: "odoo_demo",
        href: "https://github.com/GhifariAlwy/odoo_demo",
        src: "https://opengraph.githubassets.com/1/GhifariAlwy/odoo_demo",
        alt: "GitHub repository preview for odoo_demo",
      },
    ],
    bullets: [
      "Developed, customized, and performed end-to-end functional quality assurance on an ERP system using the Odoo Framework to support business operations of a retreaded and truck tire distribution company.",
      "Configured and validated the Inventory module to verify accurate stock levels, multi-warehouse locations, and product movement tracking.",
      "Set up and tested the Sales and Purchase modules to verify product distribution workflows, incoming and outgoing goods, and vendor/customer transaction integrity.",
      "Implemented and reconciled the Accounting module to ensure financial recording and reporting accuracy aligned with business processes.",
      "Configured and verified the Employees/Attendance module to manage employee master data and validate daily attendance tracking rules.",
      "Managed and audited the Product module, validating product data, categories, and pricing structures across the ERP system.",
    ],
  },
  {
    role: "System Analyst",
    company: "Yunas Studio",
    period: "Sep 2025 — Jul 2026",
    current: false,
    proofs: [],
    bullets: [
      "Conducted requirements engineering and testability analysis through stakeholder interviews and field observation with Yunas Studio's admin, resulting in 40 Functional Requirements and 14 Non-Functional Requirements with testable acceptance criteria across three user roles (Customer, Admin, Superadmin).",
      "Modeled the existing (as-is) business process using the Functional and Object-Oriented Methodology (FOOM), producing a business Data Flow Diagram (DFD) and an Entity Relationship Diagram (ERD) covering 10 entities including Booking, Payment, Schedule, and Package to verify data integrity.",
      "Designed and validated system behavior using Object-Oriented Analysis and Design (OOAD), producing 23 Use Cases, 23 Activity Diagrams, 23 Sequence Diagrams, and a Class Diagram with 9 core classes and 5 relationship types to serve as functional and scenario-based test specifications.",
      "Designed and verified a layered system architecture (Frontend, Backend, External Services, Database) for a Progressive Web App (PWA), including integration workflows with a Payment Gateway (Midtrans/Xendit) to automate payment verification and eliminate manual confirmation errors via WhatsApp.",
      "Authored a Software Requirements Specification (SRS) and Software Design Document (SDD), mapping all 54 requirements to design and verification artifacts through a Requirement Traceability Matrix (RTM), achieving 100% requirement and test coverage.",
      "Facilitated User Acceptance Testing (UAT) and stakeholder validation sessions with Yunas Studio's admin, achieving 100% approval across 10 core business process aspects and confirming the system met actual operational needs.",
      "Bridged communication between business stakeholders and the development team, and collaborated with UI/UX designers to validate proposed solutions against real business workflows.",
    ],
  },
  {
    role: "Internship, IT Support Specialist — Project and Service Delivery 2 Division",
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
      "Developed and performed functional quality assurance on DASH-DISM, a web-based Dashboard Analyst prototype for monitoring the dismantling of microwave antennas on the 1879 HOP project, using React.js/TypeScript for the frontend and Express.js for the backend.",
      "Designed, implemented, and verified role-based authentication and access control (RBAC) test scenarios across three user roles (Project Manager, Field Coordinator, and Data Entry User) to ensure strict authorization boundaries.",
      "Built and validated a collaborative data entry portal for daily plan (morning) and daily actual (evening) reporting, eliminating manual data entry errors from Notepad and WhatsApp group recaps.",
      "Verified data accuracy and calculation logic across real-time S-Curve visualizations, weekly dismantling quantity charts, and activity progress breakdowns by weighted KPI.",
      "Tested automated reporting workflows to generate daily plan and actual reports, validating data management features including Excel import validation, data export, and audit logs.",
      "Provided hardware, software, and network troubleshooting and root-cause analysis (RCA) support for internal staff, ensuring minimal downtime and smooth day-to-day operations.",
      "Maintained and audited the Asset Tagging and Tracking application, verifying data accuracy and operational reliability across the division's asset records.",
      "Prepared technical test reports and implementation documentation to support defect tracking, project delivery, and knowledge transfer within the team.",
    ],
  },
];
