import {
  backend,
  cast,
  cicd,
  csharp,
  css,
  docker,
  dotnet,
  express,
  figma,
  frontend,
  git,
  goBarber,
  goRestaurant,
  graphql,
  html,
  javascript,
  jenkins,
  jest,
  kubernetes,
  meetApp,
  mobile,
  mongodb,
  mysql,
  nestjs,
  nextjs,
  nodejs,
  paguemenos,
  php,
  postgresql,
  prototyping,
  reactjs,
  redux,
  rentx,
  sqlserver,
  storybook,
  tailwind,
  tijuca,
  typescript,
} from '../assets'

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
]

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
]

const technologies = [
  // Languages
  {
    name: 'JavaScript',
    icon: javascript.src,
  },
  {
    name: 'TypeScript',
    icon: typescript.src,
  },
  {
    name: 'C#',
    icon: csharp.src,
  },
  {
    name: 'PHP',
    icon: php.src,
  },
  {
    name: 'Node JS',
    icon: nodejs.src,
  },
  // Frameworks
  {
    name: 'React',
    icon: reactjs.src,
  },
  {
    name: 'Next JS',
    icon: nextjs.src,
  },
  {
    name: 'Nest JS',
    icon: nestjs.src,
  },
  {
    name: 'Express',
    icon: express.src,
  },
  {
    name: 'Graphql',
    icon: graphql.src,
  },
  {
    name: '.NET',
    icon: dotnet.src,
  },
  // Database
  {
    name: 'PostgreSQL',
    icon: postgresql.src,
  },
  {
    name: 'SQL Server',
    icon: sqlserver.src,
  },
  {
    name: 'MySQL',
    icon: mysql.src,
  },
  {
    name: 'MongoDB',
    icon: mongodb.src,
  },
  // Devops
  {
    name: 'Docker',
    icon: docker.src,
  },
  {
    name: 'Kubernetes',
    icon: kubernetes.src,
  },
  {
    name: 'CI/CD',
    icon: cicd.src,
  },
  {
    name: 'Jenkins',
    icon: jenkins.src,
  },
  // Libs
  {
    name: 'Redux',
    icon: redux.src,
  },
  {
    name: 'Jest',
    icon: jest.src,
  },
  {
    name: 'Figma',
    icon: figma.src,
  },
  {
    name: 'Storybook',
    icon: storybook.src,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind.src,
  },
  {
    name: 'Git',
    icon: git.src,
  },
  {
    name: 'HTML 5',
    icon: html.src,
  },
  {
    name: 'CSS 3',
    icon: css.src,
  },
]

const experiences = [
  {
    title: 'Senior Software Engineer',
    company_name: 'Cast Group',
    icon: cast.src,
    date: 'Nov 2022 - Present',
  },
  {
    title: 'Technical Lead',
    company_name: 'Pague Menos Drug Store',
    icon: paguemenos.src,
    date: 'Sep 2022 - Nov 2022',
  },
  {
    title: 'Developer Analyst II',
    company_name: 'Pague Menos Drug Store',
    icon: paguemenos.src,
    date: 'Aug 2021 - Aug 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Tijuca Alimentos LTDA',
    icon: tijuca.src,
    date: 'Sep 2019 - Aug 2021',
  },
  {
    title: 'IT Technician',
    company_name: 'Tijuca Alimentos LTDA',
    icon: tijuca.src,
    date: 'Jun 2017 - Sep 2019',
  },
]

const projects = [
  {
    id: 'project-1',
    name: 'MeetApp',
    date: 'Dec 22, 2022',
    description:
      'This system is intended for web users to create and schedule events with an image, title, description, location and time at which mobile users were able to register to be able to attend the event.',
    tags: ['React', 'React Native', 'NodeJS', 'Redux', 'Express'],
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
    tags: ['NodeJS', 'Express', 'Postgres', 'Redis', 'TypeORM'],
    image: rentx.src,
    repo: 'https://github.com/lucasrocha20/rentx',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'GoBarber',
    date: 'Set 13, 2020',
    description:
      'This is a system that allows you to create appointments for a specific barbershop',
    tags: ['ReactJS', 'Typescript', 'Styled Components'],
    image: goBarber.src,
    repo: 'https://github.com/lucasrocha20/WEB-GoBarber-V2',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'GoRestaurant',
    date: 'Jan 24, 2023',
    description:
      'This is a mobile app for Android and IOS that simulates creating orders in a restaurant',
    tags: ['React Native', 'Styled Components', 'Typescript'],
    image: goRestaurant.src,
    repo: 'https://github.com/lucasrocha20/desafio-goStack-goRestaurant-mobile',
    demo: '',
  },
]

export { experiences, projects, services, technologies }
