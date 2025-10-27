import React from 'react';
import '../../styles/globals.css'; 
import '../../styles/Nosotros.css';

export default function NosotrosPage() {
  return (
    <div className="main-content">
      <section className="holder">
        <div className="historia">
          <h2>Historia</h2>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ut aperiam suscipit, ad asperiores quia, sint porro. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, iure.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ut aperiam suscipit, ad asperiores quia, sint porro. Fugiat, doloremque. Iure, ipsa!.</p>
          </div>
        </div>

        <h2>Staff</h2>

        {/* Esta estructura replicará los 5 divs de persona solicitados */}
        <div className="personas">
          <div className="persona">
            <img src="https://fakeimg.pl/120x120" width="75" alt="Juan Gomez" />
            <h5>Juan Gomez</h5>
            <h6>Gerente General</h6>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus incidunt culpa consectetur nisi quis sapiente asperiores eos.</p>
          </div>
          <div className="persona">
            <img src="https://fakeimg.pl/120x120" width="75" alt="Laura Torres" />
            <h5>Laura Torres</h5>
            <h6>Jefa de Logística</h6>
            <p>Voluptates dicta, nam, esse, non provident exercitationem sint a placeat vitae molestiae quo fugit! Commodi, tempora.</p>
          </div>
          <div className="persona">
            <img src="https://fakeimg.pl/120x120" width="75" alt="Carlos Ruiz" />
            <h5>Carlos Ruiz</h5>
            <h6>Desarrollador Principal</h6>
            <p>Adipisci sint reiciendis nemo quo aspernatur natus beatae tempora aut minus consequuntur. Sunt, deleniti temporibus.</p>
          </div>
          <div className="persona">
            <img src="https://fakeimg.pl/120x120" width="75" alt="Ana Pérez" />
            <h5>Ana Pérez</h5>
            <h6>Analista Financiera</h6>
            <p>Eos corporis, distinctio ex, iusto quisquam sequi sed velit soluta vero dolore, cumque iste sapiente voluptatum.</p>
          </div>
          <div className="persona">
            <img src="https://fakeimg.pl/120x120" width="75" alt="David Blanco" />
            <h5>David Blanco</h5>
            <h6>Marketing Digital</h6>
            <p>Consectetur, adipisicing elit. Laudantium, voluptatum. Repellendus, sequi. Doloremque, molestias. Recusandae, officia non.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
