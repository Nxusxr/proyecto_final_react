import React from 'react';
// Nota: NovedadItem usará estilos de globals o de un futuro novedades.css

export default function NovedadItem() {
  return (
    <div className="novedades-item">
      <h1>Título de la Novedad</h1>
      <h2>Subtítulo de la Noticia</h2>
      <img src="https://fakeimg.pl/960x120" alt="Imagen de la Novedad" />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab beatae quos laudantium? Aspernatur, voluptate dolores. Fugiat blanditiis delectus officiis animi consequatur aspernatur, ea excepturi at nisi iste modi. Praesentium, possimus!</p>
      <hr />
    </div>
  );
}
