import React from 'react';
import '../../styles/globals.css'; 
import '../../styles/Contacto.css';
import ContactForm from '@/components/ContactForm'; 

export default function ContactoPage() {
  return (
    <div className="main-content">
      <main className="holder contacto">
        <div className="columna formulario-col">
          <h3>Complete el siguiente formulario</h3>
          <ContactForm /> 
        </div>

        <div className="columna datos">
          <h3>Otras vías de contacto</h3>
          <p>También puede contactarse con nosotros usando los siguientes medios:</p>
          <ul>
            <li>Teléfono: 123456789</li>
            <li>Email: contacto@itinerario.com</li>
            <li>Facebook: /Itinerario</li>
            <li>Twitter: @Itinerario</li>
            <li>Instagram: @Itinerario</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
