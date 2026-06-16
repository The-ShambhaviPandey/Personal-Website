// PORTFOLIO DATA

// ── PERSONAL INFO ──
export const PERSONAL = {
  name: 'Shambhavi Pandey',
  shortBio: 'Software Development Engineer',
  location: 'Noida, India',
  email: 'theshambhavipandey@gmail.com',
  linkedin: 'https://www.linkedin.com/in/theshambhavipandey/',
  github: 'https://github.com/The-ShambhaviPandey',
  resumeUrl: '/resume.pdf',
}

import CodeClash from '../assets/CodeClash.webp' 

export const HERO_SLIDES = [
  {
    id: 1,
    eyebrow: "Hi, I'm",
    headline: 'Shambhavi Pandey',
    subline: 'Software Development Engineer',
    cta: {
      label: 'Download Resume',
      href: '/resume.pdf',
      type: 'download',
      download: `Shambhavi_Pandey_Resume_${new Date().getFullYear()}.pdf`,
    },
    accent: '#eb801c',
    image:
      'https://images.unsplash.com/photo-1624272926326-a95b3c6e15f2?q=80&w=1170&auto=format&fit=crop',
    darkOverlay: 0, // photo is already dark — shared gradient is enough
  },
  {
    id: 2,
    eyebrow: 'India AI Impact Summit 2026',
    headline: 'Top 2% in India',
    subline: 'National AI Hackathon',
    cta: {
      label: 'Read Here',
      href: '/post/india-ai-impact-summit-2026',
      type: 'link',
    },
    accent: '#db4f4f',
    image:
      'https://exhibitionglobe.com/wp-content/uploads/2025/09/Maharashtra-Government-to-Build-%E2%80%98Bharat-Mandapam-Inspired-Cultural-Centres-in-Key-Cities-scaled.jpg',
    darkOverlay: 0.15, // bright venue interior — needs a heavy scrim
  },
  {
    id: 3,
    eyebrow: 'GDG MGMCoET',
    headline: 'Code Clash 2.0',
    subline: '115+ Participants in Competitive Coding Contest',
    cta: { label: 'Read Here', href: '/post/code-clash-20', type: 'link' },
    accent: '#249661',
    image: CodeClash,
    darkOverlay: 0.05, // takes the edge off without killing the image colour
  },
]

// ── KNOW ME ──
export const KNOW_ME = {
  intro:
    "I've always been drawn toward building things that feel thoughtful, intentional, and lasting. Engineering became a natural extension of that instinct for me — a way to create systems that are reliable, meaningful, and designed with care.",

  body: [
    'My interest in computer science started early through interschool competitions and problem-solving environments that pushed me to think creatively under pressure. Over time, that curiosity evolved into building full-stack applications, experimenting with scalable systems, and participating in hackathons across India.',
    "These days, I spend most of my time exploring backend engineering, system design, and DevOps. I'm especially interested in understanding what happens beneath the surface — from architecture decisions and containerization to deployment workflows, infrastructure, and performance optimization.",
    'Alongside development, data structures and algorithms have become a constant part of my routine and the foundation of how I approach complexity and problem-solving.',
    "Outside engineering, I spend a large part of my time writing and exploring creative work. I've never believed logic and creativity exist separately from each other — to me, the best systems require both empathy and structure.",
    "Currently, I'm pursuing my Bachelor's in Computer Science and Engineering while continuing to grow through open source, collaborative projects, and hands-on learning. Mostly, though, I'm trying to create work that feels meaningful and lasts beyond the moment it was built.",
  ],

  facts: [
    { category: 'Education', items: ['Final Year B.Tech CSE'] },
    { category: 'Location', items: ['Noida, India'] },
    {
      category: 'Focus',
      items: ['Backend', 'System Design', 'DevOps', 'Full Stack'],
    },
    {
      category: 'Communities',
      items: ['Women Techmakers', 'GDG MGMCoET', 'OSCode'],
    },
  ],
}

