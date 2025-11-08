

export const ShowTask = ({taskList, setTaskList, task, setTask}) => {
    // const tasks= [{id:1001, name: "Task 1", time: "2:30:40 PM 08/11/2025"},
    //     {id:1002, name: "Task 2", time: "2:30:40 PM 08/11/2025"},
    //     {id:1003, name: "Task 3", time: "2:30:40 PM 08/11/2025"}]

    const handleEdit = (id) => {
        const selectedTask = taskList.find(todo => todo.id === id);
        setTask(selectedTask);
    }

    const handleDelete = (id) => {
        const updatedTaskList = taskList.filter(todo => todo.id !== id);
        setTaskList(updatedTaskList);
    }
  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">{taskList.length}</span>
            </div>
            <button onClick={() => setTaskList([])} className="clearAll">Clear All</button>
        </div>
        <ul>
            {taskList.map((todo) => {
                return(
                <li key={todo.id}>
                    <p>
                        <span className="name">{todo.name}</span>
                        <span className="time">{todo.time}</span>
                    </p>
                    <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
                    <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
                </li>
            )})}
        </ul>
    </section>
  )
}
