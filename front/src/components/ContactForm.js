import React from 'react';

export default function ContactForm() {
  // Nota: La acción real del formulario debería manejarse con un estado de React
  // y una función asíncrona, pero por ahora se mantiene como formulario HTML estático.
  return (
    <form action="/contacto" method="post" className="formulario">
      <p>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" required />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="telefono">Teléfono</label>
        <input type="text" id="telefono" name="telefono" />
      </p>
      <p>
        <label htmlFor="comentario">Comentario</label>
        <textarea id="comentario" name="comentario" rows="4" required />
      </p>
      <p className="centrar">
        <input type="submit" value="Enviar" />
      </p>
    </form>
  );
}
