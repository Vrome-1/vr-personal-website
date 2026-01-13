// Personal information
export const personalInfo = {
  name: "Vaani Rometra",
  title: "Software Engineer",
  email: "vaanirometra@yahoo.com",
  location: "Champaign, IL",
  bio: "Full-stack software engineer with expertise in building scalable web applications and data-driven solutions. Passionate about solving complex problems and delivering high-quality user experiences.",
  avatar: "/images/avatar.JPG",
  linkedin: "https://linkedin.com/in/vrome",
  github: "https://github.com/Vrome-1",
}

// Skills organized by categories
export const skills = {
languages: [
{ name: "Java", level: 90 },
{ name: "JavaScript", level: 95 },
{ name: "C++", level: 80 },
{ name: "SQL", level: 85 },
{ name: "Python", level: 90 },
{ name: "MATLAB", level: 75 },
{ name: "HTML", level: 95 },
{ name: "CSS", level: 90 },
{ name: "MIPS Assembly Language", level: 70 }
],
frameworks: [
{ name: "Node.js", level: 85 },
{ name: "React", level: 95 },
{ name: "Django", level: 80 },
{ name: "REST APIs", level: 90 },
{ name: "Streamlit", level: 75 },
{ name: "Flutter", level: 80 },
{ name: "Tailwind CSS", level: 90 },
{ name: "Pandas", level: 85 }
],
tools: [
{ name: "Git", level: 95 },
{ name: "Linux", level: 85 },
{ name: "AWS", level: 75 },
{ name: "PyTorch", level: 70 },
{ name: "Terraform", level: 65 },
{ name: "Docker", level: 80 },
{ name: "MySQL", level: 85 },
{ name: "VS Code", level: 95 },
{ name: "Cursor", level: 90 },
{ name: "MongoDB", level: 75 },
{ name: "Unity", level: 60 },
{ name: "Quest", level: 55 }
]
}

// Education information
export const education = {
  degree: "Bachelor of Science",
  major: "Computer Science",
  minor: "Data Science",
  university: "University of Illinois Urbana-Champaign",
  graduationDate: "May 2027",
  location: "Champaign, IL",
  gpa: "3.90/4.0",
  awards: [
    "Dean's List (Multiple Semesters)",
    "James Scholar"
  ],
  relevantCourses: [
    "Data Structures",
    "Algorithms",
    "Database Systems",
    "Computer Architecture",
    "Linear Algebra"
  ]
}

// Work experience
export const experience = [
  {
    id: 1,
    company: "State Farm",
    position: "Software Engineer Intern",
    duration: "May 2025 - Aug 2025",
    location: "Bloomington, IL",
    description:
      "Designed and deployed cloud-native data infrastructure to support large-scale analytics and machine learning workloads.",
    technologies: [
      "AWS S3",
      "AWS Glue",
      "AWS Redshift",
      "AWS Step Functions",
      "PySpark",
      "Python",
      "ETL Pipelines",
      "Parquet"
    ],
    achievements: [
      "Designed and deployed automated AWS cloud-native ETL pipelines processing 100M+ records into a Parquet-based data lake, improving processing efficiency by 70%",
      "Built secure, high-throughput pipelines for real-time analytics and ML feature generation, reducing data costs by 40% and tripling data access speed",
      "Centralized catastrophe event data across analytics and ML pipelines, improving data quality and enabling faster, organization-wide data-driven decision-making"
    ]
  },
  {
    id: 2,
    company: "University of Illinois Urbana-Champaign",
    position: "Undergraduate Researcher – Machine Learning",
    duration: "Dec 2025 - Present",
    location: "Champaign, IL",
    description:
      "Conducting machine learning research in the Shukla Group focused on predicting protein movement and structural conformations.",
    technologies: [
      "Machine Learning",
      "Deep Learning",
      "Python",
      "Scientific Computing"
    ],
    achievements: [
      "Applying machine learning models to predict protein movement and shape, enabling improved understanding of protein dynamics and conformational changes",
      "Analyzing large-scale biological and simulation datasets to extract meaningful features for model training and evaluation",
      "Collaborating within the Shukla Group at UIUC to support research in computational biology and molecular dynamics"
    ]
  },
  {
    id: 3,
    company: "Peoria Park District",
    position: "IT Intern",
    duration: "May 2023 - July 2023",
    location: "Peoria, IL",
    description:
      "Provided hands-on IT support and networking assistance for community events and daily office operations.",
    achievements: [
      "Configured and tested Wi-Fi access points to ensure reliable, high-speed connectivity for community events with 100+ participants",
      "Collaborated with a team of 3 to resolve IT support tickets, minimizing downtime and restoring critical services",
      "Installed and terminated Ethernet cables under supervision to enable secure and stable network connections"
    ]
  },
  {
    id: 4,
    company: "Kumon Math and Reading Center of Peoria",
    position: "Teaching Assistant and Grader",
    duration: "March 2022 - Aug 2022",
    location: "Peoria, IL",
    description:
      "Supported student learning and academic development in math and reading.",
    achievements: [
      "Guided and motivated young and beginner students in math and reading comprehension",
      "Assisted with grading and individualized academic support to improve student performance"
    ]
  }
];

