'use client'; 

import { TaskList } from '../components/TaskList'; 
import TaskForm from '../components/TaskForm'; 
import React, { useState } from 'react';
// Importamos el CSS global que tiene los estilos base (como .holder)
import '../styles/globals.css'; 

// Datos de PRUEBA Iniciales (Mock Data)
const initialTasks = [
  {
    id: 't-1',
    title: 'Reunión de planificación de sprint',
    description: 'Revisar backlog, asignar tareas y estimar tiempo.',
    date: '2025-10-09',
    time: '10:00',
    status: 'in-progress',
    priority: 'high',
    category: 'work',
  },
  {
    id: 't-2',
    title: 'Comprar ingredientes para cena',
    description: 'Necesito pollo y vegetales frescos.',
    date: '2025-10-09',
    time: '18:00',
    status: 'pending',
    priority: 'medium',
    category: 'personal',
  },
  {
    id: 't-3',
    title: 'Ejercicio matutino',
    description: 'Correr 30 minutos o hacer yoga.',
    date: '2025-10-09',
    time: '07:00',
    status: 'completed',
    priority: 'low',
    category: 'personal',
  },
];

export default function HomePage() {
  const [tasks, setTasks] = useState(initialTasks);

  // Función para agregar una nueva tarea (pasada al TaskForm)
  const handleAddTask = (newTask) => {
    // Agregamos la nueva tarea al inicio de la lista
    setTasks(prevTasks => [newTask, ...prevTasks]);
    // Uso de console.log en lugar de alert()
    console.log(`Tarea "${newTask.title}" agregada!`);
  };

  return (
    <div className="main-content">
      <div className="holder">
        <header className="page-header">
            <h1>
              Mi Itinerario Diario
            </h1>
            <p className="page-subtitle">
              Tareas para {new Date().toLocaleDateString('es-ES', { dateStyle: 'full' })}
            </p>
        </header>

        {/* Formulario para agregar nuevas tareas */}
        <TaskForm onAddTask={handleAddTask} /> 

        {/* Lista de tareas */}
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}
