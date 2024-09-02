import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
   const [tasks, setTasks] = useState([]);

   useEffect(() => {
      axios.get('/tasks')
         .then(response => setTasks(response.data))
         .catch(error => console.log(error));
   }, []);

   return (
      <div>
         <h2>Task List</h2>
         <ul>
            {tasks.map(task => (
               <li key={task._id}>
                  {task.title} - {task.completed ? 'Completed' : 'Pending'}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default TaskList;
