"use client"
import "../styles/TaskList.css"

const getPriorityClass = (priority) => {
  switch (priority) {
    case "high":
      return "priority-high"
    case "medium":
      return "priority-medium"
    case "low":
      return "priority-low"
    default:
      return "priority-low"
  }
}

export function TaskItem({ task, onToggleStatus, onDeleteTask }) {
  const priorityClass = getPriorityClass(task.priority)
  const isCompleted = task.status === 1
  const statusClass = isCompleted ? "task-completed" : ""

  return (
    /* Tarjeta individual con sombra suave */
    <div className={`task-item-card ${statusClass}`}>
      <div className={`priority-border ${priorityClass}`}></div>

      <div className="task-item-content">
        <div
          className={`task-checkbox ${isCompleted ? "checked" : ""}`}
          onClick={() => onToggleStatus(task.id, task.status)}
          title={isCompleted ? "Marcar como pendiente" : "Marcar como completada"}
        >
          {isCompleted && <i className="fa fa-check"></i>}
        </div>

        <div className="task-main-content" onClick={() => onToggleStatus(task.id, task.status)}>
          <div className="task-header">
            <p className="task-title">{task.title}</p>
            <span className="task-time">
              <i className="fa fa-clock"></i> {task.time}
            </span>
          </div>

          <p className="task-description">{task.description}</p>

          <div className="task-footer">
            <span className={`task-category ${task.category}`}>
              <i className="fa fa-tag"></i> {task.category}
            </span>
            {isCompleted && (
              <span className="task-completed-badge">
                <i className="fa fa-check-circle"></i> Completada
              </span>
            )}
          </div>
        </div>

        <div className="task-actions">
          <button
            onClick={() => onToggleStatus(task.id, task.status)}
            aria-label={isCompleted ? "Marcar como pendiente" : "Marcar como completada"}
            className="action-btn complete-btn"
            title={isCompleted ? "Marcar como pendiente" : "Marcar como completada"}
          >
            <i className={`fa ${isCompleted ? "fa-rotate-left" : "fa-check"}`}></i>
          </button>

          <button
            onClick={() => onDeleteTask(task.id)}
            aria-label={`Eliminar tarea ${task.title}`}
            className="action-btn delete-btn"
            title="Eliminar tarea"
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  )
}