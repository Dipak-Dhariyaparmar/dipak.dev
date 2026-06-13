export const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/engineering", label: "Engineering" },
  { href: "/writing", label: "Writing" },
  { href: "/journey", label: "Journey" },
  { href: "/lab", label: "Lab" },
  { href: "/hire-me", label: "Hire Me" },
  { href: "/connect", label: "Connect" }
];

export const buildAreas = [
  {
    title: "AI Platforms",
    copy: "Interfaces, workflows, and backend services that make AI features useful inside real products."
  },
  {
    title: "Healthcare Systems",
    copy: "Secure product experiences for patient data, clinical workflows, and operational clarity."
  },
  {
    title: "Marketplaces",
    copy: "Discovery, transactions, dashboards, and admin systems designed for repeat usage."
  },
  {
    title: "Real-Time Applications",
    copy: "Live states, fast APIs, and user experiences where delay is part of the product risk."
  },
  {
    title: "SaaS Products",
    copy: "Multi-role software with authentication, analytics, workflows, and production-grade foundations."
  }
];

export const projects = [
  {
    name: "RiseMind",
    label: "AI Mental Performance Platform",
    description: "A product-led AI experience focused on guided growth, intelligent workflows, and measurable progress.",
    challenge: "Turn AI from a novelty into a structured product users can trust repeatedly.",
    technologies: ["Next.js", "Node.js", "MongoDB", "AI APIs", "Auth"],
    architecture: "App Router frontend, API services, persisted user journeys, and modular AI orchestration.",
    solution: "Designed the experience around guided outcomes, reusable flows, and AI interactions that support a real user journey.",
    tradeoffs: "Kept the AI layer modular so product flows can evolve without rewriting the core application.",
    impact: "Created a clearer path from prompt interaction to product experience.",
    learnings: "AI products need structure, memory, and measurable feedback loops more than one-off prompts."
  },
  {
    name: "MyVitalView",
    label: "Healthcare Intelligence System",
    description: "A healthcare-focused interface for viewing, organizing, and acting on vital patient information.",
    challenge: "Balance clean UX with privacy, reliability, and data-heavy workflows.",
    technologies: ["React", "Express", "MongoDB", "REST APIs", "Role Access"],
    architecture: "Role-based dashboard, API gateway patterns, data validation, and modular clinical views.",
    solution: "Built clean, role-aware interfaces that help teams read important information quickly and act with confidence.",
    tradeoffs: "Prioritized clarity, validation, and predictable navigation over decorative complexity.",
    impact: "Improved how sensitive information is scanned, understood, and moved through workflows.",
    learnings: "Healthcare interfaces demand trust, information hierarchy, and careful handling of edge cases."
  },
  {
    name: "RedSand",
    label: "Marketplace Product",
    description: "A commerce and marketplace experience shaped around discovery, inventory, and operations.",
    challenge: "Make complex product states feel simple for buyers, sellers, and administrators.",
    technologies: ["Next.js", "TypeScript", "Payments", "Admin Tools"],
    architecture: "Product catalog, transaction flows, admin modules, and reusable domain components.",
    solution: "Created a product foundation for discovery, listings, operational control, and user-facing commerce flows.",
    tradeoffs: "Separated marketplace logic from presentation so buyer, seller, and admin workflows can scale independently.",
    impact: "Built the product foundation needed for scalable marketplace behavior.",
    learnings: "Marketplaces succeed when operational tools are treated as seriously as the customer experience."
  },
  {
    name: "HypeFresh",
    label: "Culture and Content Platform",
    description: "A fast content product for publishing, browsing, and presenting high-energy digital media.",
    challenge: "Keep the interface editorial and modern without sacrificing performance.",
    technologies: ["React", "CMS", "SEO", "Analytics"],
    architecture: "Content-driven frontend, optimized rendering, publishing workflows, and SEO-first routes.",
    solution: "Improved publishing structure, frontend performance, and the editorial presentation of fast-moving content.",
    tradeoffs: "Balanced visual energy with fast rendering and readable content hierarchy.",
    impact: "Delivered a faster, more polished content experience for readers.",
    learnings: "Content products need performance, publishing discipline, and a visual system that can handle volume."
  }
];

