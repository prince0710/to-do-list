"use client"

import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) =>{
    e.preventDefault()
    setmainTask([...mainTask, {title,desc}])

    setdesc("")
    settitle("")
  };

  const deleteHandler = (i) =>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  let renderTask = <h2>NO TASK AVAILABLE</h2>
  if (mainTask.length>0)
  {
    renderTask = mainTask.map((t,i)=>{
      return  (
        <li key={i} className='flex items-center justify-between mb-5'>
         <div className='flex justify-between mb-5 w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
         </div>
         <button 
         onClick={()=>
        {
          deleteHandler(i)
        }}
         className='bg-red-400 text-white px-4 py-2 rounded font-bold'>DELETE</button>
        </li>
      );
    })
  }
  return (
    <>
    <h1 className='bg-indigo-500  text-white text-5xl font-bold text-center mt-2'> To do List </h1>
    <form onSubmit={submitHandler} className='bg-indigo-400'>
      <input type="text" className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2'
      placeholder='Enter Title Here'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />

      <input type="text" className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2'
      placeholder='Enter Description Here'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />

      <button className='bg-green-500 text-white px-4 py-3 text-2xl font-bold rounded m-5'>ADD TASK</button>
    </form>   
    <hr/>
    <div className='p-4 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page


