// Static project data for the Projects section.
//
// -------------------------------------------------------------
// HOW TO MANAGE PROJECTS:
// -------------------------------------------------------------
// 1. ADD a project:
//    Add a new object to the `projects` array below.
//
// 2. EDIT a project:
//    Modify any field (name, kind, period, summary, handled, stack, image, links).
//
// 3. REMOVE a project:
//    Delete or comment out its object from the `projects` array.
//
// 4. CATEGORIES:
//    Each project specifies an array of categories, e.g. ["Web"] or ["Web", "Mobile"].
//    The categories that appear in the sidebar/tabs are defined in `projectCategories`.
//
// 5. SHOWCASE IMAGE:
//    Set `image` to an imported image file or path.
//    If `image` is null or not provided, ProjectShowcase automatically defaults to `forekas-crm.png`.
// -------------------------------------------------------------

import forekasCrm from "../projects/forekas-crm.png";

export const projectCategories = ["All", "Web", "Mobile"];

const projects = [
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
    image: forekasCrm,
    links: { caseStudy: null, source: null },
  }
];

export default projects;
