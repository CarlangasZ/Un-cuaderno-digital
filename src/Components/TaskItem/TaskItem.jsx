import React, { useState, useEffect } from 'react'
import './TaskItem.css'

export default function TaskItem({ task, updateTask, handleDelete }) {

    const [completada, setCompletada] = useState(false);
    const [editingMode, setEditingMode] = useState(false);
    const [editableData, setEditableData] = useState({
        titulo: editingMode ? task.titulo : '',
        descripcion: editingMode ? task.descripcion : '',
    });

    const handleEditableChange = (event) => {
        const { name, value } = event.target;
        setEditableData({
            ...editableData,
            [name]: value,
        });
    };

    const handleSave = () => {
        const { titulo, descripcion } = editableData;

        updateTask(task.id, {
            titulo,
            descripcion,
          });

        setEditableData({
            titulo: titulo,
            descripcion: descripcion,
        });

        setEditingMode(false);
    };

    useEffect(() => {
        setEditableData({
            titulo: task.titulo,
            descripcion: task.descripcion,
        });
    }, [task]);


    return (
        <div className="card">
            <h5 className={`card-header ${completada ? 'completed-text' : ''}`}>
                {editingMode ? (
                    <input
                        type="text"
                        name="titulo"
                        value={editableData.titulo}
                        onChange={handleEditableChange}
                    />
                ) : (
                    task.titulo
                )}
            </h5>
            <div className="card-body">
                <p className={`card-text ${completada ? 'completed-text' : ''}`}>
                    {editingMode ? (
                        <textarea
                            name="descripcion"
                            value={editableData.descripcion}
                            onChange={handleEditableChange}
                        />
                    ) : (
                        task.descripcion
                    )}
                </p>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <a onClick={() => setCompletada(!completada)} className="btn btnComplete">
                    {completada ? 'Habilitar' : 'Completar'}
                    </a>
                    <a onClick={() => {
                        if (editingMode) {
                            handleSave();
                        } else {
                            setEditingMode(!editingMode);
                            setEditableData({ titulo: task.titulo, descripcion: task.descripcion });
                        }
                    }} className="btn btnEdit">
                        {editingMode ? 'Guardar' : 'Editar'}
                    </a>
                    <a onClick={() => handleDelete(task.id)} className="btn btnDelete">
                        Eliminar
                    </a>
                </div>
            </div>
        </div>
    )
}