    'use client'; 

import React, { useState } from 'react';
import '../styles/TaskForm.css'; // Importamos el archivo de estilos CSS

// Estructura de Tarea (solo para referencia)
/*
{
  id: string,
  title: string,
  description: string,
  date: string,
  time: string,
  status: 'pending' | 'in-progress' | 'completed',
  priority: 'low' | 'medium' | 'high',
  category: string,
}
*/

const initialFormState = {
  title: '',
  description: '',
  date: new Date().toISOString().split('T')[0], // Fecha de hoy por defecto
  time: '10:00',
  priority: 'medium',
};

export default function TaskForm({ onAddTask }) {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulación de creación de Tarea con un ID temporal
    const newTask = {
      ...formData,
      id: Date.now().toString(), // ID simple por ahora
      status: 'pending', 
      category: 'personal', 
    };
    
    // Llama a la función que viene por prop para manejar la lógica
    onAddTask(newTask);

    // Resetea el formulario
    setFormData(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form-container">
      <h2 className="form-title">Agregar Nueva Tarea</h2>
      
      <div className="form-grid">
        {/* Título */}
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input 
            type="text" 
            id="title" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            required 
            className="input-field"
          />
        </div>
        
        {/* Fecha */}
        <div className="form-group">
          <label htmlFor="date">Fecha</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            value={formData.date} 
            onChange={handleChange} 
            required 
            className="input-field"
          />
        </div>

        {/* Hora */}
        <div className="form-group">
          <label htmlFor="time">Hora</label>
          <input 
            type="time" 
            id="time" 
            name="time" 
            value={formData.time} 
            onChange={handleChange} 
            className="input-field"
          />
        </div>

        {/* Prioridad */}
        <div className="form-group">
          <label htmlFor="priority">Prioridad</label>
          <select 
            id="priority" 
            name="priority" 
            value={formData.priority} 
            onChange={handleChange} 
            className="input-field"
          >
            <option value="high">Alta</option>
            <option value="medium">Media</option>
            <option value="low">Baja</option>
          </select>
        </div>
      </div>

      {/* Descripción */}
      <div className="form-group wide">
        <label htmlFor="description">Descripción</label>
        <textarea 
          id="description" 
          name="description" 
          value={formData.description} 
          onChange={handleChange} 
          rows="3" 
          className="input-field"
        />
      </div>

      <div className="form-actions">
        <button 
          type="submit" 
          className="submit-button"
        >
          Guardar Tarea
        </button>
      </div>
    </form>
  );
}
