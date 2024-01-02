import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  ibmIcon,
  javaIcon,
  sqlIcon,
  gitIcon,
  githubIcon,
  gitlabIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  bug,
  arrival,
  interestCalculator,
  avatar,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Welcome to my site, thanks for taking a look",

    "Hello! I'm Sirak Radaa, a junior software developer with a curious mindset and a knack for tackling challenges. From early coding explorations to managing intricate projects, I've developed a versatile set of skills. What sets me apart is my dedication to fostering creativity and my enthusiasm for continuous learning and growth.",
    "Currently on the lookout for fresh opportunities, I bring a blend of technical proficiency and a fearless approach to problem-solving. I thrive in dynamic environments, where I can contribute my skills to build scalable applications and collaborate on innovative projects. Ready to bring enthusiasm and dedication to a new team, I'm excited about the possibilities ahead.",

    "Thanks for learning about me! I'm a junior software developer with a passion for challenges and creative problem-solving. Let's connect if you're looking for someone enthusiastic about continuous learning and ready to contribute to innovative projects.",
  ],
};

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    name: "Arrival",
    description:
      "Arrival is an Edmonton-based ride sharing platform for Android. Users can sign up as a Rider, or Driver, depending on their needs. More information about the app's features and development can be found on the project's Wiki.",
    image: arrival,
    source_code_link:
      "https://github.com/CMPUT301W20T07/arrival?tab=readme-ov-file",
    demo_link: "https://github.com/CMPUT301W20T07/arrival/wiki",
  },
  {
    name: "BugTracker",
    description:
      "Explore a user-friendly Figma prototype for an adoption and sterilization awareness website. Experience the sleek design and contribute to a noble cause.",
    image: bug,
    source_code_link: "https://github.com/sirakradaa/BugTracker",
    demo_link: "https://sirakradaa.github.io/BugTracker/",
  },
  {
    name: "InterestCalculator",
    description:
      "Explore a user-friendly Figma prototype for an adoption and sterilization awareness website. Experience the sleek design and contribute to a noble cause.",
    image: interestCalculator,
    source_code_link: "https://github.com/sirakradaa/Interest",
    demo_link: "https://sirakradaa.github.io/Interest/",
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "(2 years experience, 1.5 years professional) I began using HTML in 2021 during an IBM cloud certification. Since then I have also used it in a professional setting and for personal projects. HTML has given me a strong understanding of page layout.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "(2 years experience, 1.5 years professional) I began using CSS in 2021 during an IBM cloud certification. Since then I have also used it in a professional setting and for personal projects. My insight on page design expanded with learning proper CSS usage.",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "(2 years experience, 1.5 years professional) I have genuine fun developing pages using React. Some libraries just click with certain people, this is the one that clicked with me. It's easy to use and debug.",
  },
  {
    id: "java",
    title: "Java",
    icon: javaIcon,
    description:
      "(4 years experience, 0 years professional) Java was the first language that I used to build a big project in a team. It gave me a deep understanding of OOP. That project taught me how to compartmentalize code properly.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "(2 years experience, 1.5 years professional) I began using JavaScript in 2021 during an IBM cloud certification. Since then I have also used it in a professional setting and for personal projects. It is now my primary language and the one I currently use the most.",
  },
  {
    id: "ibm",
    title: "IBM Cloud",
    icon: ibmIcon,
    description:
      "(1 years experience, 0 years professional) I have earned multiple IBM Cloud certifications. This was the first cloud provider that I used, it was a good entry point into learning how cloud infrastructure is made, scaled, and maintained securely.",
  },
  {
    id: "aws",
    title: "Amazon Web Services",
    icon: awsIcon,
    description:
      "(0 years experience, 0 years professional) AWS has given me a deeper understanding of automation in cloud environments. I am currently prepping for the AWS Certified Developer Certification, I am in the process of reviewing the topics before taking the exam.",
  },
  {
    id: "figma",
    title: "Figma",
    icon: figmaIcon,
    description:
      "(2 years experience, 0 years professional) I began using Figma as a way to create my resume. Since then I realized it's the easiest way to update and maintain the things I am working on. Figma does a good job at giving the user enough options to explore their creativity.",
  },
  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "(4 years experience, 1.5 years professional) I am very experience at Git, I began using it in school to work on projects and since then have been using it in a professional setting to collaborate, review, and solve conflicts.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "(4 years experience, 0 years professional) Github is the first Git platform that I used. It is the one I will be using for my personal projects because it maintains all the stuff I have already worked on.",
  },
  {
    id: "gitlab",
    title: "GitLab",
    icon: gitlabIcon,
    description:
      "(1 years experience, 1.5 years professional) GitLab is the Git platform I use at my current job. It's easy to maneuver, and has helped me in creating production-ready code.",
  },
  {
    id: "sql",
    title: "SQL",
    icon: sqlIcon,
    description:
      "(5 years experience, 0 years professional) SQL allowed me to understand dataflow, organization, tables, queries, and most of all security. Realizing just how powerful data can be, while also being extremely sensitive was more than interesting.",
  },
  {
    id: "py",
    title: "Python",
    icon: pyIcon,
    description:
      "(5 years experience, 0 years professional) Python was my first coding language, it is the language I tend to default to because it is easy for me to use, understand, and debug.",
  },
  {
    id: "node",
    title: "Node",
    icon: nodeIcon,
    description:
      "(2 years experience, 1.5 years professional) Node is the runtime environment that helped grasp the function, usage, and importance of a backend that is maintained well. Especially using it in a professional setting.",
  },
  {
    id: "eslint",
    title: "Eslint",
    icon: eslintIcon,
    description:
      "(1.5 years experience, 1.5 years professional) ESLint has been incredible in keeping me from commiting mistakes, which also made me increase the quality and consistency of my code.",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { media, introduction, projects, memoji, skills, markerSvg, icons };
