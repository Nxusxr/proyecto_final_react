import React from 'react';
// Importamos los estilos. Asegúrate que la ruta sea correcta.
import '../styles/Novedades.css'; 

// El componente ahora recibe 'props' [cite: 1405]
const NovedadItem = (props) => {
  // Desestructuramos las props que vamos a recibir [cite: 1405]
  const { title, subtitle, imagen, body } = props;

  return (
    <div className="novedades-item">
      {/* Usamos las props en lugar de texto estático */}
      <h1>{title}</h1> 
      <h2>{subtitle}</h2>
      {imagen && <img src={imagen} alt={title} />}
      
      <div dangerouslySetInnerHTML={{ __html: body }} />
      
      <hr />
    </div>
  );
}

export default NovedadItem;
