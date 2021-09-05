import React, { useState, useEffect } from 'react';

import Icon from '@material-ui/core/Icon';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
const [taskname,settaskname] = useState('Add a new task..')
const [viewinput,setvieInput]= useState(true)
const [viewflag,setviewflag] = useState(false)

const [tasks,settask] = useState([])

useEffect(() => {
  fetch('http://localhost:3002/gettask')
      .then(response => response.json())
      .then(data => {
        settask(data)
      })
}, []);

const refreshHandler =()=>{
  fetch('http://localhost:3002/gettask')
      .then(response => response.json())
      .then(data => {
        settask(data)
      })
}

const viewhandler =()=>{
  setviewflag(!viewflag)
  fetch('http://localhost:3002/gettask')
      .then(response => response.json())
      .then(data => {
        settask(data)
      })

}
const inptchangeHandler = (event)=>{
  settaskname(event.target.value)
}
const Addtaskhandler =()=>{
  setvieInput(!viewinput)
  
}
  const submitAddtaskhandler=()=>{
    setvieInput(!viewinput)
    if(taskname.length!==0 && taskname !== 'Add a new task..'){
      const newtask={
        
        name:taskname
      }
      console.log(newtask)
      console.log('Sending data')
      //new task post
      fetch('http://localhost:3002/Addtask', {
        method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name:taskname,
    status:'Incomplete',
    taskId:Math.random()})

       });

      settaskname('')
    }
  }
  const Ondeletehandler =(deletedArray) =>{
    //settask(deletedArray)
  }
const focushandler=()=>{
  settaskname('')
}

  return (
    <React.Fragment>
      <Header></Header>
    {viewinput && <button onClick ={Addtaskhandler}> Add New Task </button> }<br></br>
  {!viewinput &&<input 
  onFocus={focushandler}
  style={{height:'1cm',
margin:'10px',
width:'5cm'}}
  onChange={inptchangeHandler} value={taskname}></input>}{ ' '}
  {!viewinput &&  <button onClick ={submitAddtaskhandler}>submit</button>} 
   
 
      <br></br>  <br></br>
      {!viewflag && <button onClick={ viewhandler }> View Task </button>}
      {viewflag && <button onClick={ viewhandler }> Hide Task </button>}
      {viewflag && <button onClick={ refreshHandler }> Refresh </button>}
    


      <br></br>
      { viewflag && tasks.map(task=>(
        <Tasks 
        ondelete={Ondeletehandler}
        tasksArray={tasks}
        taskId={task.taskId}
        name ={task.name}></Tasks>
      ))}
    </React.Fragment>
  
  );
}

export default App;










