import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [],
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },

        toggleTask: (state, action) => {
        const task = state.tasks.find(task => task.id === action.payload)
            if (task){
                task.isDone = !task.isDone
            }        
        },

        editTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload)
                if(task){
                    task.description = action.payload.description
                }
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        }
    }
});

export const { addTask, toggleTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer