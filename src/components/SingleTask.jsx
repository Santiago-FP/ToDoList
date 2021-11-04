import React from "react";





const SingleTask = (props) => {
    const toggle = ()=>{
        props.toggle(props.id)
    }
 if (props.status === "Complete"){
     return(
    <div key={props.id} id={props.id} status="Complete" className="flex flex-col justify-between bg-gray-300 text-black border-green-600 border-2 my-1 mx-1 w-52 rounded-md px-1 py-1 text-left shadow-md ">
        <p>{props.title}</p>
        <button onClick={toggle} className="bg-green-400 border-black border-2 rounded-md p-1">Complete</button>

    </div>    
    )}else{
        return(
                    
            <div key={props.id} id={props.id} status="Incomplete" className="flex flex-col justify-between bg-gray-300 text-black border-green-600 border-2 my-1 mx-1 w-52 rounded-md px-1 py-1 text-left shadow-md ">
                <p>{props.title}</p>
                <button onClick={toggle} className="bg-red-400 border-black border-2 rounded-md p-1 ">Incomplete</button>

            </div>    
            )
    }
};

export default SingleTask;