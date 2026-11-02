// Static project data for the Projects section.
// `links.caseStudy` / `links.source` → set to a URL to show the button,
// or `null` to show a muted "private" state (e.g. client work under NDA).

export const projectCategories = ["All", "Web", "Mobile"];

const projects = [
  {
    id: "sari-sari-events",
    name: "Sari-Sari Events",
    year: "2025",
    kind: "Web app",
    categories: ["Web"],
    period: "2025",
    summary:
      "Event booking and management platform for organizers, vendors and guests, from listing to check-in.",
    handled: [
      "Front-end and back-end feature development",
      "Database schema design for events, bookings and vendors",
      "Deployment and environment setup on AWS",
    ],
    stack: ["React", "FastAPI", "PostgreSQL", "AWS"],
    links: { caseStudy: null, source: null },
  },
  {
    id: "forekas-crm",
    name: "Forekas CRM",
    year: "2025",
    kind: "Web app",
    categories: ["Web"],
    period: "2025",
    summary:
      "Customer relationship manager for tracking leads, deals and client activity across a sales team.",
    handled: [
      "Built pipeline, contact and activity modules",
      "Modeled relational data for leads, accounts and deals",
      "Shipped and maintained the production build",
    ],
    stack: ["React", "Tailwind", "FastAPI", "PostgreSQL"],
    links: { caseStudy: null, source: null },
  },
  {
    id: "pos-loyalty-suite",
    name: "POS & Loyalty Suite",
    year: "2025 to now",
    kind: "Hardware",
    categories: ["Mobile", "Web"],
    period: "2025 to now",
    summary:
      "Point of sale, loyalty, membership and inventory, connected to NFC card readers and QR/barcode scanners.",
    handled: [
      "Integrated NFC readers and QR/barcode scanners",
      "Multi-tenant back end deployed on AWS",
      "Presented releases to clients and gathered feedback",
    ],
    stack: ["React Native", "Expo", "NFC", "PostgreSQL"],
    links: { caseStudy: null, source: null },
  },
  {
    id: "undergraduate-thesis",
    name: "Undergraduate Thesis",
    year: "Capstone",
    kind: "Research",
    categories: ["Web"],
    period: "CvSU · Bacoor",
    summary:
      "My capstone system at Cavite State University, where I was the main programmer behind its core features.",
    handled: [
      "Led implementation of the system's core functionality",
      "Built, tested and integrated the full stack",
      "Documented the system for the thesis defense",
    ],
    stack: ["React", "FastAPI", "PostgreSQL"],
    links: { caseStudy: null, source: null },
  },
];

export default projects;

