import nitjsr from '../assets/nitjsr.png';
import sxc from '../assets/sxc.jpeg';
import splitWise from '../assets/splitWise.jpeg';
import linkedDev from '../assets/linkedDev.png';
import tekionLogo from '../assets/tekion-logo.png';
import lifeaseLogo from '../assets/lifease-logo.jpg';

const infoData = {
  experience: [
    {
      id: 0,
      logoAlt: 'Lifease',
      logoSrc: lifeaseLogo,
      name: 'Lifease.in',
      Url: 'https://www.lifease.in/',
      role: 'SDE -1 (Frontend)',
      textColor: '#0083E2',
      duration: 'Nov 2023 - present',
      aboutRolePara1: `Architected and implemented a React-based UI component library with Tailwind CSS, boosting visual
      consistency and streamlining development efficiency for the company’s web app; resulted in a significant
      reduction in front-end development time and improved user experience.`,
      aboutRolePara2: `Efficiently transitioned a React web application to Next.js, significantly enhancing initial load speeds and
      drastically boosting SEO performance.`,
      aboutRolePara3: `Engineered secure and user-friendly session-based authentication systems providing safe application.`,
      technologies: 'React.js, Nextjs, Typescript, TailwindCSS, Material UI, Storybook',
    },
    {
      id: 1,
      logoAlt: 'Tekion',
      logoSrc: tekionLogo,
      name: 'Tekion',
      Url: 'https://tekion.com/',
      role: 'ASE Intern (Frontend)',
      textColor: '#05deba',
      duration: 'Jan 2023 – July 2023',
      aboutRolePara1: `Experienced in contributing to the development of FormBuilder, a dynamic application featuring a
user-friendly canvas interface enabling the intuitive dragging and dropping of container elements, including
rows.`,
      technologies: 'Javascript, CSS, React.js, Redux',
    },
  ],
  education: [
    {
      id: 1,
      logoAlt: 'nitjsr',
      logoSrc: nitjsr,
      name: 'NIT Jamshedpur',
      Url: 'https://www.nitjsr.ac.in/',
      role: 'Bachelor of Technology',
      textColor: '#288DFB',
      duration: 'August 2019 – July 2023',
      aboutRolePara1: 'B.Tech. in Computer Science & Engineering – 8.15 CGPA',
    },
    {
      id: 2,
      logoAlt: 'SXC College',
      logoSrc: sxc,
      name: `SXC, Ranchi`,
      Url: 'https://sxcrani.org/',
      role: 'Intermediate of Science',
      textColor: '#4BC54C',
      duration: 'July 2016 – July 2018',
      aboutRolePara1: 'I.Sc. (Maths, Physics, Chemistry) – 84.8 %',
    },
  ],
  projects: [
    {
      id: 1,
      logoAlt: 'SplitWise',
      logoSrc: splitWise,
      name: 'SplitWise',
      Url: 'https://splitwise-three.vercel.app',
      technologies: 'React.js, Redux, Netlify',
      about1: `Expense Management: Implemented an intuitive interface that enables users to add expenses and split them among friends.
Supported split types include equal and percentage`,
      about2: `Category System: Developed a flexible category system where users can select predefined categories from a dropdown menu
or create new ones by typing the name. Leveraged React Editable Select for seamless category management`,
    },
    {
      id: 2,
      logoAlt: 'LinkedDev',
      logoSrc: linkedDev,
      name: 'LinkedDev',
      Url: 'https://github.com/alok-dotcom/linkeddev',
      technologies: 'React.js, Express.js, Netlify',
      about1:
        'A platform where a developer can share his/her issues and get it resolved by other developer.',
      about2:
        'Here developers can like, dislike , delete , post and update their comments as well as their dashboard.',
    },
  ],
  skills: [
    {
      id: 1,
      title: 'Languages',
      value: ['HTML', 'CSS', 'JavaScript', 'ES6'],
    },
    {
      id: 2,
      title: 'Frameworks',
      value: [
        'Bootstrap',
        'React.js',
        'Redux',
        'Next.js',
        'Material UI',
        'Styled Components',
        // 'Formik',
        // 'Yup',
        'Chart.js',
        'React Storybook',
      ],
    },
    {
      id: 3,
      title: 'Development & Design Tools',
      value: ['Git/GitHub', 'VS Code', 'Chrome Devtools'],
    },
  ],
};

export default infoData;