// ── LEARNINGS ──
// slug must match the slug field in seed.js BLOGS entries for the learning section
export const LEARNINGS = [
  {
    id: 'l1',
    slug: 'devops-and-cloud',
    title: 'DevOps & Cloud',
    type: 'In Progress',
    duration: 'April 2026 - Present',
    description:
      'Exploring Linux systems, containerization, CI/CD workflows, and deployment architecture with a focus on how scalable backend systems behave in production',
    tags: ['AWS', 'Linux', 'Shell Scripting', 'Docker', 'CI/CD'],
  },
  {
    id: 'l2',
    slug: 'data-structures-and-algorithms',
    title: 'Data Structures & Algorithms',
    type: 'Self-Study',
    duration: 'March 2026 - Present',
    description:
      'Practicing problem solving, algorithmic thinking, and interview-focused DSA using Java through structured sheets and coding platforms.',
    tags: ['Java', 'DSA', 'Striver SDE Sheet', 'Problem Solving'],
  },
  {
    id: 'l3',
    slug: 'agentic-ai-openai-sdk',
    title: 'Agentic AI & OpenAI SDK',
    type: 'Self-Study',
    duration: 'December 2025',
    description:
      'Explored Agentic AI systems using the OpenAI SDK after GDG DevFest 2025, later applying these concepts to build an AI-powered honeypot system that reached the India AI Impact Summit 2026 Grand Finale.',
    tags: ['Agentic AI', 'OpenAI SDK', 'AI Engineering', 'LLMs'],
  },
  {
    id: 'l4',
    slug: 'backend-development',
    title: 'Backend Development',
    type: 'Self-Study',
    duration: 'June 2024',
    description:
      'Built full-stack applications using REST APIs, authentication systems, databases, and modern backend architecture with the MERN stack.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Redux', 'REST API'],
  },
  {
    id: 'l5',
    slug: 'ui-ux-fundamentals',
    title: 'UI/UX Fundamentals',
    type: 'Course',
    duration: 'March 2024',
    description:
      'Studied interface design, visual hierarchy, wireframing, accessibility, and user-centered design principles.',
    tags: ['Figma', 'Wireframing', 'UI Design', 'UX Research'],
  },
  {
    id: 'l6',
    slug: 'frontend-development',
    title: 'Frontend Development',
    type: 'Self-Study',
    duration: 'January 2024',
    description:
      'Learned responsive web development fundamentals and modern frontend concepts using JavaScript, HTML, and CSS.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    id: 'l7',
    slug: 'java-programming',
    title: 'Java Programming',
    type: 'Certification',
    duration: 'December 2023',
    description:
      'Developed a strong foundation in object-oriented programming, problem solving, and core Java concepts.',
    tags: ['Java', 'OOP', 'Collections', 'Exception Handling'],
  },
]

// ── EXPERIMENTS ──
// slug must match the slug field in seed.js BLOGS entries for the experiment section
export const EXPERIMENTS = [
  {
    id: 'e1',
    slug: 'agentic-honeypot-system',
    title: 'Agentic Honeypot System',
    status: 'Live',
    year: '2026',
    description:
      'Agentic AI system that engages scam callers, prolongs interactions, and extracts behavioral intelligence for analysis.',
    stack: ['OpenAI SDK', 'JavaScript', 'TypeScript'],
    link: 'https://agentic-honeypot-xvzd.onrender.com',
    github: 'https://github.com/The-ShambhaviPandey/Agentic-HoneyPot',
  },
  {
    id: 'e2',
    slug: 'agentic-honeypot-tester',
    title: 'Agentic Honeypot Tester',
    status: 'Live',
    year: '2026',
    description:
      'Automated benchmarking suite for evaluating agentic honeypot APIs across multiple scam scenarios.',
    stack: ['JavaScript', 'HTML'],
    link: 'https://agentic-honeypot-web-tester.onrender.com',
    github: 'https://github.com/The-ShambhaviPandey/Agentic-HoneyPot-Tester',
  },
  {
    id: 'e3',
    slug: 'clausebuddy-legal-ai',
    title: 'ClauseBuddy - Legal AI',
    status: 'Complete',
    year: '2025',
    description:
      'AI assistant for analyzing and summarizing legal documents using InLegalBERT embeddings, FAISS, and Gemini.',
    stack: ['TypeScript', 'JavaScript', 'Python'],
    link: null,
    github: 'https://github.com/The-ShambhaviPandey/ClauseBuddy',
  },
  {
    id: 'e4',
    slug: 'realtime-deepfake-detector',
    title: 'Realtime Deepfake Detector',
    status: 'Patent In Progress',
    year: '2025',
    description:
      'Real-time deepfake detection system integrated into live video calling pipelines.',
    stack: ['JavaScript', 'Python'],
    link: null,
    github:
      'https://github.com/The-ShambhaviPandey/Realtime-DeepFake-Detection-Project',
  },
  {
    id: 'e5',
    slug: 'mausam-weather-forecasting-app',
    title: 'Mausam - Weather Forecasting App',
    status: 'Live',
    year: '2023',
    description:
      'Responsive weather forecasting app using OpenWeather API with dynamic UI based on weather and time.',
    stack: ['React', 'CSS', 'UI/UX'],
    link: 'https://mausam-4b8j.onrender.com/',
    github: 'https://github.com/The-ShambhaviPandey/Mausam',
  },
  {
    id: 'e6',
    slug: 'anuvadak',
    title: 'Anuvadak',
    status: 'Killed',
    year: '2025',
    description:
      'Website translation extension using Lingo.dev API that translated dynamic websites by modifying DOM structure. Deprecated due to browser limitations.',
    stack: ['JavaScript'],
    link: null,
    github: 'https://github.com/The-ShambhaviPandey/Polygot',
  },
]

