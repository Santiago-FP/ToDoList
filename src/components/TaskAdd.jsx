import React from "react";

const addTask = () => {
    console.log("working")
}

const TaskAdd = () => {
    
    return(
        <>
        <div className="flex justify-center">        

            <div className="mt-1">
            <input type="text" className="border-2 border-green-600"/>
            <button className="text-yellow-300 bg-black border-black border-2 p-1 rounded-md ml-1 hover:bg-gray-300 hover:text-black transition duration-500" onClick={addTask}>Add Task</button>
            </div>
        </div>
        </>
        
    );
};

export default TaskAdd;