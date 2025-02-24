import { useState } from 'react';
import "./App.css";

function App() {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <div className="container">
      <div className="main-cont">
        <header className="header">
          <h1 className="name">Fritz Gerald F. Bubog</h1>
          <p className="title">Front-end Developer</p>
          <button 
            className="info-toggle" 
            onClick={() => setInfoOpen(prev => !prev)}
          >
            {infoOpen ? "Hide Info" : "Show Info"}
          </button>

          <div className={`info-dropdown ${infoOpen ? "open" : ""}`}>
            <img src="/gerald.jpg" alt="Profile" className="profile-pic" />
            <p><strong>Name:</strong> Fritz Gerald F. Bubog</p>
            <p><strong>Age:</strong> 22</p>
            <p><strong>Address:</strong> Tetuan</p>
          </div>
        </header>

        <main>
          <section className="about">
            <h2>About Me</h2>
            <p>
              I'm a passionate Frontend Developer with experience in creating responsive and user-friendly web
              applications. I specialize in modern web technologies and always strive to deliver high-quality, efficient
              code.
            </p>
          </section>

          <section className="career-goals">
            <h2>Career Goals</h2>
            <p>
              My goal is to become a skilled frontend developer by learning modern frameworks like React. I want to work on projects that improve user experience and create visually appealing websites. In the future, I hope to lead a team, 
              help other developers grow, and keep learning as technology evolves.
            </p>
          </section>

          <section className="personal-touch">
            <h2>Hobbies</h2>
            <p>
              Beyond coding, I enjoy listening to music, playing games, and also watching Anime and movies in my free time.
            </p>
          </section>

          <section className="skills">
            <h2>My Skills</h2>
            <div className="skills-grid">
              <div className="skill-item">HTML</div>
              <div className="skill-item">CSS</div>
              <div className="skill-item">JavaScript</div>
            </div>
          </section>

          <section className="call-to-action">
            <h2>Let's Work Together!</h2>
            <p>
              I'm a frontend developer who enjoys building websites that work well on any device.
              I focus on modern web technologies and always try to write clean and efficient code.
            </p>
            <a href="mailto:bubogf@gmail.com" className="cta-button">Contact Me</a>
          </section>

          <section className="contact">
            <h2>Contact</h2>
            <p>Email: bubogf@gmail.com</p>
            <p>GitHub: <a href="https://github.com/gerald061002" target="_blank" rel="noopener noreferrer">github.com/gerald061002</a></p>
            <p>Cellphone Number: 0935 114 7818</p>
          </section>
        </main>

        <footer>
          <p>&copy; 2025 Fritz Gerald F. Bubog. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
