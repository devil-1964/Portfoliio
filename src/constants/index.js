import { htmlIcon,cssIcon,jsIcon,tailIcon,reactIcon,nodeIcon,project00,project01,project02,project03,project04 } from "./assets";


export const navbarLinks = [
    {
        id: "home",
        path: "/#home",
        label: "Home",
    },
    {
        id: "about",
        path: "/#about",
        label: "About",
    },
    {
        id: "portfolio",
        path: "/#portfolio",
        label: "Portfolio",
    }
];

export const services = [
    {
        id: "html",
        icon: htmlIcon,
        title: "HTML",
        description: "Structuring the content and layout of web pages using semantic HTML elements.",
    },
    {
        id: "css",
        icon: cssIcon,
        title: "CSS",
        description: "Styling web pages with CSS, ensuring a visually appealing and responsive design.",
    },
    {
        id: "javascript",
        icon: jsIcon,
        title: "JavaScript",
        description: "Adding interactivity and dynamic behavior to websites using JavaScript.",
    },
    {
        id: "react",
        icon: reactIcon,
        title: "React",
        description: "Building modern, interactive UIs with React, focusing on component-based architecture.",
    },
    {
        id: "tailwind",
        icon: tailIcon,
        title: "Tailwind CSS",
        description: "Utilizing Tailwind CSS for utility-first styling and rapid UI development.",
    },
    {
        id: "nodejs",
        icon: nodeIcon,
        title: "Node.js",
        description: "Developing server-side applications with Node.js, enabling scalable and efficient back-end solutions.",
    }
    
];

export const projects = [
    {
        id: 1,
        link: "https://github.com/devil-1964/my-project",
        image:project00,
        title: "Intellichat",
        tags: ["React","NodeJs","Express","MongoDB"]
    },
    {
        id: 2,
        link: "https://github.com/devil-1964/myContactsApp",
        image:project04,
        title: "MyContacts App",
        tags: ["React","NodeJs","Express","MongoDB"]
    },
    {
        id: 3,
        link: "https://quiz-react-omega.vercel.app/",
        image:project01,
        title: "React Quiz",
        tags: ["React"]
    },
    {
        id: 4,
        link: "https://adopt-me-puce.vercel.app/",
        image:project02,
        title: "AdoptMe",
        tags: ["React"],
    },
    {
        id: 5,
        link: "https://devil-1964.github.io/education_github/",
        image:project03,
        title: "GitHub Education Clone",
        tags: ["HTML", "CSS"],
    },

];


