// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";



import pythonLogo from "./assets/tech_logo/python.png";

import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";



// Education Section Logo's




// Project Section Logo's

import rfid from "./assets/work_logo/rfid.png";

import fcpic1 from "./assets/work_logo/fcpic1.png";

import ahbtransit from "./assets/work_logo/ahbtransit.png";

import amazonclone from "./assets/work_logo/amazonclone.png";

import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
   
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    
    ],
  },
  {
    title: "Languages",
    skills: [
  
      { name: "javascript", logo: javascriptLogo },
  
      { name: "Python", logo: pythonLogo },
     
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
   
    school: "University of Managment and Technology",
    date: "Nov-2020 - Nov 2024",
    grade: "3.3/4.0 CGPA",
    desc: "I have completed my Bachelor's degree in Computer Science from UMT University, Lahore. During my time at UMT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Computer Science",
  },

  {
    id: 1,

    school: "Royal College of Science Narowal",
    date: "Apr 2018 - March 2020",
    grade: "78%",
    desc: "I completed my class 12 education from Royal College of Scienece, Narowal.I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: " Intermediate PCM with Computer Science",
  },
  {
    id: 3,
   
    school: "Hassan Scholar Public School , Narowal",
    date: "Apr 2016 - March 2018",
    grade: "87.5%",
    desc: "I completed my class 10 education from Hassan Scholar Public School, Narowal. I studied Science with Computer.",
    degree: "Matric with Computer",
  },
];

export const projects = [
  {
    id: 0,
    title: "Friends Consulting",
    description:
      "Friends Consulting is a professional consulting platform that provides expert services in corporate compliance, bookkeeping, taxation, and business advisory. The platform is designed to help businesses streamline operations, stay compliant with regulations, and make informed decisions for sustainable growth.",
    image: fcpic1,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "private",
    webapp: "https://www.friendsconsulting.pk/",
  },

  {
    id: 1,
    title: "Ahb-Transit Premium Services",
    description:
      "AHB Transit offers premium luxury transportation services in Switzerland, providing comfort, reliability, and style for business and leisure travel.",
    image: ahbtransit,
    tags: ["React JS", "Node.js", "tailwindCSS", "Validation"],
    github: "private",
    webapp: "https://www.ahb-transit.com/",
  },
  {
    id: 2,
    title: "RFID Tracking System",
    description:
      "The RFID Tracking System in Flutter using Dart is a mobile application that enables real-time monitoring and management of RFID-tagged items. It connects with RFID readers through Bluetooth, Wi-Fi, or APIs to scan and track assets, inventory, or personnel.  ",

    image: rfid,
    tags: ["Flutter", "Dart", "App development", "Firebase", "API"],
    github: "https://github.com/zaidijaz49/rfid_system.git",
  },

  {
    id: 3,
    title: "zadify",
    description:
      "Zadify is a frontend Amazon clone created as my first academic project. It includes product listings, a shopping interface, and a responsive design, built to strengthen my foundational skills in web development",
    image: amazonclone,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/zaidijaz49/zaidfy.git",
    webapp: "https://webversedigital.com/",
  },

  {
    id: 4,
    title: "Image Search App",
    description:
      "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    webapp: "https://imagsearch.netlify.app/",
  },
  {
    id: 5,
    title: "Image Background Remover",
    description:
      "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    image: removebgLogo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    webapp: "https://removeyourbg.netlify.app/",
  },
];
