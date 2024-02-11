import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { toggleTask, editTask, deleteTask } from '../JS/taskSlice.js'

const Task =({ task }) => {
    const [ isEditing, setIsEditing ] =useState(false)
    const [editedDescription, setEditedDescription] = useState(task.description)
    const dispatch = useDispatch()

    const handleToggleTask = () => {
    dispatch(toggleTask(task.id))
    }

    const handleEditedTask = () => {
        setIsEditing(true) 
    }

    const handleSaveEdit = () => {
        dispatch(editTask({id:task.id, description:editedDescription}))
        setIsEditing(false);
    }

    const handleDeleteTask = () => {
        dispatch(deleteTask(task.id))
    }

    return (
        <div className='task'>
            <input 
            type = "checkbox" 
            checked = {task.isDone}
            onChange ={ handleToggleTask }
             />

             {isEditing ? (
               <input 
                type="text" 
                value ={editedDescription}
                onChange ={(e) => setEditedDescription(e.target.value)}
               />
             ): (
                <span>{task.description}</span>
            )}

             {isEditing? (
                <button onClick={handleSaveEdit}>Save</button>
             ):(
                <div className='edit'>
               <button className='btn1' onClick = {handleEditedTask}>Edit</button> 
               <button className='btn2' onClick = {handleDeleteTask}>Remove</button>
            </div>
           )}

         </div>
    )
}

export default Task;

