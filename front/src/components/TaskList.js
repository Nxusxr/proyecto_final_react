import { TaskItem } from "./TaskItem"
import "../styles/TaskList.css"

export function TaskList({ tasks, onToggleStatus, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="task-list-empty">
        <i className="fa fa-check-circle empty-icon"></i>
        <p className="empty-title">No hay tareas pendientes</p>
        <p className="empty-subtitle">Agrega una nueva tarea usando el formulario de arriba</p>
      </div>
    )
  }

  return (
    <div className="task-list-container">
      <h2 className="task-list-title">
        <i className="fa fa-list"></i>
        Itinerario de hoy
        <span className="task-count">{tasks.length}</span>
      </h2>

      <div className="task-list-grid">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onToggleStatus={onToggleStatus} onDeleteTask={onDeleteTask} />
        ))}
      </div>
    </div>
  )
}