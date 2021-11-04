import React from "react";
import SingleTask from "./SingleTask";
const TaskContainer = (props) => {
    const taskArray = props.tasks;
    const toggle=props.toggle;
    
    return(
        
        taskArray.map((task)=>{
            if (task.completed === true){
                return(
                    <SingleTask toggle={toggle} key={task.id} id={task.id} status="Complete" title={task.title}/>
                )
            }else{
                return(
                    <SingleTask toggle={toggle} key={task.id} id={task.id} status="Incomplete" title={task.title}/>
                )
            }
        })
        
    );
    
   
    
};

export default TaskContainer;