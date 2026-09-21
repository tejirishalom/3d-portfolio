export const navLinks = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'About',
    path: '/about',
  },
   {
    id: 3,
    name: 'Projects',
    path: '/projects',
  }, 
  {
    id: 4,
    name: 'Github repo',
    path: '/github',
  },
  {
    id: 5,
    name: 'Talk to me',
    path: '/contact',
  },
 
  
 

];

export const clientReviews = [
  {
    id: 1,
    name: 'Tobore Ejoma',
    position: 'Manager, Unicus Campus',
    img: 'assets/review.jpg',
    review:
      'Teaching Shalom at Unicus fantastic experience. He displayed dedication to work and profesionalism during his 1yr stay with us.His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Serome Ejoma',
    position: 'Staff, Unicus Campus',
    img: 'assets/review2.jpg',
    review:
      'Shalom’s expertise in web development is truly impressive. He has great work ethic and elite problem solving techniques. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'Timothy Miyesengha',
    position: 'Founder, Flux Creative Technologies',
    img: 'assets/review3.jpg',
    review:
      'I can’t say enough good things about Shalom. He was able to take our complex project requirements and turn them into a seamless, functional UI. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO, Jeun Resturant Nigeria',
    img: 'assets/review4.png',
    review:
      'Shalom was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in frontend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Jeun Resturant - AI-Powered Restaurant Website',
    desc: 'Jeun Resturant is a revolutionary website that transformed the way Jeun Nigeria restaurant management was approached. With advanced AI-powered features like Automated CRM and instant messaging, it allows creators reservations and booking to be as easy as a single click.',
    subdesc:
      'Built as a unique web app with Typescript, React, n8n and Tailwindcss.',
    href: 'https://jeun-nigeria.vercel.app',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'n8n',
        path: '/assets/n8n.png',
      },
    ],
  },
   {
    title: 'Centi Hotels and resorts - Hotel and Resorts Website',
    desc: 'Centi Hotels and Resorts is a comprehensive Software-as-a-Service platform designed to streamline hotel management. It offers a range of features, including complex forms for guest information, automated Email notifications for bookings and updates, and an intuitive dashboard for managing reservations and customer interactions.',
    subdesc:
      'With a focus on efficiency, Centi Hotels and Resorts integrates complex forms and Email notifications, by using Emailjs.',
    href: 'centi-hotels.vercel.app',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS3',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'Figma',
        path: '/assets/figma.png',
      },
      {
        id: 4,
        name: 'Figma',
        path: '/assets/javascript.png',
      },

    ],
  },
  {
    title: 'Project Management and Team Collaboration Automation for EmailGen company',
    desc: 'Quick answers to Frequently asked questions (FAQs) are crucial for efficient project management and team collaboration. Our system leverages Jira and Supabase to automate responses to common queries, ensuring that team members can access the information they need without delay. This automation not only saves time but also enhances productivity by allowing teams to focus on more complex tasks.',
    subdesc:
      'Built with n8n, Slack, and Supabase, this system is designed to streamline communication and improve workflow efficiency within teams.',
    href: '',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/n8n.png',
    logoStyle: {
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'n8n',
        path: '/assets/n8n.png',
      },
      {
        id: 2,
        name: 'Jira',
        path: '/assets/jira.png',
      },
      {
        id: 3,
        name: 'Groq',
        path: 'assets/groq.png',
      },

    ],
  },
  {
    title: 'Network Security and Ethical Hacking Assessment',
    desc: 'Full assesment of public network security acessment report with app vulnerability scanning. Operated on authorized devices',
    subdesc:
      'Complete consultation and solutions report. This project was done with Kali-linux, wireshark, nmap and OWASP ZAP.',
    href: 'https://docs.google.com/document/d/1f4utsoqU9dtpAi-RmazP9Pk1HUe77q9B3BthZyQQVyE/edit?usp=sharing',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/Profile.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Kali',
        path: '/assets/n8n.png',
      },
      {
        id: 2,
        name: 'Wireshark',
        path: '/assets/wireshark.png',
      },
      {
        id: 3,
        name: 'OWASP ZAP',
        path: 'assets/owasp.jpg',
      },
      {
        id: 4,
        name: 'Kali',
        path: 'assets/kali.png',
      },

    ],
  },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.048 : isMobile ? 0.055 : isTablet ? 0.06 : 0.065,
    deskPosition: isSmall
      ? [0, -5.25, 0]
      : isMobile
        ? [0.25, -3.6, 0]
        : isTablet
          ? [0.25, -5.05, 0]
          : [0.25, -8.25, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 2.5, 0] : isMobile ? [5, 2.5, 0] : isTablet ? [7, 2.5, 0] : [9, 2.5, 0],
    ringPosition: isSmall ? [-3.5, 2.5, 5] : isMobile ? [-5.5, 7, 5] : isTablet ? [-9, 4.5, 5] : [-12, 4.5, 5],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Flux creative Technologies',
    pos: 'Product Design Intern',
    duration: '2026',
    title: "Flux creative Technologies is a tech startup that specializes in tech solutions for Nigerian bussinesses. I learnt real world design concepts and skills. ",
    icon: '/assets/flux.jpg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Lomaya Medical Diagnostic Sevices',
    pos: 'Lead Product Designer',
    duration: '2026 - Present',
    title: "I am currently working with thier team to push thier product to the next level. I am responsible for designing and implementing new features, as well as maintaining the existing ones. I am also responsible for the overall user experience of the product.",
    icon: '/assets/lomaya.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Jeun Resturant Nigeria',
    pos: 'Web Developer',
    duration: '2026',
    title: "Jeun Resturant Nigeria is a local restaurant that I worked with to develop their online presence. I was responsible for creating and maintaining their website, ensuring it was user-friendly and effectively showcased their menu and services.",
    icon: '/assets/project-logo1.png',
    animation: 'salute',
  },


];

export const techStack = [
  {
    id: 1,
    name: 'React.js',
    icon: '/assets/react.svg',
  },
  {
    id: 2,
    name: 'Next.js',
    icon: '/assets/nextjs.svg',
  },
  {
    id: 3,
    name: 'TailwindCSS',
    icon: '/assets/tailwindcss.png',
  },
  {
    id: 4,
    name: 'TypeScript',
    icon: '/assets/typescript.png',
  },
  {
    id: 5,
    name: 'n8n',
    icon: '/assets/n8n.png',
  },
  {
    id: 6,
    name: 'Supabase',
    icon: '/assets/supabase.png',
  },
  {
    id: 7,
    name: 'Figma',
    icon: '/assets/figma.png',
  },
  {
    id: 8,
    name: 'Slack',
    icon: '/assets/slack.svg',
  },
  {
    id: 9,
    name: 'Framer',
    icon: '/assets/framer.png',
  },
  {
    id: 10,
    name: 'vite',
    icon: '/assets/vite.svg',
  }
]; 
