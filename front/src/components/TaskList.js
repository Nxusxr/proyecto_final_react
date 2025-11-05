import React from 'react';
import { TaskItem } from './TaskItem';
// Importamos el CSS para el contenedor
import '../styles/TaskList.css'; 


/**
 * Componente que renderiza la lista completa de tareas.
 * @param {object} props - Propiedades del componente.
 * @param {Array<object>} props.tasks - Array de objetos de tareas.
 */
export function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return (
      <div className="task-list-empty">
        <p>🎉 ¡No hay tareas pendientes para hoy! 🎉</p>
        <p className='task-list-empty-subtitle'>Agrega una nueva tarea usando el formulario.</p>
      </div>
    );
  }

  return (
    <div className="task-list-container">
      <h2 className="task-list-title">Itinerario de hoy</h2>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskItem task={task} onToggleStatus={onToggleStatus} /> 
          </li>
        ))}
      </ul>
    </div>
  );
}
