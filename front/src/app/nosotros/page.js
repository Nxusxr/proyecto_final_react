import "../globals.css"
import "../../styles/Nosotros.css"

export default function NosotrosPage() {
  const MY_IMAGE_URL = "https://res.cloudinary.com/dyaadytht/image/upload/v1763929415/img-repensada_svn6sl.png";
  return (
    <div className="main-content">
      <section className="holder">
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-image-wrapper">
                <img src={MY_IMAGE_URL} alt="Perfil de Desarrollador" className="profile-image" />
              </div>
              <h1 className="profile-name">Santiago López Carbini</h1>
              <h2 className="profile-title">Desarrollador Full Stack</h2>
            </div>

            <div className="profile-bio">
              <p>
                Apasionado por crear soluciones web modernas y eficientes. Especializado en React, Next.js, Node.js y
                bases de datos SQL. Me encanta transformar ideas en aplicaciones funcionales y atractivas que
                resuelven problemas reales.
              </p>
              <p>
                Con experiencia en desarrollo frontend y backend, disfruto trabajando en proyectos desafiantes que me
                permiten aprender nuevas tecnologías y mejores prácticas de la industria.
              </p>
            </div>

            <div className="profile-social">
              <a
                href="https://github.com/Nxusxr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button github"
              >
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/santiagolopezcarbini"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button linkedin"
              >
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}