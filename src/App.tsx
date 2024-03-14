import './App.css';

function App() {
  return <>hello</>;
}

export default App;

const resume_data = {
  name: 'ALim Ahmed Reza',
  rightHeader: {
    email: 'reza.alimahmed@gmail.com',
    phone: '+8801778746494',
    github: '/Alim-Reza',
  },
  summary:
    'A language agnostic software engineer with more then 4 years of experience working in Web’s both frontend and backend. Eager to join a dynamic team on a journey to make something revolutionary',
  education: [
    {
      name: 'American International University - Bangladesh',
      location: 'Dhaka, Bangladesh',
      major: 'Bachelor of Science in Computer Science & Engineering',
      cgpa: '3.50',
      batchOf: '2016-2020',
    },
  ],
  skills: [
    {
      name: 'Languages',
      description:
        'Java, SQL, JavaScript, Python (Assessment Certification: hackerrank.com/aarasif2)',
    },
    {
      name: 'Frameworks',
      description:
        'Strong professional development experience in Spring Boot 2, PostgreSQL, ReactJs,NextJs, Angular 6 and familiarity with Django REST Framework and React.',
    },
    {
      name: 'Miscellaneous',
      description:
        'Clear concepts in Design principles, SOLID design principles. Object Oriented Programming (OOP), Design patterns, Microservices based architecture and familiar with Linux, Jenkins, Docker, Git',
    },
  ],
  experience: [
    {
      name: 'Kona Software Lab Ltd',
      location: 'Gulshan - 1',
      designation: 'Sr. Software Engineer',
      fromTo: ' April 2022 - Present',
      items: [
        {
          name: 'Description',
          bulletPoints: false,
          description: 'lalalalalala',
        },
        {
          name: 'Responsibilities',
          bulletPoints: true,
          items: [
            'Development of responsive frontend.',
            'Structuring and developing mobile application for the project.',
            'Converting current code base from ReactJs to NextJs.',
          ],
        },
      ],
    },
  ],
};
