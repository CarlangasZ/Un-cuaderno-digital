import React, { useState } from 'react'
import './TaskForm.css'

export default function TaskForm({ setTask }) {    
    
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();        

        if (titulo == '') {
            alert("Por favor ponle un título a la tarea");
        } else {

            const nuevoTaskItem = {
                id: Date.now(),
                titulo: titulo,
                descripcion: descripcion,
            }

            console.log("Id: " + nuevoTaskItem.id);
            console.log("Titulo: " + titulo);
            console.log("Descripcion: " + descripcion);

            const storedTasks = localStorage.getItem('TasksData');
            const existingTasks = storedTasks ? JSON.parse(storedTasks) : [];

            const updatedTasks = [...existingTasks, nuevoTaskItem];

            setTask(updatedTasks);
            localStorage.setItem('TasksData', JSON.stringify(updatedTasks));

            setTitulo('');
            setDescripcion('');            
        }
    }

    return (
        <form className="formulario" id="formulario" onSubmit={handleSubmit}>
            
            <h2>Agregar Tarea</h2>

            <label htmlFor="titulo">Título:</label>
            <input type="text" id="titulo" name="titulo" required="" value={titulo} 
                onChange={(e)=> setTitulo(e.target.value)} />
            <br />
            
            <label htmlFor="descripcion">Descripción:</label>
            <input type="text" id="descripcion" name="descripcion" value={descripcion} 
                onChange={(e)=> setDescripcion(e.target.value)} />
            <br />

            <button className="boton" id="btnAgregar" type="submit">
                Agregar
            </button>
        </form>
    )
}