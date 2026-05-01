import './App.css'

function App() {
  const cvData = {
    personal: {
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      summary: "Full-stack web developer with 5+ years of experience building scalable applications using React, Node.js, and cloud technologies."
    },
    experience: [
      {
        title: "Senior Frontend Developer",
        company: "Tech Solutions Inc.",
        duration: "2022 - Present",
        description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing responsive UI designs."
      },
      {
        title: "Full Stack Developer",
        company: "Digital Innovations Co.",
        duration: "2020 - 2022",
        description: "Developed and maintained multiple web applications using React, Express.js, and MongoDB."
      },
      {
        title: "Junior Web Developer",
        company: "StartUp Labs",
        duration: "2019 - 2020",
        description: "Built responsive websites and contributed to backend API development using Node.js."
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "State University",
        year: "2019"
      },
      {
        degree: "Full Stack Web Development Bootcamp",
        institution: "Code Academy",
        year: "2018"
      }
    ],
    skills: ["React", "JavaScript", "Node.js", "MongoDB", "Express.js", "CSS", "HTML", "Git", "Docker", "AWS", "REST APIs", "GraphQL"],
    certifications: [
      "AWS Certified Solutions Architect",
      "React Professional Certificate"
    ]
  }

  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>{cvData.personal.name}</h1>
        <div className="contact-info">
          <span>📧 {cvData.personal.email}</span>
          <span>📱 {cvData.personal.phone}</span>
          <span>📍 {cvData.personal.location}</span>
        </div>
      </header>

      <section className="cv-section">
        <h2>Professional Summary</h2>
        <p>{cvData.personal.summary}</p>
      </section>

      <section className="cv-section">
        <h2>Experience</h2>
        {cvData.experience.map((job, idx) => (
          <div key={idx} className="cv-item">
            <div className="item-header">
              <h3>{job.title}</h3>
              <span className="duration">{job.duration}</span>
            </div>
            <p className="company">{job.company}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2>Education</h2>
        {cvData.education.map((edu, idx) => (
          <div key={idx} className="cv-item">
            <h3>{edu.degree}</h3>
            <p className="company">{edu.institution} - {edu.year}</p>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {cvData.skills.map((skill, idx) => (
            <span key={idx} className="skill-badge">{skill}</span>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <h2>Certifications</h2>
        <ul>
          {cvData.certifications.map((cert, idx) => (
            <li key={idx}>{cert}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default App