export const companyBuilds = [
  {
    title: "SaaS Platforms",
    problem: "Teams need repeatable workflows, roles, billing-ready foundations, and product analytics.",
    solution: "I build structured SaaS products with dashboards, permissions, APIs, and scalable frontend architecture.",
    uses: "Founder MVPs, B2B tools, customer portals"
  },
  {
    title: "AI-Powered Applications",
    problem: "AI features often stay as demos instead of becoming useful product workflows.",
    solution: "I connect AI models to product logic, data, UX, and measurable outcomes.",
    uses: "AI assistants, workflow automation, decision support"
  },
  {
    title: "Healthcare Systems",
    problem: "Healthcare teams need secure, clear, and reliable interfaces for sensitive information.",
    solution: "I design role-aware systems that prioritize trust, validation, and operational clarity.",
    uses: "Patient dashboards, admin panels, clinical workflows"
  },
  {
    title: "Admin Dashboards",
    problem: "Operations slow down when internal tools are scattered, manual, or hard to read.",
    solution: "I create dashboards that make data, actions, and workflows easier for teams to manage.",
    uses: "Operations, support, reporting, approvals"
  },
  {
    title: "Internal Business Tools",
    problem: "Growing teams outgrow spreadsheets and need software shaped around their process.",
    solution: "I turn internal workflows into reliable tools with authentication, validation, and clean UX.",
    uses: "CRMs, workflow apps, team portals"
  },
  {
    title: "Marketplace Platforms",
    problem: "Marketplaces need buyer, seller, and admin flows that stay understandable as volume grows.",
    solution: "I build product catalogs, transaction flows, and operational tooling around marketplace behavior.",
    uses: "Listings, vendor portals, commerce workflows"
  },
  {
    title: "Real-Time Applications",
    problem: "Some products lose value when updates feel delayed or disconnected.",
    solution: "I build responsive experiences with live state, fast APIs, and reliable interaction patterns.",
    uses: "Collaboration tools, live dashboards, messaging"
  },
  {
    title: "Developer Platforms",
    problem: "Technical users need products that are clear, documented, and easy to integrate.",
    solution: "I create API-first experiences with strong docs, onboarding, and maintainable architecture.",
    uses: "API products, integration portals, dev tools"
  }
];

export const engagementModels = [
  {
    title: "Part-Time Product Engineer",
    description: "Ongoing product engineering support for teams that need senior ownership without a full-time hire.",
    client: "Startups with a roadmap, active users, or a founder-led product.",
    scope: "Feature delivery, architecture improvements, API work, frontend systems"
  },
  {
    title: "Contract Full Stack Developer",
    description: "Focused development for well-defined product features, dashboards, integrations, and backend systems.",
    client: "Agencies, CTOs, and teams that need reliable execution.",
    scope: "2-12 week builds, integrations, refactors, production fixes"
  },
  {
    title: "MVP Development Partner",
    description: "From product requirements to a launch-ready first version with clean foundations.",
    client: "Founders validating a SaaS, AI, marketplace, or internal tool idea.",
    scope: "Discovery, architecture, UI, APIs, deployment, launch support"
  },
  {
    title: "Technical Consultant",
    description: "Technical clarity for architecture, product feasibility, and implementation planning.",
    client: "Founders and managers deciding what to build, fix, or scale next.",
    scope: "System audits, roadmap planning, stack decisions, technical specs"
  },
  {
    title: "Feature Development Partner",
    description: "A focused partner for shipping high-value features without slowing the core team.",
    client: "Growing teams with clear product opportunities and limited bandwidth.",
    scope: "Feature modules, admin panels, AI flows, performance improvements"
  }
];

export const trustReasons = [
  "Product Thinking",
  "Full Stack Ownership",
  "Fast Iteration",
  "Production Experience",
  "AI Integration Expertise",
  "Modern Architecture Practices",
  "Clear Communication",
  "Startup-Friendly Collaboration"
];

export const proofPoints = [
  {
    quote: "Built product features with ownership across frontend, backend, APIs, and deployment, keeping delivery practical and business-focused.",
    label: "Full Stack Delivery"
  },
  {
    quote: "Comfortable turning unclear requirements into structured flows, clean data models, and usable interfaces for real users.",
    label: "Product Execution"
  },
  {
    quote: "Focused on clear communication, fast iteration, and technical decisions that help teams move without losing maintainability.",
    label: "Team Collaboration"
  }
];

export const workingProcess = [
  { step: "01", title: "Discovery", copy: "Understanding business goals, users, risks, and success criteria." },
  { step: "02", title: "Planning", copy: "Architecture, scope, technical roadmap, and delivery milestones." },
  { step: "03", title: "Development", copy: "Iterative product delivery with clear communication and review cycles." },
  { step: "04", title: "Launch", copy: "Deployment, production checks, handoff, and support for real users." },
  { step: "05", title: "Scale", copy: "Optimization, reliability improvements, and future product evolution." }
];