// ── EXPERIENCES ──
// slug must match the slug field in seed.js BLOGS entries for the experience section
export const EXPERIENCES = [
  {
    id: 'ex1',
    slug: 'business-curative-internship',
    company: 'Business Curative',
    role: 'Software Development Engineer Intern',
    duration: 'May 2025 – December 2025',
    location: 'Remote',
    type: 'Internship',
    bullets: [
      'Built a production-grade MERN eCommerce platform with role-based architecture for admin, seller, and customer workflows.',
      'Implemented authentication, authorization, seller onboarding, product approvals, cart, and order management systems.',
      'Designed RESTful APIs and optimized MongoDB schemas for scalable queries.',
      'Managed CI/CD pipelines and production deployments using GitLab.',
    ],
    skills: [
      'MERN Stack',
      'REST APIs',
      'MongoDB',
      'CI/CD',
      'GitLab',
      'UI/UX Design',
      'Cloud & DevOps',
    ],
  },
  {
    id: 'ex2',
    slug: 'women-techmakers-ambassador',
    company: 'Google Women Techmakers',
    role: 'Ambassador',
    duration: 'December 2025 – Present',
    location: 'Remote',
    type: 'Community',
    bullets: [
      'Selected for Google Women Techmakers mentorship and inclusion initiatives.',
      'Mentored teams in the Technovation Girls Challenge.',
      "Part of International Women's Day 2026 virtual initiatives.",
    ],
    skills: [
      'Mentorship',
      'Leadership',
      'Public Speaking',
      'Community Outreach',
    ],
  },
  {
    id: 'ex3',
    slug: 'gdg-mgmcoet-community-work',
    company: 'GDG MGMCoET',
    role: 'Co-Organizer',
    duration: 'August 2025 – Present',
    location: 'Noida, Uttar Pradesh',
    type: 'Community',
    bullets: [
      'Mentored students in JavaScript, DSA, OpenAI SDKs, and Google Cloud through workshops.',
      'Organized 20+ technical and community events in under a year.',
      'Led Code Clash 2.0 with 115+ participants.',
      'Built developer-focused learning resources and websites.',
    ],
    skills: [
      'Technical Mentorship',
      'Leadership',
      'Community Building',
      'Event Management',
      'Public Speaking',
    ],
  },
  {
    id: 'ex4',
    slug: 'oscode-manager',
    company: 'OSCode',
    role: 'Community Manager-Delhi NCR',
    duration: 'March 2026 – Present',
    location: 'Noida, Uttar Pradesh',
    type: 'Community',
    bullets: [
      'Leading developer community initiatives and mentorship programs.',
      'Recognized and facilitated at Microsoft Gurugram for contributions to developer community initiatives and event leadership.',
      'Coordinating and collaborating with industry professionals for technical events and workshops.',
    ],
    skills: [
      'Leadership',
      'Mentorship',
      'Event Management',
      'Community Outreach',
    ],
  },
]
