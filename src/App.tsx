import './App.css';

function App() {
  return <>
  <section className="header">
    <div className="employeeName">{resume_data.name}</div>
    <div className="right">
      {
        Object.keys(resume_data.rightHeader).map(key => 
          <div key={key}>{key}&nbsp;:&nbsp;&nbsp;{resume_data.rightHeader[key]}</div>
        )
      }
    </div>
  </section>
  <Summary />
  <Experience />
  <Education />
  </>;
}

const Points = ({name}) => (
  <div className="pointItems">{name}</div>
);

const ExperienceSlub = ({company_name,designation,company_address,date, items}) => (
  <>
  <div className="exp">
    <div className="exp-header">
      <div className="exp-header-items">
        <div className="company-name">{company_name}</div>
        <div className="designation">{designation}</div>
      </div>
      <div className="exp-header-right-items">
        <div className="company-address">{company_address}</div>
        <div className="date">{date}</div>
      </div>
    </div>
    <div className="exp-items">
      {
        items.map(item => (          
          <ul>
            <li key={items.name}>
              {
                item.name === "Description" && 
                !(item.description === null) &&
                <div className="item-name">{item.name}</div>
                ||
                item.name !== "Description" &&
                <div className="item-name">{item.name}</div>
              }
              {
                item.description && <p className='item-description'>{item.description}</p>
              }
              {
                item.points && <ul className='points'>
                  {
                    item.points.map(val => (<li>{val}</li>))
                  }
                </ul>
              }
            </li>
          </ul>
          
        ))
      }
    </div>
  </div>
  
  </>
);

const Summary = () => (
  <section className="summary">
    <Points name="summary" />
    <p>{resume_data.summary}</p>
  </section>
);

const Experience = () => {
  return(
    <>
    <Points name="experience" />
    <div className="experience">
      {
        resume_data.experience.map((value, key) => 
          <ul>
            <li>
              <ExperienceSlub 
                company_name={value.name}
                designation={value.designation}
                company_address={value.location}
                date={value.fromTo}
                items={value.items}
              />
            </li>
          </ul>
        )
      }
    </div>
    </>
  );
}


const Education = () => (
  <>
  <Points name="Education" />
  {
    resume_data.education.map(val => (
    <div className="exp-header" style={{paddingTop: "1em"}}>
      <div className="exp-header-items">
        <div className="company-name">{val.name}</div>
        <div className="designation">{val.major}&nbsp;({val.cgpa})</div>
      </div>
      <div className="exp-header-right-items">
        <div className="company-address">{val.location}</div>
        <div className="date">{val.batchOf}</div>
      </div>
    </div>
    ))
  }
  </>
)

export default App;

const resume_data = {
  name: 'Alim Ahmed Reza',
  rightHeader: {
    email: 'reza.alimahmed@gmail.com',
    phone: '+8801778746494',
    github: 'github.com/Alim-Reza',
    hackerrank: 'hackerrank.com/aarasif2'
  },
  summary:
    'A language agnostic software engineer with more then 4 years of experience working in Web’s both frontend and backend. Eager to join a dynamic team on a journey to make something revolutionary.',
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
        'Strong professional development experience in Spring Boot 2, PostgreSQL, ReactJs,NextJs, Angular 6 and familiarity with Django REST Framework.',
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
        // {
        //   name: 'Description',
        //   bulletPoints: false,
        //   description: null
        //   // description: 'I have worked on (frontend and mobile) a blockchain based trading and ecommerce platform (konatokentrade.com), (frontend) an api selling platform for the flagship product KonaCard (konaplate.com) and (backend) an platform as a service portal side.',
        // },
        {
          name: 'Responsibilities',
          bulletPoints: true,
          points: [
            'Frontend and Flutter App development of cryptocurrency trading platform.',
            'Backend development of a portal website for payment solution',
            'Unit test coverage'
            // 'Development of responsive frontend and scallable backend.',
            // 'Structuring and developing mobile application for the project.',
            // 'Converting current code base from ReactJs to NextJs.',
          ],
        },
        {
          name: "Solution Include",
          description: "ReactJS, NextJS, Spring-Boot, JUnit, Postgres, MariaDB, Flutter, Kafka, RabbitMQ, Redis"
        }
      ],
    },
    {
      name: 'RedDot Digital Ltd',
      location: 'Gulshan - 1',
      designation: 'Software Engineer',
      fromTo: ' July 2021 - April 2022',
      items: [
        // {
        //   name: 'Description',
        //   bulletPoints: false,
        //   description: null
        //   // description: 'RedDot Digital is a subsidiary of Robi Axiata Limited. I started in MFS (Mobile Financial Solution) division under DSIV-RedDot',
        // },
        {
          name: 'Responsibilities',
          bulletPoints: true,
          points: [
            "Monitor and maintain development, deployment and cross-team communication for two telecom solutions"
          ],
        },
        {
          name: "Solution Include",
          description: "ReactJS, Spring-Boot, Postgres, Kafka"
        }
      ],
    },
    {
      name: 'Cokreates Ltd',
      location: 'KarwanBazar',
      designation: 'Software Engineer',
      fromTo: ' May 2019 - July 2021',
      items: [
        // {
        //   name: 'Description',
        //   bulletPoints: false,
        //   description: null
        //   // description: 'As part of its digitalization process, the Bangladesh government has developed Government Resource Planning (GRP), an Enterprise Resource Planning (ERP) solution of its own, to manage works electronically to optimize and economize assets and expenses. GRP consists of eleven domain. From which, I have worked on the “Assets", "Budget",  "Audit" and "Human Resource" domains.',
        // },
        {
          name: 'Responsibilities',
          bulletPoints: true,
          points: [
            'Full-Stack Development of ERP solution',
            'End to End test coverage',
            'Maintain script tools to support deployment and developer efficiency'
          ],
        },
        {
          name: "Solution Include",
          description: "Angular, Spring-Boot, Postgres, Protractor, Django, Bash Script, Jenkins, Docker, Linux-Service"
        }
      ],
    },
  ],
};
