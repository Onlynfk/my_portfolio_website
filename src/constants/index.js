import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  django,
  python,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  abbas,
  netflix,
  trackimmunize,
  ordermeals,
  bes,
  trybe
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps Developer",
    icon: mobile,
  },
  {
    title: "Technical Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name:"Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Reactjs",
    icon: reactjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Fullstack Developer (Django & Reactjs)",
    company_name: "Betaeshopping",
    icon: bes,
    iconBg: "#383E56",
    date: "October 2022 - Present",
    points: [
      "Engaging in system design and architecture planning, considering scalability, performance, and security aspects to create a robust foundation.",
      "Creating RESTful APIs in Python using Django, enabling seamless communication between the frontend and backend components of the web applications.",
      "Leveraging React.js to implement an intuitive and visually appealing user interface and user experience, enhancing the overall usability of the web applications",
      "Designing and developing APIs in Python using Django, providing efficient communication between different components of the web applications and enabling seamless data integration.",
    ],
  },
  {
    title: "Django Developer",
    company_name: "Trybnetwork",
    icon: trybe,
    iconBg: "#E6DEDD",
    date: "March 2022 - July 2022",
    points: [
      "Designed System and architecture for a Cryptocurrency betting platform",
      "Developing and maintaining the backend of web applications using Python and Django, ensuring robust and efficient server-side functionalities.",
      "Optimizing backend performance by fine-tuning database queries, caching frequently accessed data, and improving overall code efficiency",
      "Conducting thorough unit testing for the backend code, verifying the correctness of data processing, business logic, and error handling",
      "Deploying the backend on AWS cloud platform"
    ],
  },
  {
    title: "React Developer",
    company_name: "Abba's Clan",
    icon: abbas,
    iconBg: "#383E56",
    date: "March 2021 - August 2022",
    points: [
      "Developing and maintaining the frontend using React.js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Conducting frontend unit testing to identify and fix issues related to rendering, data handling, and user interactions.",
      "Deploying the frontend on various hosting platforms, ensuring that the web applications are accessible to users worldwide and delivering a seamless experience"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TrackImummize",
    description:
      "A unique and functional pediatrics immunization managment system for tracking immunization records of children in Nigeria.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: trackimmunize,
    source_code_link: "https://github.com/Onlynfk/django-immunization-managment-system",
  },
  {
    name: "NetMovie",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/Onlynfk/netfilx-react-clone",
  },
  {
    name: "OrderMeals",
    description:
      "A web application that allows users to order food online. It serves as a platform where customers can browse through a menu, select items they want to order, customize their preferences (if available), and place the order electronically",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ordermeals,
    source_code_link: "https://ordermeals-f73b3.web.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