export const engineeringPrinciples = [
  {
    title: "Start With Business Risk",
    copy: "Before choosing tools, I identify what can hurt the product: slow delivery, unclear user flows, weak data structure, security gaps, expensive scaling, or brittle integrations.",
    value: "This helps founders avoid building a technically impressive system that does not solve the real business problem."
  },
  {
    title: "Design For Change",
    copy: "Early products change fast. I separate UI, domain logic, API contracts, and persistence so features can evolve without rewriting the whole product.",
    value: "This keeps MVPs fast while protecting the product from becoming painful after the first users arrive."
  },
  {
    title: "Make Systems Observable",
    copy: "Good software should explain what happened. I think about logs, errors, loading states, validation, analytics events, and admin visibility from the beginning.",
    value: "Teams can debug problems, understand users, and make better product decisions after launch."
  },
  {
    title: "Optimize For Real Users",
    copy: "Performance is not only Lighthouse. It includes fast navigation, clear feedback, predictable states, and APIs that behave consistently under real usage.",
    value: "Users feel the product is reliable, which directly improves trust, retention, and conversion."
  }
];

export const engineeringSystems = [
  {
    title: "Authentication & Access Control",
    founderProblem: "As soon as a product has multiple roles, weak permission design creates security risk and product confusion.",
    approach: "I model users, roles, protected routes, API authorization, session handling, and onboarding flows as one connected system.",
    decisions: ["Role-based access rules", "Secure token/session handling", "Protected server actions and APIs", "Clear empty and denied states"],
    businessValue: "The product can safely support admins, customers, teams, and internal users without messy permission logic later."
  },
  {
    title: "System Design",
    founderProblem: "Many MVPs work in demos but break when real users, data, payments, and admin workflows arrive.",
    approach: "I break the product into clear domains, define data ownership, choose simple service boundaries, and avoid complexity until the product earns it.",
    decisions: ["Domain-first module structure", "Reusable service layer", "Async jobs for slow workflows", "Deployment strategy matched to budget"],
    businessValue: "You get a system that can launch quickly and still has a path to scale."
  },
  {
    title: "Database Design",
    founderProblem: "Bad data models make future features slow, reporting unreliable, and product behavior hard to change.",
    approach: "I design schemas around product behavior: ownership, status changes, history, relationships, search, and reporting needs.",
    decisions: ["Clear entity relationships", "Indexes for common queries", "Validation at API boundaries", "Audit-friendly timestamps and states"],
    businessValue: "The team can add features, dashboards, and analytics without fighting the database."
  },
  {
    title: "API Design",
    founderProblem: "Frontend speed drops when APIs are inconsistent, over-fetching, under-fetching, or shaped around database tables instead of user actions.",
    approach: "I design APIs around workflows, predictable contracts, validation, error handling, and future integrations.",
    decisions: ["Workflow-based endpoints", "Typed request and response shapes", "Consistent error structure", "Pagination, filtering, and rate awareness"],
    businessValue: "Frontend, backend, mobile, and third-party integrations can move faster with fewer misunderstandings."
  },
  {
    title: "Scalability",
    founderProblem: "Founders often worry about scale too early or ignore the parts that will actually fail first.",
    approach: "I focus on practical scale: database query patterns, caching opportunities, background work, asset optimization, and deployment limits.",
    decisions: ["Measure before optimizing", "Cache stable reads", "Move slow tasks out of request cycles", "Keep infrastructure understandable"],
    businessValue: "The product stays cost-conscious while being ready for real growth."
  },
  {
    title: "Performance",
    founderProblem: "Slow pages, heavy dashboards, and delayed actions make users lose trust even when the feature technically works.",
    approach: "I improve server rendering, loading states, API latency, component structure, image strategy, and frontend bundle weight.",
    decisions: ["Server components where useful", "Lazy load non-critical UI", "Optimistic states for user actions", "Query and payload reduction"],
    businessValue: "Faster experiences improve conversion, engagement, and perceived product quality."
  },
  {
    title: "Cloud Architecture",
    founderProblem: "A product needs deployment, environments, secrets, logs, and recovery paths, not just code pushed to a server.",
    approach: "I keep cloud architecture simple but production-aware: Vercel/Render, managed databases, environment configuration, monitoring, and release discipline.",
    decisions: ["Separate dev and production config", "Managed database choices", "CI/build checks", "Rollback-aware deployment process"],
    businessValue: "The team can ship confidently without creating infrastructure overhead too early."
  }
];

export const architectureFlow = [
  "User Experience",
  "Frontend State",
  "API Contract",
  "Domain Logic",
  "Database",
  "Observability"
];

