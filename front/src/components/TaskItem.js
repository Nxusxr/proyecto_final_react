import React from 'react';

// Importamos los estilos para TaskList/TaskItem
import '../styles/TaskList.css'; 

/**
 * Función auxiliar para obtener la clase CSS de prioridad.
 * @param {string} priority - La prioridad de la tarea ('high', 'medium', 'low').
 * @returns {string} La clase CSS correspondiente.
 */
const getPriorityClass = (priority) => {
  switch (priority) {
    case 'high':
      return 'priority-high';
    case 'medium':
      return 'priority-medium';
    case 'low':
      return 'priority-low';
    default:
      return 'priority-low';
  }
};

/**
 * Componente que renderiza una sola tarea del itinerario.
 * @param {object} props - Propiedades del componente.
 * @param {object} props.task - Objeto de la tarea a mostrar.
 */
export function TaskItem({ task }) {
  const priorityClass = getPriorityClass(task.priority);
  // Determina si la tarea está completada para aplicar un estilo visual diferente
  const statusClass = task.status === 'completed' ? 'task-completed' : '';

  return (
    <div className={`task-item ${statusClass}`}>
      
      {/* Indicador visual de Prioridad */}
      <div className={`priority-indicator ${priorityClass}`} title={`Prioridad: ${task.priority}`}></div>

      <div className="task-content">
        <p className="task-title">
          {task.title}
        </p>
        <p className="task-description">
          {task.description}
        </p>
      </div>

      {/* Hora y Categoría */}
      <div className="task-meta">
        <span className="task-time">{task.time}</span>
        <span className="task-category">{task.category}</span>
      </div>
    </div>
  );
}
