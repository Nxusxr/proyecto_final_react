"use client"

import { useState } from "react"
import "../styles/TaskForm.css"

const initialFormState = {
  title: "",
  description: "",
  date: new Date().toISOString().split("T")[0],
  time: "10:00",
  priority: "medium",
  category: "personal",
}

export default function TaskForm({ onAddTask }) {
  const [formData, setFormData] = useState(initialFormState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTask = {
      ...formData,
      status: 0,
    }

    onAddTask(newTask)
    setFormData(initialFormState)
  }

  return (
    <form onSubmit={handleSubmit} className="task-form-container">
      <h2 className="form-title">
        <i className="fa fa-plus-circle"></i>
        Agregar Nueva Tarea
      </h2>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="title">
            <i className="fa fa-pencil"></i> Título
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="input-field"
            placeholder="Nombre de la tarea"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">
            <i className="fa fa-calendar"></i> Fecha
          </label>
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

        <div className="form-group">
          <label htmlFor="time">
            <i className="fa fa-clock"></i> Hora
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label htmlFor="priority">
            <i className="fa fa-flag"></i> Prioridad
          </label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="input-field"
          >
            <option value="high">🔴 Alta</option>
            <option value="medium">🟡 Media</option>
            <option value="low">🟢 Baja</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="category">
            <i className="fa fa-tag"></i> Categoría
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="input-field"
          >
            <option value="personal">Personal</option>
            <option value="work">Trabajo</option>
            <option value="study">Estudio</option>
            <option value="health">Salud</option>
          </select>
        </div>
      </div>

      <div className="form-group wide">
        <label htmlFor="description">
          <i className="fa fa-align-left"></i> Descripción
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          className="input-field"
          placeholder="Detalles adicionales..."
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-button">
          <i className="fa fa-save"></i>
          Guardar Tarea
        </button>
      </div>
    </form>
  )
}