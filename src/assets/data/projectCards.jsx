import Img1 from '../data/pic-of-me.jpg';
import Vault from '../data/vault.png';

const projects = [
  {
    id: 1,
    title: 'Estate Vault',
    shortDescription:
      'EstateVault is an all-in-on estate management system where estate owners can store and manage their important estate documents.',
    longDescription:
      'EstateVault is an all-in-on estate management system where estate owners can store and manage their important estate documents, such as wills, power of attorney, but also a place to store external account information like Facebook login information. The system also allows for users to upload and share estate documents with approved connections with the user.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: Vault
  },
  {
    id: 2,
    title: 'Portfolio',
    shortDescription:
      'The current website you are on! This portfolio website is hand-built by using React to showcase my projects and skills.',
    longDescription:
      'I built this portfolio website using React to showcase my projects and to develop my skills. This website acts as a sandbox for my creative endeavors but also a central hub for my professional career development. The website features a responsive design, making it accessible on both desktop and mobile devices.',
      tech: ['React', 'CSS', 'JavaScript'],
    image: Img1
  }
];

export default projects;