import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  
  starbucks,
 
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Next.js,node.js Developer",
    icon: mobile,
  },
  {
    title: "Roblox Developer",
    icon: backend,
  },

];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Next.js website development",
    companyName: "Trvme",
    icon: starbucks,
    iconBg: "#383E56",
    date: ":)",
    points: [
      "Developing and maintaining website using node.js and next.js and other related technologies.",
      
    ],
  },
   {
    title: "Pokemon Showdown Mod(Typescript)",
    companyName: "Not a company(a client)",
    icon: starbucks,
    iconBg: "#383E56",
    date: ":)",
    points: [
      "Developing a pokemon showdown mode for the client and creating a tutorial on how to add new pokemon",
      
    ],
  },
     {
    title: "Realtime School Chatapp",
    companyName: "School levelling",
    icon: starbucks,
    iconBg: "#383E56",
    date: ":)",
    points: [
      "Developing a realtime chatapp with DMs,global chat,school chat,class chat and section chat",
      
    ],
  },
 
  
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Our website turned out to be beautiful loved working with aksh.",
    name: "Subhash C. Jha",
    designation: "Founder",
    company: "Trvme",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  
 
];

const projects: TProject[] = [
  {
    name: "Next.js website",
    description:
      "A simple website",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "red-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://bangaloreeventmanagement.in/",
  },
  {
    name: "AI voicebot",
    description:
      ":) :D :P",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "red-text-gradient",
      },
      {
        name: "TTS",
        color: "green-text-gradient",
      },
      {
        name: ":)",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "#",
  },
  {
    name: "Roblox tycoon game",
    description:
      "A fun side project i  made while learning lua",
    tags: [
      {
        name: "Lua",
        color: "blue-text-gradient",
      },
      {
        name: "Roblox",
        color: "green-text-gradient",
      },
      {
        name: "Game Dev",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "#",
  },
  {
    name: "Skript Plugins",
    description:
      "A minecraft plugin that i made for my mc server",
    tags: [
      {
        name: "minecraft",
        color: "blue-text-gradient",
      },
      {
        name: "Skript",
        color: "green-text-gradient",
      },
      {
        name: "Plugin",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "#",
  },
  {
    name: "I have many more",
    description:
      "Ihave alot of fun side projects and which i will msg you according to my current project",
    tags: [
      {
        name: "Skills",
        color: "blue-text-gradient",
      },
      {
        name: ":)",
        color: "green-text-gradient",
      },
      {
        name: ":P",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "#",
  },
  {
    name: "PSATLingo",
    description:
      "I made a app using node.js,next.js a app(wep app) like duolingo but for the PSAT",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk auth",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "#",
  },
];

export { services, technologies, experiences, testimonials, projects };
