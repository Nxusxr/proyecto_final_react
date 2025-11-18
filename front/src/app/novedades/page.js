// /front/src/app/novedades/page.js
import React from 'react';
import '../../styles/globals.css'; 
import '../../styles/Novedades.css';
import NovedadItem from '@/components/NovedadItem';

// URL de nuestra API (asegúrate que el puerto 5000 sea el de tu backend)
const API_URL = 'http://localhost:5000/api/novedades';

// Función para obtener los datos
async function getNovedades() {
  try {
    // Usamos { cache: 'no-store' } para que los datos estén siempre actualizados [cite: 1432]
    const data = await fetch(API_URL, { cache: 'no-store' });
    const novedades = await data.json(); // [cite: 1433]
    return novedades;
  } catch (error) {
    console.error("Error al fetchear novedades:", error);
    return []; // Devuelve array vacío en caso de error
  }
}

// Convertimos la página en un Componente Asíncrono
export default async function NovedadesPage() {
  
  const novedades = await getNovedades();
  
  return (
    <div className="main-content">
      <section className="holder">
        <h2>Novedades</h2>
        
        {/* Mapeamos los datos y los pasamos como props a NovedadItem [cite: 1438] */}
        {novedades.length > 0 ? (
          novedades.map(item => (
            <NovedadItem 
              key={item.id}
              title={item.titulo}
              subtitle={item.subtitulo}
              imagen={item.imagen}
              body={item.cuerpo} 
            />
          ))
        ) : (
          <p>No hay novedades para mostrar.</p>
        )}
        
      </section>
    </div>
  );
}