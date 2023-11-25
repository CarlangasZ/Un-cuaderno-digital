import React, { useState, useEffect } from 'react';
import TaskForm from '../TaskForm/TaskForm.jsx';
import TaskList from '../TaskList/TaskList';

export default function TaskContainer() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('TasksData'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    function handleDelete(id) {
        const actualizatedTasks = tasks.filter(task => task.id !== id);
        setTasks(actualizatedTasks);
        localStorage.setItem('TasksData', JSON.stringify(actualizatedTasks));
    }

    const updateTask = (taskId, newData) => {
        const actualizatedTasks = tasks.map((task) => (task.id === taskId ? { ...task, ...newData } : task));
        setTasks(actualizatedTasks);
        localStorage.setItem('TasksData', JSON.stringify(actualizatedTasks));
    }

    const deleteTaskList = () => {
        localStorage.removeItem('TasksData');
        setTasks([]);
    }

    return (
        <div className="column container">
            <TaskForm setTask={setTasks} />

            <br></br>

            <TaskList tasks={tasks} updateTask={updateTask} handleDelete={handleDelete} />

            <br /><br />
        </div>
    );
}