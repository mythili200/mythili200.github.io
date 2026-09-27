export const profile = {
  name: "Mythili P",
  title: "Software Developer",
  subtitle: "MERN Stack Developer",
  location: "Erode, Tamil Nadu, India",
  email: "mythili4997@gmail.com",
  phone: "9360757066",
  linkedin: "https://www.linkedin.com/in/mythilipc/",
  github: "https://github.com/mythili200",
  website: "https://mythili200.github.io",
  resume: "/assets/resume/Mythili_Software_Developer.PDF",
  summary:
    "Software Developer with 2.5 years of experience building scalable, dynamic web applications using Laravel, PHP, MySQL, React.js, Node.js, and MongoDB. Skilled in developing RESTful APIs, optimizing database performance, and delivering responsive, user-focused web solutions. Experienced with AI integration using Ollama.",
};

export const navItems = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["contact", "Contact"],
];

export const experiences = [
  {
    company: "Ascent E Digit Solutions Private Limited",
    role: "Software Developer",
    duration: "May 2026 – Present",
    location: "Erode, India · Onsite",
    technologies: ["Laravel", "PHP", "MySQL", "REST APIs"],
    bullets: [
      "Developed and maintained web applications using Laravel, PHP, and MySQL.",
      "Built and integrated REST APIs using Laravel.",
      "Fixed bugs and improved the performance of existing modules.",
      "Worked with the team to develop new features and complete tasks on time.",
      "Collaborated with cross-functional teams to gather requirements, implement features, and deliver projects on schedule.",
    ],
  },
  {
    company: "Wellspring Systems Pvt Ltd",
    role: "Software Engineer",
    duration: "August 2023 – October 2025",
    location: "Chennai, India · Remote",
    technologies: [
      "React.js",
      "MUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenSearch",
    ],
    bullets: [
      "Developed and maintained scalable React.js applications using Material-UI, implementing responsive layouts with Flexbox, Grid, and MUI breakpoints.",
      "Built interactive dashboards using React ApexCharts and ECharts for data visualization and analytics.",
      "Optimized frontend performance using React hooks, memoization, and component optimization to reduce re-renders.",
      "Designed and integrated RESTful APIs using Node.js and Express.js for seamless frontend-backend communication.",
      "Integrated OpenSearch for efficient data indexing and high-performance search functionality.",
      "Implemented JWT and OAuth authentication/authorization to secure application access.",
      "Managed API calls using Axios and Fetch with proper loading and error states.",
      "Wrote unit and UI test cases using Jest and performed manual and end-to-end testing using Postman and browser developer tools in Agile environments.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "JavaScript (ES6+)",
      "TypeScript (Basic)",
      "React.js",
      "Next.js",
      "React Router",
      "Redux",
      "Context API",
      "Material-UI",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    items: [
      "Laravel",
      "PHP",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
      "OAuth",
      "OpenSearch",
    ],
  },
  {
    title: "Database",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools & Testing",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Jest",
      "Unit Testing",
      "API Testing",
      "AWS",
      "Vercel",
      "Netlify",
      "Render",
    ],
  },
];

export const projects = [
  {
    id: "devflow",
    name: "DevFlow – Engineering Project & Issue Tracker",
    category: "Full-Stack MERN · Real-Time System",
    description:
      "A comprehensive Jira/Linear-grade engineering issue tracker and project management platform. Features interactive sprint velocity & burndown charts, real-time Socket.io state synchronization, role-based workflows, team workload distribution, and visual screenshot attachments with full-resolution lightbox previews.",
    image: "/assets/img/image2.png",
    screenshots: [
      {
        url: "/assets/img/image2.png",
        title: "Priority Analytics & Real-Time Burndown",
        description:
          "Interactive donut breakdown with centered count, priority status chips, and live delivery burndown velocity.",
      },
      {
        url: "/assets/img/image3.png",
        title: "Delivery Velocity Area Chart & Metrics",
        description:
          "Continuous 7-day velocity chart tracking created vs completed engineering points with linear gradient fills.",
      },
      {
        url: "/assets/img/image3.png",
        title: "Projects Management & Milestone Hub",
        description:
          "Full lifecycle project management with search, status/priority filtering, target deadlines, and team member stacks.",
      },
      {
        url: "/assets/img/devflow-issues.svg",
        title: "Issue Details & Screenshot Lightbox Gallery",
        description:
          "Engineering issue tracking with reproduction steps, inline screenshot attachments gallery, and live activity thread.",
      },
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Socket.io",
      "Tailwind CSS",
      "Recharts",
      "Jest",
    ],
    features: [
      "Real-time synchronized delivery analytics with sprint velocity, burndown, and team workload charts",
      "End-to-end project management with customizable deadlines, team assignment, milestone progress, and cascading deletion",
      "Issue lifecycle management with multi-file screenshot attachments, full-screen lightbox preview, and live Socket.io updates",
      "Role-based access control (Admin, Project Manager, Developer, Tester) with secure JWT authentication",
      "Automated test coverage with Jest ESM test suites and responsive dark-mode architecture",
    ],
    github: "https://github.com/mythili200/subscription-dashboard-task",
    demo: "http://localhost:5173",
  },
  {
    id: "boutique",
    name: "Boutique Website",
    category: "E-Commerce Frontend · React",
    description:
      "A modern, responsive boutique apparel showcase featuring a dynamic lookbook gallery, interactive product catalog filtering, mobile-optimized masonry layouts, and instant customer checkout inquiry.",
    image: "/assets/img/project2.png",
    screenshots: [
      {
        url: "/assets/img/project2.png",
        title: "Boutique Lookbook & Product Catalog",
        description:
          "Responsive collection showcase with modern apparel lookbook, category filtering, and mobile-first design.",
      },
      {
        url: "/assets/img/project22.jpg",
        title: "Collection Details & Sizing Guide",
        description:
          "Interactive product view with fabric details, customer size charts, and quick-inquiry integration.",
      },
    ],
    tags: [
      "React.js",
      "JavaScript (ES6+)",
      "Material-UI",
      "CSS3",
      "Responsive Design",
      "Netlify",
    ],
    features: [
      "Mobile-first responsive boutique storefront optimized across smartphones, tablets, and large screens",
      "Interactive apparel lookbook gallery with category-based filtering and instant search",
      "Clean React component architecture styled with Material-UI and fluid CSS grid animations",
      "Deployed and hosted continuously on Netlify with automated Git continuous deployment",
    ],
    github: "https://github.com/mythili200/Boutique-Website",
    demo: "https://thogaidesigners.netlify.app/",
  },
  {
    id: "aichat",
    name: "AI Chat Application",
    category: "AI Integration · Full-Stack",
    description:
      "A conversational AI assistant application integrating Ollama for local LLM inference with dynamic streaming responses.",
    image: "/assets/img/project3.jpg",
    screenshots: [
      {
        url: "/assets/img/project3.jpg",
        title: "Ollama Local AI Chat Interface",
        description:
          "Clean messaging interface connected to local Ollama inference server with streaming responses.",
      },
    ],
    tags: ["React.js", "Node.js", "Express.js", "Ollama", "REST APIs"],
    features: [
      "Connected the frontend to Ollama for local, privacy-first AI chat",
      "Integrated the tinyllama model for generating fast contextual responses",
    ],
    github: "https://github.com/mythili200/Ai-chat-app",
  },
];

export const education = {
  institution: "Government College of Engineering (IRTT), Erode",
  degree: "B.E. – Computer Science and Engineering",
  cgpa: "8.4",
  school: "GGHS School, Anthiyur",
  schoolQualification: "HSC",
};
