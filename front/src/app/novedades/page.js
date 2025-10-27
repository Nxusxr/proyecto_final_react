import React from 'react';
import '../../styles/globals.css'; 
import '../../styles/Novedades.css';
import NovedadItem from '@/components/NovedadItem'; 

export default function NovedadesPage() {
  return (
    <div className="main-content">
      <section className="holder">
        <h2>Novedades</h2>
        {/* Usamos el componente NovedadItem varias veces para simular la lista */}
        <NovedadItem />
        <NovedadItem />
        <NovedadItem />
      </section>
    </div>
  );
}
