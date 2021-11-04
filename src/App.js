import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import TaskContainer from './components/TaskContainer';
//Instrucciones
// Aplicación ToDo
// Utilizar la siguiente API para mostrar un listado de tareas: https://jsonplaceholder.typicode.com/todos
// Mostrar únicamente 20 todos
// Crear un componente Header con 3 botones, uno mostrará el listado completo, otro sólo las tareas completas, y el último mostrará las tareas sin completar.
// Cada tarea deberá mostrar su respectivo título, y un botón para cambiar su estatus
// El cambio de tareas deberá de actualizar lo que vemos por pantalla automáticamente (Si completo un todo en la lista de incompletos, deberá de desaparecer y aparecer en completos, por ejemplo)
// Diseño libre y uso de frameworks css libre (No obligatorio)
function App() {
  //variables
  const apiLink ="https://jsonplaceholder.typicode.com/todos";
  const [tasks,setTasks] = useState([]);
  const [incomplete,setIncomplete] = useState([]);
  const [complete,setComplete] = useState([]);
  const [selection,setSelection] = useState("All");
  let taskList = [];
 //Obtener la lista de tareas de la api
  const getTasks = async ()=> {
    const fetchApi =  await fetch(apiLink);
    const allTasks= await fetchApi.json()
     taskList = await allTasks.slice(0,20);
     setTasks(taskList);
     setComplete(tasks.filter(task => task.completed === true));
     setIncomplete(tasks.filter(task => task.completed !== true));
  };

  //funciones para cambiar las tareas que se muestran
const selectAll = () => {
  if (selection !== "All"){setSelection("All");}
  
};
const selectComplete = () => {
  if (selection !== "Complete"){
    setComplete(tasks.filter(task => task.completed === true));
    setSelection("Complete");
}
  
};
const selectIncomplete = () => {
  if (selection !== "Incomplete" && incomplete !== []){
    setIncomplete(tasks.filter(task => task.completed !== true));
    setSelection("Incomplete");}  
  
};

  //Cambiar el status de una tarea
  const toggleStatus= (id) =>{
    const currentList = tasks;
    const taskIndex = id-1;
    let taskStatus = currentList[taskIndex].completed;
    if (taskStatus=== true){
      currentList[taskIndex].completed = false;
    }else {currentList[taskIndex].completed = true;};
    
    setTasks(currentList);
    setIncomplete(tasks.filter(task => task.completed !== true));
    setComplete(tasks.filter(task => task.completed === true));
  };
  //useEffect
  
  useEffect(()=>{
    getTasks();
  // eslint-disable-next-line
  },[]);
  //render all tasks
  if(selection==="All"){
    return (
      <>
      <Header selectAll={selectAll} selectIncomplete={selectIncomplete} selectComplete={selectComplete} />
      
      <div className=" flex flex-row flex-wrap justify-center"><TaskContainer  tasks={tasks} toggle={toggleStatus}/></div>
      
      </>
    );
  }else if (selection ==="Complete"){
    return(
        <>
        <Header selectAll={selectAll} selectIncomplete={selectIncomplete} selectComplete={selectComplete} />
        
        <div className=" flex flex-row flex-wrap justify-center"><TaskContainer  tasks={complete} toggle={toggleStatus}/></div>
        
        </>
      );
    
  }else if (selection==="Incomplete"){
    
      return(
      <>
        <Header selectAll={selectAll} selectIncomplete={selectIncomplete} selectComplete={selectComplete} />
        
        <div className=" flex flex-row flex-wrap justify-center"><TaskContainer  tasks={incomplete} toggle={toggleStatus}/></div>
        
        </>
    );
    
  }
};
export default App;
