import {
  backend,
  carrent,
  creator,
  css,
  docker,
  drumKit,
  figma,
  git,
  html,
  jarvis,
  javascript,
  jobit,
  meta,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  restaurauntRes,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  tripguide,
  typescript,
  web
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
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
    title: "Software Engineer",
    company_name: "Thinkful",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2022 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "CEO",
    company_name: "HCGA Enterprises",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - Oct 2022",
    points: [
      "Worked running my own welding business.",
      "Dealt with clients daily, managed and maintained deadlines, managed inventory.",
      "Built and designed my own blueprints",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Customer Service Representative",
    company_name: "Sweet Magnolia Peach Boutique",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2021 - Dec 2022",
    points: [
      "Ran boutique business.",
      "Dealt with clients daily, managed and maintained deadlines, managed inventory.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rarely do teammates come with as much drive as Benji. I've been studying with him in our Software Engineering Immersion, and even before the course started, he reached out to me and asked a ton of great questions on CSS styling (one of my favorite topics). I love that he goes out of his way to make connections. He had been working on his portfolio, but beyond what was being asked of us in the course. I admire his curiosity and passion for learning, which has motivated me to do more practice projects on the side like he did. I was impressed by his ability to connect topics covered in class with real-life challenges and come up with outside-the-box ideas and solutions. His creativity is endless, and so is his humor and positive energy. I wholeheartedly recommend hiring Benji.",
    name: "Katya Sarmiento",
    designation: "Software Engineer",
    company: "Thinkful",
    image: "https://www.linkedin.com/in/katyasarmiento/overlay/photo/",
  },
  {
    testimonial:
      "I was very lucky to have Benji as one of my students while teaching at Thinkful's Immersive Engineering coding bootcamp. Benji has the rare combination of technically savvy expertise and technical learning ability, plus lots of charisma and people skills. This is very rare to see someone who is really really good at both of these skills. Having him in class made the class very fun, enjoyable, and collaborative. Not only did his presence and engagement help the class be more cohesive as a unit, he also showed tremendous capacity to learn technical concepts and solve tough coding challenges very quickly. He is often one of the first students to be finished with the work and is seen coaching, helping, teaching other students who need help with their software engineering projects and assignments. Having Benji in a team will make the work environment fun and also you will have a very reliable, talented, and skilled software engineer ready to make his impact! I highly recommend Benji to any team looking for a software developer/engineer.",
    name: "Saurabh Dahal",
    designation: "Full Stack Software Development Instructor",
    company: "Chegg",
    image: "https://www.linkedin.com/in/saurabhdahal/overlay/photo/",
  },
  {
    testimonial:
      "Excitement, motivation, curiosity, persistence. These are just the start of incredible things seen in Benji when it comes to software engineering. Time and time again when we would start new projects, Benji was so invested in the learning, often so excited to hit the ground running and to learn new things. That was something that I constantly saw in Benji through Thinkful was a desire to learn and to keep becoming better. Many times after getting things finished for our schooling Benji would turn around and start finding ways to implement them on little personal projects of his own, trying to improve what we just did, looking how to make them different, how to further himself and his code. His excitement is super contagious, and how much he wants to help others and bring them through the coding journey is such an amazing thing to see and experience. Benji is a team player through and through, and still he is able to have amazing self-motivation through curiosity and a desire to make things work and be of value to himself as well as others. Benji has his sights set high in the world of software engineering, and those sights are going to get him to incredible places and incredible opportunities.",
    name: "Bryce Myers",
    designation: "Software Engineer",
    company: "Thinkful",
    image: "https://www.linkedin.com/in/myers-bryce/overlay/photo/",
  },
];

const projects = [
  {
    name: "Restuarant Reservation App",
    description:
      "Web-based platform that allows users to search, book, and schedule restaurant reservations, providing a convenient, efficient and scalable solutions for all your restaurant and food industry needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: restaurauntRes,
    source_code_link: "https://github.com/OxnerSoftwareSolutions/Restaurant-Reservation-App",
  },
  {
    name: "Jarvis ( A Voice assistant bot)",
    description:
      "Web application that enables users to talk to a voice assistant like an alexa or google home but with the power of AI that ChatGPT can intergrate",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ChatGPT",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jarvis,
    source_code_link: "https://github.com/OxnerSoftwareSolutions/Jarvis",
  },
  {
    name: "Javascript Drum Kit",
    description:
      "The JavaScript Drum Kit is an engaging and interactive web application designed to bring the joy of music-making to users of all ages and musical abilities. This dynamic and visually appealing app allows users to simulate playing a virtual drum kit directly in their web browser. With just a few taps on their keyboard, users can unleash their creativity and create rhythmic beats, making it a perfect tool for aspiring musicians, music enthusiasts, and anyone looking to have a fun and immersive musical experience.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: drumKit,
    source_code_link: "https://github.com/",
  },
];

export { experiences, projects, services, technologies, testimonials };