export const engineeringPlaybooks = [
  {
    title: "MVP To Production",
    copy: "Ship the first version quickly, but keep authentication, data modeling, validation, deployment, and error handling clean enough that the MVP can become the real product."
  },
  {
    title: "AI Feature Integration",
    copy: "Move beyond prompt boxes by connecting AI to user goals, product context, saved state, guardrails, and workflows that produce repeatable value."
  },
  {
    title: "Dashboard & Internal Tools",
    copy: "Create operational software that helps teams scan data, take action, filter information, and reduce manual work without creating training overhead."
  },
  {
    title: "Technical Rescue",
    copy: "Stabilize slow, confusing, or fragile products by auditing the architecture, finding the highest-impact fixes, and improving the system without unnecessary rewrites."
  }
];

export const writingNotes = [
  {
    title: "How I Design Production-Ready MVP Architecture",
    date: "Engineering Note",
    read: "6 min",
    summary: "A practical breakdown of how I think about authentication, data models, API boundaries, deployment, and future feature growth before writing the first version."
  },
  {
    title: "Turning AI Features Into Real Product Workflows",
    date: "AI Product Thinking",
    read: "5 min",
    summary: "AI becomes useful when it is connected to user intent, saved context, feedback loops, and clear product outcomes instead of isolated prompt boxes."
  },
  {
    title: "What Reliable APIs Teach You About Product Quality",
    date: "Backend Systems",
    read: "4 min",
    summary: "Good APIs make teams faster: predictable errors, clean contracts, validation, pagination, and workflow-based endpoints reduce confusion across the product."
  },
  {
    title: "Why Internal Tools Deserve Better Design",
    date: "Product Operations",
    read: "5 min",
    summary: "Dashboards and admin panels directly affect support, operations, and decision-making, so they need the same care as customer-facing interfaces."
  }
];

export const labExperiments = [
  {
    title: "AI Workflow Console",
    status: "Prototype",
    copy: "A focused interface for testing AI prompts, saving useful outputs, and turning repeated prompts into structured workflows."
  },
  {
    title: "API Health Monitor",
    status: "Utility",
    copy: "A small dashboard concept for checking endpoint uptime, response time, and recent failures before users report issues."
  },
  {
    title: "Admin UI Patterns",
    status: "Interface Study",
    copy: "Reusable table, filter, role, and action patterns for building internal tools that stay readable as data grows."
  },
  {
    title: "Realtime Presence Demo",
    status: "Experiment",
    copy: "A live-state prototype exploring presence indicators, optimistic updates, and collaboration feedback for modern web apps."
  },
  {
    title: "Developer Automation Scripts",
    status: "Tooling",
    copy: "Small utilities for speeding up repetitive project setup, validation, and deployment preparation work."
  },
  {
    title: "SaaS Onboarding Flow",
    status: "Product Study",
    copy: "An onboarding concept focused on activation: account setup, first project creation, guided empty states, and next-best actions."
  }
];

export const dashboardSignals = [
  {
    title: "Current Focus",
    value: "SaaS, AI Products, Internal Tools",
    copy: "Building systems where product thinking, clean UX, and backend reliability matter together."
  },
  {
    title: "Working Style",
    value: "Async, Clear, Ownership-Driven",
    copy: "I prefer clear scopes, regular progress updates, practical decisions, and visible delivery momentum."
  },
  {
    title: "Availability",
    value: "10-20 Hours / Week",
    copy: "Open for freelance projects, contract engineering, startup collaboration, and technical consulting."
  }
];

export const timeline = [
  { year: "2022", title: "Started Learning Development", copy: "Built the base: frontend, backend, databases, and deployment fundamentals." },
  { year: "2024", title: "Joined StellarMind", copy: "Moved into real product work and started shipping systems with users and constraints." },
  { year: "2024", title: "Built AI Platforms", copy: "Explored AI-powered workflows, product UX, and full stack integration patterns." },
  { year: "2025", title: "Built Healthcare Systems", copy: "Worked on data-heavy, trust-sensitive interfaces for healthcare use cases." },
  { year: "2025", title: "Joined Technource", copy: "Expanded into broader production systems, teams, and client-facing delivery." },
  { year: "Future", title: "Building Products At Scale", copy: "Focused on engineering depth, product taste, and systems that compound over time." }
];

export const socials = [
  { label: "Email", href: "mailto:dipakdhariyaparmar@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dipak-dhariyaparmar-034a66299/" },
  { label: "Calendly", href: "https://calendly.com/dipakdhariyaparmar/30min" }
];
