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
export function TaskItem({ task, onToggleStatus }) {
  const priorityClass = getPriorityClass(task.priority);
  
  const isCompleted = task.status === 1;
  const statusClass = isCompleted ? 'task-completed' : '';

  return (
    <div 
      className={`task-item ${statusClass}`}
      onClick={() => onToggleStatus(task.id, task.status)}
      style={{ cursor: 'pointer' }}
    >
      
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
        {/* Indicador visual de completado en la meta */}
        <span className="task-category">{isCompleted ? 'COMPLETADA' : task.category}</span> 
      </div>
    </div>
  );
}
