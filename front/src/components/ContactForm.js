// /front/src/components/ContactForm.js
'use client'; // Necesario porque usamos hooks

import React, { useState } from 'react';
import '../styles/Contacto.css'; // Asegurate que la ruta sea correcta

export default function ContactForm() {
  // Estado inicial del formulario
  const initialData = {
    nombre: '',
    email: '',
    telefono: '',
    comentario: ''
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialData);

  // Maneja los cambios en los inputs
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true);

    try {
      const response = await fetch('http://localhost:5000/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      setSending(false);
      setMsg(result.message);
      
      if (!result.error) {
        setFormData(initialData); // Limpiamos el form si salió bien
      }

    } catch (error) {
      setSending(false);
      setMsg('Hubo un error al enviar el formulario.');
    }
  };

  return (
    <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
      <p>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </p>
      <p>
        <label htmlFor="telefono">Teléfono</label>
        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
      </p>
      <p>
        <label htmlFor="comentario">Comentario</label>
        <textarea name="comentario" value={formData.comentario} onChange={handleChange} required />
      </p>
      
      {/* Mensaje de feedback */}
      {sending && <p>Enviando...</p>}
      {msg && <p>{msg}</p>}

      <p className="centrar">
        <input type="submit" value="Enviar" />
      </p>
    </form>
  );
}