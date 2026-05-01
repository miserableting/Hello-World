import './App.css'

function App() {
  const cvData = {
    personal: {
      name: "Sabrina Ting Changhuan",
      email: "example@gmail.com",
      phone: "0123456789",
      location: "example",
      title: "Electronics Engineering Student | Aspiring Electrical Engineer"
    },
    professional_summary: "Passionate Electronics Engineering student with hands-on experience in circuit design, microcontroller programming, and PCB development. Seeking an internship or entry-level position to apply technical knowledge and contribute to innovative engineering projects.",
    education: [
      {
        degree: "Bachelor of Electronic Engineering with Honours",
        institution: "UKM (Universiti Kebangsaan Malaysia)",
        year: "2029",
        details: "Relevant Coursework: Digital Electronics, Power Electronics, Microprocessors, Signal Processing, Embedded Systems"
      }
    ],
    experience: [
      {
        title: "Electronics Engineering Intern",
        company: "Tech Innovation Lab",
        duration: "Jun 2024 - Aug 2024",
        description: [
          "Designed and implemented PCB layouts using KiCad for embedded projects",
          "Programmed microcontrollers (Arduino, STM32) using C and embedded C",
          "Tested and debugged circuit designs with oscilloscopes and multimeters",
          "Collaborated with senior engineers on IoT device development"
        ]
      },
      {
        title: "Student Project Lead",
        company: "UKM Robotics Club",
        duration: "2023 - Present",
        description: [
          "Led team of 5 students in designing and building autonomous robots",
          "Integrated sensors and motor controllers with microcontroller boards",
          "Won 2nd place in National Robotics Competition 2024"
        ]
      }
    ],
    technical_skills: [
      { category: "Programming Languages", skills: "C, C++, Python, Embedded C, Arduino" },
      { category: "Hardware & Tools", skills: "MATLAB, Simulink, PROTEUS, KiCad, LTspice" },
      { category: "Microcontrollers", skills: "Arduino, STM32, PIC Microcontrollers, Raspberry Pi" },
      { category: "Circuit Design", skills: "Analog Circuits, Digital Circuits, Power Electronics, PCB Design" },
      { category: "Soft Skills", skills: "Problem Solving, Team Collaboration, Technical Documentation" }
    ],
    projects: [
      {
        title: "Smart Home Automation System",
        description: "Designed IoT-based smart home system using Arduino and wireless sensors for automated lighting and temperature control"
      },
      {
        title: "Power Supply Design",
        description: "Developed 12V regulated DC power supply with voltage regulation and protection circuits"
      },
      {
        title: "Digital Signal Processing",
        description: "Implemented FFT algorithms for audio signal analysis using MATLAB"
      }
    ],
    certifications: [
      "Arduino Advanced Programming Certification",
      "PCB Design Fundamentals Certificate",
      "MATLAB for Engineering Applications"
    ]
  }

  return (
    <div className="cv-container">
      <header className="cv-header">
        <div className="header-content">
          <h1>{cvData.personal.name}</h1>
          <p className="title-text">{cvData.personal.title}</p>
          <div className="contact-info">
            <span>📧 {cvData.personal.email}</span>
            <span>📱 {cvData.personal.phone}</span>
            <span>📍 {cvData.personal.location}</span>
          </div>
        </div>
      </header>

      <section className="cv-section">
        <h2>Professional Summary</h2>
        <p>{cvData.professional_summary}</p>
      </section>

      <section className="cv-section">
        <h2>Education</h2>
        {cvData.education.map((edu, idx) => (
          <div key={idx} className="cv-item">
            <div className="item-header">
              <h3>{edu.degree}</h3>
              <span className="duration">{edu.year}</span>
            </div>
            <p className="company">{edu.institution}</p>
            <p className="details">{edu.details}</p>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2>Professional Experience</h2>
        {cvData.experience.map((job, idx) => (
          <div key={idx} className="cv-item">
            <div className="item-header">
              <h3>{job.title}</h3>
              <span className="duration">{job.duration}</span>
            </div>
            <p className="company">{job.company}</p>
            <ul className="bullet-list">
              {job.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2>Technical Skills</h2>
        <div className="skills-container">
          {cvData.technical_skills.map((skillGroup, idx) => (
            <div key={idx} className="skill-category">
              <h4>{skillGroup.category}</h4>
              <div className="skills-grid">
                {skillGroup.skills.split(", ").map((skill, i) => (
                  <span key={i} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cv-section">
        <h2>Projects</h2>
        {cvData.projects.map((project, idx) => (
          <div key={idx} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2>Certifications & Achievements</h2>
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