// Projects
export const projects = [
  {
    id: 1,
    title: "UIUC Minor Recommender",
    description:
      "Full-stack academic recommendation system that analyzes student interests, completed coursework, and UIUC curriculum data to generate personalized minor recommendations. Built to replace manual catalog searches with an intelligent, data-driven workflow, the platform integrates labor-market insights and real course constraints to help 200+ students make informed academic decisions.",
    image: "/images/mr.png",
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "React",
      "Next.js",
      "Tailwind CSS",
      "SQL"
    ],
    github: "https://github.com/Vrome-1/UIUC-Minor-Recommender",
    demo: "https://drive.google.com/file/d/137P7zjIVmcpKXDKz9fk5Y3TP8A78TJKv/view?usp=sharing",
    featured: true
  },
  {
    id: 2,
    title: "Project Pink",
    description:
      "Award-winning (1st place at Code Ada Hackathon), retro-futuristic scrollytelling web experience that visualizes the history and impact of gendered pricing through immersive storytelling. The project transforms complex social and economic data into an interactive timeline using Apple-style scroll animations, parallax effects, and canvas-driven visuals to educate users on the evolution and persistence of the Pink Tax.",
    image: "/images/pink.png",
    technologies: [
      "JavaScript",
      "Vite",
      "HTML5",
      "CSS3",
      "Canvas API",
      "Node.js",
      "YOLOv8"
    ],
    demo: "https://drive.google.com/file/d/1a3qzFto0Cgzw1n2JBxhii3Fa1ERz93wT/view?usp=sharing",
    featured: false
  },
  {
    id: 3,
    title: "Connect Care",
    description:
      "Mental health support platform built during a hackathon to foster connection and reduce isolation among patients. The application enables peer-to-peer community forums, AI-powered conversational support using NLP, and health buddy matching to create safe, empathetic spaces for sharing experiences and receiving emotional support in real time via REST APIs.",
    image: "/images/cc.png",
    technologies: [
      "Python",
      "Streamlit",
      "Natural Language Processing (NLP)",
      "Firebase",
      "REST APIs"
    ],
    github: "https://github.com/Vrome-1/care-connect2",
    demo: "https://drive.google.com/file/d/1jciXck1sXie-y-3sDCGy_1nA-rDwkCOE/view?usp=sharing",
    featured: false
  },
  {
    id: 4,
    title: "EcoScore",
    description:
      "Data-intensive sustainability scoring platform that evaluates user lifestyle habits against national benchmarks to generate personalized EcoScores, peer comparisons, and dynamically generated recommendations. The system supports historical habit tracking, ML-based similarity matching, and trigger-driven data invalidation, enabling users to visualize progress over time and receive accurate, continuously refreshed sustainability insights.",
    image: "/images/eco.png",
    technologies: [
      "Python",
      "SQL",
      "PostgreSQL",
      "SQLAlchemy",
      "Django REST Framework",
      "JWT Authentication",
      "Hugging Face",
    ],
    featured: false
  }
];


export const extracurriculars = [
  {
    id: 1,
    organization: "OTCR Consulting",
    website: "https://www.otcrconsulting.com",
    position: "DevOps Engineer",
    duration: "Sep 2025 - Present",
    achievements: [
      "Developed and scaled an internal dashboard used by 80+ members across web and mobile platforms",
      "Implemented CI/CD pipelines and automated AWS infrastructure to improve deployment speed and reliability",
      "Built role-based authentication, document management, and notification systems to enhance security and usability"
    ]
  },
  {
    id: 2,
    organization: "Disruption Lab at Gies",
    website: "https://giesgroups.illinois.edu/disruptionlab/home/",
    position: "Project Manager",
    duration: "Feb 2025 - Present",
    achievements: [
      "Built scalable multiplayer VR systems in Unity supporting 10+ concurrent users",
      "Implemented a high-fidelity VR model of Gies with optimized rendering and networking",
      "Led agile testing and iteration cycles to deliver a production-ready VR prototype within 12 weeks",
      "Integrated an AI-driven avatar for interactive VR experiences"
    ]
  },
  {
    id: 3,
    organization: "EntreCORPS",
    website: "https://giesgroups.illinois.edu/entrecorps/home/",
    position: "Consultant",
    duration: "Feb 2025 - Present",
    achievements: [
      "Conducted competitive and market research for an AI cervical screening startup",
      "Delivered weekly insights on product positioning and grant applications",
      "Provided UI integration recommendations to improve user experience and market entry"
    ]
  },
  {
    id: 4,
    organization: "Hindu YUVA",
    website: "https://www.instagram.com/hindu.yuva.uiuc/?hl=en",
    position: "Event Committee Member",
    duration: "Jan 2025 - Present",
    achievements: [
      "Built partnerships with community, religious, and media organizations",
      "Planned and executed a cultural program with 300+ attendees",
      "Coordinated logistics and teamwork for large-scale events"
    ]
  },
  {
    id: 5,
    organization: "Women in Computer Science",
    website: "https://wcs.illinois.edu",
    position: "Mentoring Committee Member",
    duration: "Sep 2024 - Present",
    achievements: [
      "Led a mentorship program with 50+ participants focused on peer learning",
      "Organized career panels and technical workshops",
      "Participated in Chicago tech outreach trip networking with tech and finance leaders"
    ]
  },
  {
    id: 6,
    organization: "Innovation Living Learning Community",
    website: "https://housing.illinois.edu/Living-Learning-Communities/Innovation",
    position: "Member",
    duration: "Aug 2024 - May 2025",
    achievements: [
      "Won 1st Place at the Idea Fair out of 80+ teams",
      "Pitched an AI-powered accessibility app for elderly smartphone users",
      "Secured $1,500 in funding for the project"
    ]
  }
];