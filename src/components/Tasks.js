import  React from 'react'
import {useState} from 'react'
import { Button ,Radio ,RadioButton } from '@material-ui/core';

const Tasks = (props)=>{   
    
    const [ButtonChecked,setchecked] = useState(false)
    const deleteClickHandler=(taskId)=>{
       alert('Do u want to delete')
        fetch(`http://localhost:3002/delete/${taskId}`)
        .then(response => response.json())
        .then(data => {
          //settask(data)
        })

    }

    const RadioButtonclickHandler = (taskId)=>{
        setchecked(!ButtonChecked)

        console.log(taskId)

        fetch(`http://localhost:3002/update/${taskId}`)
        .then(response => response.json())
        .then(data => {
          //settask(data)
        })




        console.log('Button Clicked')
    }
    return(
        <div>
            <ul>
                    <div>
                    <Radio checked={ButtonChecked}  onClick={() => RadioButtonclickHandler(props.taskId)}/>
                        {props.name}
                        <button onClick = {() => deleteClickHandler(props.taskId)}
                        style={{    float:'right' ,
                    'margin-right':'900px'               }}
                        >delete</button> 
                        
                </div>
            </ul>
        </div>
    )
}

export default Tasks