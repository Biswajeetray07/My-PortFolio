import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";



export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Three.js",
    image: "threejs.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "GSAP",
    image: "gsap.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Neon",
    image: "neon.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Supabase",
    image: "supabase.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "FastAPI",
    image: "fastapi.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

// AI & ML Skills
export const AI_ML_SKILL = [
  {
    skill_name: "LangChain",
    image: "langchain.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "LangGraph",
    image: "langgraph.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "LlamaIndex",
    image: "llamaindex.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Ollama",
    image: "ollama.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "TensorFlow",
    image: "tensorflow.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Scikit-Learn",
    image: "sklearn.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Hugging Face",
    image: "huggingface.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MLflow",
    image: "mlflow.png",
    width: 70,
    height: 70,
  },
] as const;

// DevOps & Tools
export const DEVOPS_SKILL = [
  {
    skill_name: "Git",
    image: "git.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GitHub",
    image: "github.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "AWS",
    image: "aws.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "DVC",
    image: "dvc.svg",
    width: 70,
    height: 70,
  },

  {
    skill_name: "DagsHub",
    image: "dagshub.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

// Languages
export const LANGUAGES = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "SQL",
    image: "sql.png",
    width: 70,
    height: 70,
  },
] as const;

export const PROJECTS = [
  {
    title: "AI Predictive Intelligence",
    description: "An advanced AI-powered command center for monitoring predictive flows, model training, and resource analysis with real-time visualization.",
    image: "/projects/ai-predictive-intelligence.png",
    link: "https://github.com/Biswajeetray07/AI-Predictive-Intelligence",
    liveDemo: "https://ai-predictive-intelligence.streamlit.app",
  },
  {
    title: "Creator AI - Editing Platform",
    description: "An intelligent platform for creators with AI powered video editing, dynamic timeline, and content generation workflows.",
    image: "/projects/Creator.png",
    link: "https://github.com/Biswajeetray07/Creator-AI---Editing-Platform",
    liveDemo: "https://creator-ai---editing-platform.streamlit.app",
  },
  {
    title: "AI Blog Agent",
    description: "An autonomous AI blogging agent to manage and generate rich content workflows featuring a sleek modern UI and metrics.",
    image: "/projects/AI-Blog.png",
    link: "https://github.com/Biswajeetray07/AI-Blog-Agent",
    liveDemo: "https://ai-blog-agent.streamlit.app",
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: "IBM AI Engineering Professional Certificate - Coursera",
    description: "Sep 2024 - Jan 2025",
    image: "/projects/project-1.png",
    link: "https://www.coursera.org/professional-certificates/ai-engineer",
  },
  {
    title: "Cloud Computing - NPTEL",
    description: "Oct 2024 - Dec 2024",
    image: "/projects/project-2.png",
    link: "https://nptel.ac.in/courses/106/105/106105167/",
  },
  {
    title: "GenAI for Everyone - Coursera",
    description: "Feb 2024 - Mar 2024",
    image: "/projects/project-3.png",
    link: "https://www.coursera.org/learn/generative-ai-for-everyone",
  },
  {
    title: "Prompt Engineering for ChatGPT - Coursera",
    description: "Jan 2024 - Mar 2024",
    image: "/projects/project-1.png",
    link: "https://www.coursera.org/learn/prompt-engineering",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Certifications",
    link: "#certifications",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Biswajeetray07/My-PortFolio",
};
