const mozantatasks = require('./models/tasks')
const express = require('express')
const router = express.Router();
const axios = require('axios')


router.get('/gettask', async (req, res) => {
  try {
    let task = await mozantatasks.find({
   });
  // task=JSON.stringify('Hii')
    res.send(task)
  }
  catch (e) {
    console.log(e)
    res.status(500).send()
  }
})



router.get('/delete/:taskId', async (req, res) => {
  console.log(req.params)
  const taskId= req.params.taskId
  try {
   
   const tasks =await mozantatasks.deleteOne(
    {taskId:taskId}
 )

    res.send(tasks)
  }
  catch (e) {
    console.log(e)
    res.status(500).send()
  }
})




router.get('/update/:taskId', async (req, res) => {
  console.log(req.params)
  const taskId= req.params.taskId
  try {
   
   const tasks =await mozantatasks.updateOne(
    {taskId:taskId},
    {status:'complete'}    
 )

    res.send(tasks)
  }
  catch (e) {
    console.log(e)
    res.status(500).send()
  }
})





router.post('/Addtask',async (req,res)=>{
   // console.log(req)
    console.log('Inside')
    console.log(req.body)
    const task = new mozantatasks(req.body)
    try{
   await task.save()
   res.status(200).send({task})   
    }catch(e){
        console.log(e)
      res.status(400).send(e)
    }
  })


module.exports = router;