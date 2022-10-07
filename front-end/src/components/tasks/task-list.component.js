const Task = ({ task }) => {

    return (
        <li>{ task }</li>
    );
}

const TaskList = ({ tasks }) => {
    console.log(tasks);
    return (
        <ul className="task-list">
            { tasks.map((task,idx) => <Task key={idx} task={task} />)}
        </ul>
    );
}


export default TaskList;