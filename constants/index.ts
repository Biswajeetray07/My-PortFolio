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
    image: "dvc.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "TensorBoard",
    image: "tensorboard.png",
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
    title: "Aivon Tutor",
    description: "A comprehensive DSA learning platform designed to help students master data structures and algorithms through interactive lessons and practice problems.",
    image: "/projects/project-1.png",
    link: "https://github.com/Biswajeetray07/Aivon-Tutor.git",
  },
  {
    title: "Crop Quality Analysis",
    description: "An AI-powered application for analyzing crop quality, providing farmers and distributors with actionable insights to improve produce standards.",
    image: "/projects/project-2.png",
    link: "https://github.com/Biswajeetray07/Crop-Quality-Analysis.git",
  },
  {
    title: "iPhone 16 App Clone",
    description: "A visually stunning clone of the iPhone 16 interface, demonstrating proficiency in modern mobile app development and UI/UX design.",
    image: "/projects/project-3.png",
    link: "https://github.com/Biswajeetray07/iphone16App-Clone.git",
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
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/example/space-portfolio",
};
