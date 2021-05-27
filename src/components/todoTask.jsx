import { React, Fragment, useState } from "react";
import Moment from 'react-moment';

const TodoTask = (props) => {
    const [todoTask, setTodoTask ] = useState(props.data);
    const pendingStatus = todoTask.createdDate ? "Doing" : "Backlog";
    return (
        <div>
            <Fragment>
                <span><p>Task: {todoTask.description}</p></span> 
                <span><p> Status: {todoTask.done ? "Done" : pendingStatus}</p></span>
                <span hidden={!todoTask.createdDate}> <p>Created date: <Moment date={todoTask.createdDate} format="DD/MM/YYYY"/> </p></span>
                <span hidden={!todoTask.dueDate}> <p>Due date: <Moment date={todoTask.dueDate} format="DD/MM/YYYY"/> </p> </span> 
                <span hidden={!todoTask.startDate}><p> Started date: <Moment date={todoTask.startDate} format="DD/MM/YYYY"/> </p> </span> 
                <span hidden={!todoTask.finishDate}><p>Finish date: <Moment date={todoTask.finishDate} format="DD/MM/YYYY"/> </p> </span> 
                <span hidden={!todoTask.finishDate}><p>Spend time: <Moment date={todoTask.finishDate - todoTask.startDate} format="hh:mm:ss"/> </p> </span> 
          </Fragment>
        </div>
    );
};

export default TodoTask;