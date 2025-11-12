// /front/src/app/page.js
'use client'; 

import { TaskList } from '../components/TaskList'; 
import TaskForm from '../components/TaskForm'; 
import React, { useState, useEffect } from 'react'; // Agregamos useEffect
import '../styles/globals.css'; 

const API_BASE_URL = 'http://localhost:5000/api/tareas'; 

export default function HomePage() {
  const [tasks, setTasks] = useState([]); // Inicializa vacío
  const [loading, setLoading] = useState(true);

  // ----------------------------------------------------
  // FUNCIÓN PARA CARGAR TAREAS (READ - GET)
  // ----------------------------------------------------
  const fetchTasks = async () => {
    setLoading(true);
    try {
      // 1. Llama a tu API REST de Express
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
        throw new Error('No se pudo obtener la lista de tareas');
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  // Carga las tareas cuando arranca el componente (al iniciar la app)
  useEffect(() => {
    fetchTasks();
  }, []); 

  // ----------------------------------------------------
  // FUNCIÓN PARA AÑADIR TAREA (CREATE - POST)
  // ----------------------------------------------------
  const handleAddTask = async (formData) => {
    const newTaskPayload = {
      ...formData,
      status: 0,
    };
    
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTaskPayload),
      });

      if (response.ok) {
        console.log(`Tarea "${newTaskPayload.title}" agregada a la BD!`);
        fetchTasks(); // Recarga la lista para mostrar la nueva tarea
      } else {
        throw new Error('Error en el servidor al guardar la tarea.');
      }
    } catch (error) {
      console.error('Error al agregar tarea:', error);
    }
  };

  // ----------------------------------------------------
  // FUNCIÓN PARA CAMBIAR ESTADO (UPDATE - PUT)
  // ----------------------------------------------------
  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 1 ? 0 : 1;

    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (response.ok) {
        fetchTasks(); // Recarga la lista para reflejar el cambio
      } else {
        throw new Error('Error al actualizar el estado.');
      }
    } catch (error) {
      console.error('Error al cambiar el estado:', error);
    }
  };


  return (
    <div className="main-content">
      <div className="holder">
        {/* ... (Header) */}

        <TaskForm onAddTask={handleAddTask} /> 

        {loading ? (
            <div className="task-list-empty">
                <p>Cargando tareas...</p>
            </div>
        ) : (
             <TaskList tasks={tasks} onToggleStatus={handleToggleStatus} /> 
        )}
      </div>
    </div>
  );
}