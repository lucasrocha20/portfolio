import {
    frontend,
    backend,
    ux,
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
    komikult,
    leaderboard,
    math,
    movie,
    nyeusi,
    space,
    coverhunt,
    dcc,
    kelhel,
    microverse,
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
      title: 'UI/UX Design',
      icon: ux.src,
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
      title: 'Front-End Developer',
      company_name: 'Cover Hunt',
      icon: coverhunt.src,
      iconBg: '#333333',
      date: 'Aug 2021 - Feb 2022',
    },
    {
      title: 'Mentor (Volunteer)',
      company_name: 'Microverse',
      icon: microverse.src,
      iconBg: '#333333',
      date: 'Mar 2022 - May 2022',
    },
    {
      title: 'Junior Software Engineer',
      company_name: 'Kelhel',
      icon: kelhel.src,
      iconBg: '#333333',
      date: 'May 2022 - Oct 2022',
    },
    {
      title: 'Full Stack Developer',
      company_name: 'Diversity Cyber Council',
      icon: dcc.src,
      iconBg: '#333333',
      date: 'Sep 2022 - Present',
    },
  ];
  
  const projects = [
    {
      id: 'project-1',
      name: 'KomiKult',
      description: 'A comic characters list app that displays Marvel characters.',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'mongodb',
          color: 'green-text-gradient',
        },
        {
          name: 'tailwind',
          color: 'pink-text-gradient',
        },
      ],
      image: komikult.src,
      repo: 'https://github.com/shaqdeff/KomiKult',
      demo: 'https://shaqdeff.github.io/KomiKult/',
    },
    {
      id: 'project-2',
      name: 'Leaderboard',
      description:
        'A leaderboard list app that displays scores submitted by different players.',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'restapi',
          color: 'green-text-gradient',
        },
        {
          name: 'scss',
          color: 'pink-text-gradient',
        },
      ],
      image: leaderboard.src,
      repo: 'https://github.com/shaqdeff/Leaderboard',
      demo: 'https://shaqdeff.github.io/Leaderboard/',
    },
    {
      id: 'project-3',
      name: 'Math Magicians',
      description: 'This is a single-page calculator app built with React',
      tags: [
        {
          name: 'nextjs',
          color: 'blue-text-gradient',
        },
        {
          name: 'supabase',
          color: 'green-text-gradient',
        },
        {
          name: 'css',
          color: 'pink-text-gradient',
        },
      ],
      image: math.src,
      repo: 'https://github.com/shaqdeff/Math-Magicians',
      demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
    },
    {
      id: 'project-4',
      name: 'Movie Metro',
      description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
      tags: [
        {
          name: 'nextjs',
          color: 'blue-text-gradient',
        },
        {
          name: 'supabase',
          color: 'green-text-gradient',
        },
        {
          name: 'css',
          color: 'pink-text-gradient',
        },
      ],
      image: movie.src,
      repo: 'https://github.com/shaqdeff/Movie-Metro',
      demo: 'https://movie-metro.netlify.app/',
    },
    {
      id: 'project-5',
      name: 'Nyeusi Fest Site',
      description:
        'This is a demo concert website for a music festival called Nyeusi.',
      tags: [
        {
          name: 'nextjs',
          color: 'blue-text-gradient',
        },
        {
          name: 'supabase',
          color: 'green-text-gradient',
        },
        {
          name: 'css',
          color: 'pink-text-gradient',
        },
      ],
      image: nyeusi.src,
      repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
      demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
    },
  ];
  
  export { services, technologies, experiences, projects };