import {
  User,
  Company,
  Event,
  InterviewExperience,
  InterviewReply,
  Job,
  JobReply,
} from '../interfaces';

/** Dummy user data. */
export const sampleUserData: User[] = [
  {
    id: 101,
    firstName: 'Bilbo',
    lastName: 'Baggins',
    userName: 'bbaggins11',
    password: 'ringbearer3018',
    position: 'Ring Bearer',
    company: 'Fellowship of the Ring',
    bio: 'hobbit, from the shire',
    skills: 'evading orcs',
    picture:
      'https://cdn.costumewall.com/wp-content/uploads/2018/10/bilbo-baggins.jpg',
  },
  {
    id: 102,
    firstName: 'Harry',
    lastName: 'Potter',
    userName: 'halfblood11241',
    password: 'iluvmagic',
    position: 'Wizard',
    company: 'Hogwarts',
    bio: 'The Chosen One',
    skills: 'magic',
    picture:
      'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg',
  },
  {
    id: 103,
    firstName: 'Lucifer',
    lastName: 'Morningstart',
    userName: 'morningstart57',
    password: 'password123',
    company: 'Hell',
    position: 'Devil',
    bio: 'THe best angel',
    skills: 'Angel Grace',
    picture: 'https://m.media-amazon.com/images/I/51kr1+B34bL._AC_SX466_.jpg',
  },
];

export const sampleCompanyData: Company[] = [
  {
    id: 201,
    name: 'Apple',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi est, sollicitudin eget est quis, aliquet congue mi',
    industry: 'Technology',
    size: ['Large'],
    algos: 'No algos here',
    location: 'Cupertino, CA',
  },
  {
    id: 202,
    name: 'Bloomberg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium neque ac ipsum tincidunt, nec molestie odio iaculis.',
    industry: 'Software',
    size: ['Large'],
    algos: 'No algos here',
    location: 'New York, NY',
  },
  {
    id: 203,
    name: 'Goldman Sachs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac mauris faucibus, consequat ex ut, laoreet diam.',
    industry: 'Finance',
    size: ['Large'],
    algos: 'No algos here',
    location: 'New York, NY',
  },
];

export const sampleEventData: Event[] = [
  {
    id: 301,
    name: 'Algo Tuesday',
    location: 'NYC',
    date: new Date('May 17, 2021 03:00:00'),
    description: 'algo practice on tuesdays',
    link: 'meetup.com',
    likes: 10,
  },
  {
    id: 302,
    name: 'Tech Pannel',
    location: 'Fullstack Academy',
    date: new Date('May 23, 2021 05:00:00'),
    description: 'Pannel of speakers',
    link: 'facebook.com',
    likes: 20,
  },
];
export const sampleInterviewExperienceData: InterviewExperience[] = [
  {
    id: 401,
    position: 'Software Engineer',
    company: 'Google',
    info: 'Google Apprenticeship',
    offer: true,
    interviewDate: new Date('May 17, 2021 03:00:00'),
    rounds: 4,
    likes: 38,
  },
  {
    id: 402,
    position: 'Senior Software Engineer',
    company: 'Apple',
    info: '$170k/year plus benefits',
    offer: false,
    interviewDate: new Date('May 17, 2021 03:00:00'),
    rounds: 3,
    likes: 22,
  },
  {
    id: 403,
    position: 'Systems Engineer',
    company: 'Callback',
    info: '200k/year plus lamborghini',
    offer: true,
    interviewDate: new Date('May 17, 2021 03:00:00'),
    rounds: 6,
    likes: 100,
  },
];

export const sampleInterviewReplyData: InterviewReply[] = [
  { id: 501, reply: 'I just messaged you', likes: 10 },
  { id: 502, reply: 'Thanks for the post', likes: 5 },
  { id: 503, reply: 'This is great for my interview', likes: 15 },
];

export const sampleJobReplyData: JobReply[] = [
  { id: 601, reply: 'Lorem Ipsum Magnifco', likes: 22 },
  { id: 602, reply: 'Lorem Ipsum Ipactum', likes: 9 },
  { id: 603, reply: 'Lorem Ipsum Crypto Change O', likes: 0 },
];

export const sampleJobData: Job[] = [
  {
    id: 701,
    position: 'Apple Genius',
    company: 'Apple',
    link: 'https://random.apple.link',
    description: 'You get to be an apple genius',
    isActive: true,
    level: 'Large',
    location: 'Cupertino, CA',
    remote: true,
  },
  {
    id: 702,
    position: 'Intern',
    company: 'Google',
    link: 'https://random.google.link',
    description: 'You get to be a google intern',
    isActive: true,
    level: 'Large',
    location: 'New York, NY',
    remote: true,
  },
  {
    id: 703,
    position: 'Engineer',
    company: 'Netflix',
    link: 'https://random.netflix.link',
    description: 'You get to be a Netflix engineer and chill',
    isActive: true,
    level: 'Large',
    location: 'Los Gatos, CA',
    remote: true,
  },
];
