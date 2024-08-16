import { useState } from 'react';

interface ToDoListProps {
    tasks: Task[];
    setTasks: (task: Task[]) => void;
}

export interface Task {
    id: number;
    text: string;
    bgColor: string;
}

export function ToDoList({ tasks, setTasks }: ToDoListProps) {
    const [newTask, setNewTask] = useState<string>('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            const newTaskObject: Task = {
                id: Date.now(),
                text: newTask,
                bgColor: 'hsl(' + Math.random() * 360 + ', 100%, 75%)'
            };
            setTasks([...tasks, newTaskObject]);
            setNewTask('');
        } else {
            alert('Preencha o título da tarefa.')
        }
    };

    const handleRemoveTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className='to-do-list'>
            <h1>Lista de Tarefas</h1>
            <div className='add-task-input'>
                <input
                    type='text'
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder='Digite uma nova tarefa'
                    required
                />
                <button onClick={() => handleAddTask()}>Adicionar</button>
            </div>
            <ul className='task-list'>
                {tasks.map((task) => (
                    <li key={task.id} className='task' style={{ backgroundColor: task.bgColor }}>
                        {task.text}
                        <button onClick={() => handleRemoveTask(task.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}