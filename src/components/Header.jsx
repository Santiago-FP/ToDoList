
import React from "react";




// const taskSelection = ()=>{
//     setSelection({name})
// }
const Header = (props) => {
    const selectAll= props.selectAll;
    const selectComplete = props.selectComplete;
    const selectIncomplete = props.selectIncomplete;

    const MainButton = (props) =>  {
        const select= props.select;
        return(<button onClick={select} className="bg-black mx-1 rounded p-2 text-lg mt-3 hover:bg-gray-300 hover:text-black transition duration-500">{props.name}</button>
        );
        
    };
    
    return(
        <div className="text-yellow-300 bg-green-600 text-center text-4xl font-black py-3 sticky top-0">
            <h1>My To Do List</h1>
            <MainButton select={selectAll}  name="All" />
            <MainButton select={selectComplete}  name="Completed" />
            <MainButton select={selectIncomplete}   name="Incomplete"/>
        </div>
        
    );

    
};

export default Header