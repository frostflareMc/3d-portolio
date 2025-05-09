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
 

  bangalore,
  jarvis,
  lua,
  skripting,
  smiley,
  psat,
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
    title: "Discord bot dev",
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
     {
    title: "Roblox game website",
    companyName: "ToyViller",
    icon: starbucks,
    iconBg: "#383E56",
    date: ":)",
    points: [
      "Developing a roblox game website.preview: toyville.akshx.com",
      
    ],
  },
    {
    title: "Portfolio",
    companyName: "Not a company",
    icon: starbucks,
    iconBg: "#383E56",
    date: ":)",
    points: [
      "Developing a portfolio website for a roblox scripter",
      
    ],
  },

      {
    title: "Discord marketplace posting+moderation bot",
    companyName: "Not a company",
    icon: starbucks,
    iconBg: "#383E56",
    date: ":)",
    points: [
      "Discord bot like in rodevs where you can post looking for devs and for hire",
      
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

      {
    testimonial:
      "I hired them to make a website for my game and they were very quick, were down to make any changes without any kind of frustration.. would recommend to hire them.",
    name: "ItZSnippets",
    designation: "Owner",
    company: "SpidyStudios",
    image: "https://cdn.discordapp.com/avatars/777863290679328809/d96b320e92c02e4510b52ca6d02870c9?size=1024",
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
    image: bangalore,
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
    image: jarvis,
    sourceCodeLink: "https://github.com/frostflareMc/jarvis-bot-openai-voice-recog",
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
    image: lua,
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
    image: skripting,
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
    image: smiley,
    sourceCodeLink: "#",
  },
  {
    name: "PSATLingo",
    description:
      "I made a app using node.js,next.js a app(wep app) like duolingo but for the PSAT.just login nd course selection tho not the main thing",
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
    image: psat,
    sourceCodeLink: "https://github.com/frostflareMc/lingo",
  },
];

export { services, technologies, experiences, testimonials, projects };
