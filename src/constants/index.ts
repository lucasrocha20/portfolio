import {
    frontend,
    backend,
    prototyping,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    postgresql,
    rubyrails,
    graphql,
    meetApp,
    rentx,
    goBarber,
    goRestaurant,
    tijuca,
    paguemenos,
    cast,
    mobile,
  } from '../assets';
  
  export const navLinks = [
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'projects',
      title: 'Projects',
    },
    {
      id: 'contact',
      title: 'Contact',
    },
  ];
  
  const services = [
    {
      title: 'Frontend Developer',
      icon: frontend.src,
    },
    {
      title: 'Backend Developer',
      icon: backend.src,
    },
    {
      title: 'Mobile Developer',
      icon: mobile.src,
    },
    {
      title: 'Software Prototyping',
      icon: prototyping.src,
    },
  ];
  
  const technologies = [
    {
      name: 'HTML 5',
      icon: html.src,
    },
    {
      name: 'CSS 3',
      icon: css.src,
    },
    {
      name: 'JavaScript',
      icon: javascript.src,
    },
    {
      name: 'TypeScript',
      icon: typescript.src,
    },
    {
      name: 'React JS',
      icon: reactjs.src,
    },
    {
      name: 'Redux Toolkit',
      icon: redux.src,
    },
    {
      name: 'Tailwind CSS',
      icon: tailwind.src,
    },
    {
      name: 'Node JS',
      icon: nodejs.src,
    },
    {
      name: 'Rails',
      icon: rubyrails.src,
    },
    {
      name: 'graphql',
      icon: graphql.src,
    },
    {
      name: 'postgresql',
      icon: postgresql.src,
    },
    {
      name: 'git',
      icon: git.src,
    },
    {
      name: 'figma',
      icon: figma.src,
    },
    {
      name: 'docker',
      icon: docker.src,
    },
  ];
  
  const experiences = [
    {
      title: 'IT Technician',
      company_name: 'Tijuca Alimentos LTDA',
      icon: tijuca.src,
      date: 'Jun 2017 - Sep 2019',
    },
    {
      title: 'Full Stack Developer',
      company_name: 'Tijuca Alimentos LTDA',
      icon: tijuca.src,
      date: 'Sep 2019 - Aug 2021',
    },
    {
      title: 'Developer Analyst II',
      company_name: 'Farmacias Pague Menos',
      icon: paguemenos.src,
      date: 'Aug 2021 - Aug 2022',
    },
    {
      title: 'Technical Lead',
      company_name: 'Farmacias Pague Menos',
      icon: paguemenos.src,
      date: 'Sep 2022 - Nov 2022',
    },
    {
      title: 'Senior Software Engineer',
      company_name: 'Cast Group',
      icon: cast.src,
      date: 'Nov 2022 - Present',
    },
  ];
  
  const projects = [
    {
      id: 'project-1',
      name: 'MeetApp',
      date: 'Dec 22, 2022',
      description: 'This system is intended for web users to create and schedule events with an image, title, description, location and time at which mobile users were able to register to be able to attend the event.',
      tags: [
        'React',
          'React Native',
          'NodeJS',
          'Redux',
          'Express',
      ],
      image: meetApp.src,
      repo: 'https://github.com/lucasrocha20/MeetApp',
      demo: '',
    },
    {
      id: 'project-2',
      name: 'RentX',
      date: 'Apr 15, 2021',
      description:
        'Rentex is an API created with the principles of SOLID that simulates a system that makes it possible to register, list and rent cars.',
      tags: ['NodeJS','Express','Postgres', 'Redis', 'TypeORM'],
      image: rentx.src,
      repo: 'https://github.com/lucasrocha20/rentx',
      demo: '',
    },
    {
      id: 'project-3',
      name: 'GoBarber',
      date: 'Set 13, 2020',
      description: 'This is a system that allows you to create appointments for a specific barbershop',
      tags: ['ReactJS', 'Typescript', 'Styled Components'],
      image: goBarber.src,
      repo: 'https://github.com/lucasrocha20/WEB-GoBarber-V2',
      demo: '',
    },
    {
      id: 'project-4',
      name: 'GoRestaurant',
      date: 'Jan 24, 2023',
      description: 'This is a mobile app for Android and IOS that simulates creating orders in a restaurant',
      tags: ['React Native', 'Styled Components', 'Typescript'],
      image: goRestaurant.src,
      repo: 'https://github.com/lucasrocha20/desafio-goStack-goRestaurant-mobile',
      demo: '',
    },
  ];
  
  export { services, technologies, experiences, projects };