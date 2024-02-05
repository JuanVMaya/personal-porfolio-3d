import { bittele, carrier, seneca } from "../assets/images";
import {
  car,
  contact,
  css,
  daisyui,
  estate,
  express,
  git,
  github,
  go,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: go,
    name: "Go",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: daisyui,
    name: "Daisy UI",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Senior Research Assistant",
    company_name: "Seneca",
    icon: seneca,
    iconBg: "#DA291C",
    date: "Jul 2019 - Oct 2020",
    points: [
      "Investigated with research project manager and professors in the planning, designing, and prototyping of two research projects:",
      " 1) Universal retrofit system for autonomous control of robotic wet/dry cleaners for client Cyberworks Robotics Inc. (Sept 2019 – Oct 2020).",
      "Eco-Friendly, Automatic Equine Water Trough System for Lenka Equestrian Centre. (July 2019 – December 2019)",
      "Engineered the electronics system design and accomplished physical movement output logic by using Arduino (C/C++), Linux, ROS (Robot Operating System) and solar panel technology",
    ],
  },
  {
    title: "Electronics Sales Account Manager",
    company_name: "Bittele Electronics",
    icon: bittele,
    iconBg: "#ffffff",
    date: "Jan 2020 - May 2022",
    points: [
      "Leader and contributor to the online ordering system, demonstrated success by surpassing the annual sales target by 35% with a record all-time high sales of 1.75M in annual 2021 revenue",
      "Created quickly and iteratively user flows, wireframes, prototypes",
      "Developed high-fidelity mock-ups for internal and external sales tools",
      "Surpassed the sales target by closing 750 sales (45.5% above estimate) resulting in 3.15M in revenue from Dec 2020 to May 2022",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Carrier - Supra Systems/Brokerbay",
    icon: carrier,
    iconBg: "#a2d2ff",
    date: "Sept 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Typescript, and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design, API endpoints and ensuring compatibility for our mobile app.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/JuanVMaya",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/juanvmaya/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Google Moods",
    description:
      "Google Moods was a front-end application inspired by the 'How might we' increase access to mental health resources so that people can feel supported and improve their wellbeing? BrainStation x Google",
    link: "https://github.com/JuanVMaya/google-moods",
  },
];
