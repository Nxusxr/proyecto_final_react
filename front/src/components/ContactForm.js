"use client"

import { useState } from "react"
import "../styles/Contacto.css"

export default function ContactForm() {
  const initialData = {
    nombre: "",
    email: "",
    telefono: "",
    comentario: "",
  }

  const [sending, setSending] = useState(false)
  const [msg, setMsg] = useState("")
  const [formData, setFormData] = useState(initialData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMsg("")
    setSending(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contacto`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      setSending(false)
      setMsg(result.message)

      if (!result.error) {
        setFormData(initialData)
      }
    } catch (error) {
      setSending(false)
      setMsg("Hubo un error al enviar el formulario.")
    }
  }

  return (
    <div className="contact-form-card">
      <h3 className="form-title">
        <i className="fas fa-paper-plane"></i>
        Envíanos un mensaje
      </h3>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="nombre">
            <i className="fas fa-user"></i>
            Nombre completo
          </label>
          <div className="input-wrapper">
            <i className="fas fa-user input-icon"></i>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">
            <i className="fas fa-envelope"></i>
            Correo electrónico
          </label>
          <div className="input-wrapper">
            <i className="fas fa-envelope input-icon"></i>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="telefono">
            <i className="fas fa-phone"></i>
            Teléfono
          </label>
          <div className="input-wrapper">
            <i className="fas fa-phone input-icon"></i>
            <input
              type="text"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="+54 11 1234-5678"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="comentario">
            <i className="fas fa-comment-dots"></i>
            Mensaje
          </label>
          <div className="input-wrapper">
            <i className="fas fa-comment-dots input-icon textarea-icon"></i>
            <textarea
              id="comentario"
              name="comentario"
              value={formData.comentario}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí..."
              rows="5"
              required
            />
          </div>
        </div>

        {sending && (
          <div className="form-message sending">
            <i className="fas fa-spinner fa-spin"></i>
            Enviando mensaje...
          </div>
        )}

        {msg && (
          <div className={`form-message ${msg.includes("error") ? "error" : "success"}`}>
            <i className={`fas ${msg.includes("error") ? "fa-exclamation-circle" : "fa-check-circle"}`}></i>
            {msg}
          </div>
        )}

        <button type="submit" className="submit-btn" disabled={sending}>
          <i className="fas fa-paper-plane"></i>
          <span>{sending ? "Enviando..." : "Enviar mensaje"}</span>
        </button>
      </form>
    </div>
  )
}