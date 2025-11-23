import "../globals.css"
import "../../styles/Contacto.css"
import ContactForm from "@/components/ContactForm"

export default function ContactoPage() {
  return (
    <div className="main-content">
      <main className="contacto-container">
        <div className="contacto-header">
          <h1 className="contacto-title">Contactanos</h1>
          <p className="contacto-subtitle">
            Estamos aquí para ayudarte. Envíanos un mensaje o contáctanos directamente.
          </p>
        </div>

        <div className="contacto-grid">
          {/* Formulario de contacto */}
          <div className="contacto-form-wrapper">
            <ContactForm />
          </div>

          {/* Información de contacto */}
          <div className="contacto-info">
            <h3 className="info-title">Otras vías de contacto</h3>
            <p className="info-description">También puedes contactarnos usando los siguientes medios:</p>

            <div className="contact-methods">
              <div className="contact-method">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <h4>Teléfono</h4>
                  <p>123456789</p>
                </div>
              </div>

              <div className="contact-method">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>contacto@itinerario.com</p>
                </div>
              </div>

              <div className="contact-method">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Ubicación</h4>
                  <p>Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4 className="social-title">Síguenos en redes sociales</h4>
              <div className="social-buttons">
                <a href="#" className="social-btn facebook">
                  <i className="fab fa-facebook-f"></i>
                  <span>Facebook</span>
                </a>
                <a href="#" className="social-btn twitter">
                  <i className="fab fa-twitter"></i>
                  <span>Twitter</span>
                </a>
                <a href="#" className="social-btn instagram">
                  <i className="fab fa-instagram"></i>
                  <span>Instagram</span>
                </a>
                <a href="#" className="social-btn linkedin">
                  <i className="fab fa-linkedin-in"></i>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}