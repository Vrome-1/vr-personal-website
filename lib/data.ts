// Personal information
export const personalInfo = {
  name: "Vaani Rometra",
  title: "Software Engineer", 
  email: "vaanirometra@yahoo.com",
  location: "San Francisco, CA",
  bio: "Passionate full-stack developer with expertise in modern web technologies. I love creating efficient, scalable solutions and have experience building applications that serve thousands of users.",
  avatar: "/images/avatar.jpg",
  resume: "/resume.pdf",
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
    { name: "MIPS Assembly", level: 70 },
    { name: "Verilog", level: 65 },
    { name: "Dart", level: 80 }
  ],
  frameworks: [
    { name: "Node.js", level: 85 },
    { name: "React", level: 95 },
    { name: "Django", level: 80 },
    { name: "REST APIs", level: 90 },
    { name: "Streamlit", level: 75 },
    { name: "Flutter", level: 80 },
    { name: "Tailwind CSS", level: 90 }
  ],
  tools: [
    { name: "AWS", level: 75 },
    { name: "PyTorch", level: 70 },
    { name: "Terraform", level: 65 },
    { name: "Docker", level: 80 },
    { name: "Git", level: 95 },
    { name: "MySQL", level: 85 },
    { name: "Pandas", level: 80 },
    { name: "Matplotlib", level: 75 },
    { name: "VS Code", level: 95 },
    { name: "VADER", level: 70 },
    { name: "MongoDB", level: 75 },
    { name: "Unity", level: 60 },
    { name: "Quest", level: 55 }
  ]
}

// Education information
export const education = {
  degree: "Bachelor of Science",
  major: "Computer Science", // Update with your actual major
  minor: "Mathematics", // Update with your minor if applicable
  university: "University Name", // Update with your university
  graduationDate: "May 2024", // Update with your graduation date
  location: "City, State", // University location
  gpa: "3.8/4.0", // Optional - remove if you don't want to include
  awards: [
    "Dean's List (Multiple Semesters)",
    "Outstanding Computer Science Student Award",
    "Hackathon Winner - Best Technical Implementation",
    "Research Excellence Award"
  ],
  relevantCourses: [
    "Data Structures & Algorithms",
    "Software Engineering",
    "Database Systems",
    "Computer Networks",
    "Machine Learning",
    "Web Development",
    "Operating Systems",
    "Computer Architecture",
    "Artificial Intelligence",
    "Mobile Application Development"
  ]
}

// Work experience (most recent first)
export const experience = [
  {
    id: 1,
    company: "Current Company Name",
    position: "Your Job Title",
    duration: "Start Date - Present", // e.g., "2022 - Present"
    description: "Brief description of your role and responsibilities. What did you work on?",
    technologies: ["Tech1", "Tech2", "Tech3", "Tech4"], // Technologies you used
    achievements: [
      "Specific achievement with measurable impact",
      "Another key accomplishment",
      "Leadership or mentoring experience",
      "Any awards or recognitions"
    ]
  },
  {
    id: 2,
    company: "Previous Company Name",
    position: "Previous Job Title",
    duration: "Start Date - End Date", // e.g., "2020 - 2022"
    description: "Description of this role and what you accomplished.",
    technologies: ["Different", "Technologies", "You", "Used"],
    achievements: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ]
  }
  // Add more experience objects as needed
]

// Projects to showcase
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "/images/project1.jpg",
    technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
    featured: true // This will make it span 2 columns
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team features.",
    image: "/images/project2.jpg",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com/yourusername/taskapp",
    demo: "https://taskapp-demo.vercel.app",
    featured: true // Another featured project
  },
  {
    id: 3,
    title: "AI-Powered Chat Application",
    description: "Real-time chat app with AI-powered responses and sentiment analysis.",
    image: "/images/project3.jpg",
    technologies: ["React", "Node.js", "Socket.io", "OpenAI API"],
    github: "https://github.com/yourusername/chat-ai",
    demo: "https://chat-ai-demo.vercel.app",
    featured: false
  },
  // ... add your other 6 projects here
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Beautiful weather app with location-based forecasts and interactive maps.",
    image: "/images/project4.jpg",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    github: "https://github.com/yourusername/weather",
    demo: "https://weather-demo.vercel.app",
    featured: false
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/images/project5.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://portfolio-demo.vercel.app",
    featured: false
  },
  // Add your remaining projects...
  {
    id: 6,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with workout plans and progress analytics.",
    image: "/images/project6.jpg",
    technologies: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/yourusername/fitness-app",
    demo: "https://fitness-app-demo.vercel.app",
    featured: false
  },
  {
    id: 7,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with multiple chart types.",
    image: "/images/project7.jpg",
    technologies: ["Python", "Streamlit", "Pandas", "Plotly"],
    github: "https://github.com/yourusername/data-viz",
    demo: "https://data-viz-demo.vercel.app",
    featured: false
  },
  {
    id: 8,
    title: "IoT Smart Home System",
    description: "IoT system for monitoring and controlling smart home devices.",
    image: "/images/project8.jpg",
    technologies: ["Python", "Raspberry Pi", "MQTT", "React"],
    github: "https://github.com/yourusername/smart-home",
    demo: "https://smart-home-demo.vercel.app",
    featured: false
  },
  {
    id: 9,
    title: "Blockchain Voting System",
    description: "Secure voting platform using blockchain technology for transparency.",
    image: "/images/project9.jpg",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
    github: "https://github.com/yourusername/blockchain-voting",
    demo: "https://blockchain-voting-demo.vercel.app",
    featured: false
  }
]



