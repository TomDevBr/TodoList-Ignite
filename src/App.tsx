import Header from "./components/Header/Header";
import { v4 } from "uuid";
import style from "./App.module.scss";
import Task from "./components/Task/Task";
import React, { ChangeEventHandler, FormEvent, FormEventHandler, SetStateAction, useState } from "react";


const tasks = [
  {
    id: v4(),
    title: ["primeira task"],
    isCompleted: true,
  },
  {
    id: v4(),
    title: ["segunda task"],
    isCompleted: false,
  },
  {
    id: v4(),
    title: ["terceira task"],
    isCompleted: true,
  },
]


function App() {
  const [ tasksCompleteds, setTasksCompleteds] = useState(0)
  const [ onCheck, setOnCheck] = useState(false)
  const [ titleTask, setTitleTask] = useState(['escreva sua primeira task'])
  const [ taskCreated, setTaskCreated ] = useState("")

  function createNewTask ( event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTitleTask([...titleTask, taskCreated])

    const newTask = {
      id: v4(),
      title: titleTask,
      isCompleted: onCheck,
    }
  
    tasks.push(newTask)

  }




  function handleNewTaskText ( event: React.ChangeEvent<HTMLInputElement>) {
    setTaskCreated(event.target.value)

   
  }

 

  function taskChecked() {
    setOnCheck(true)
  }
  console.log(tasks)


  return (
    <>
      <div className={style.appContainer}>
        <Header />
        <div className={style.appGrid}>
          <form onSubmit={createNewTask} className={style.inputContainer}>
          <label htmlFor="input">
            <input type="text" onChange={handleNewTaskText} name="input"  placeholder="adicione uma nova tarefa" />
          </label>
          <button type="submit">Criar <img src="src/assets/plus.svg" alt="plus" /></button>
          </form>
        <section className={style.listContainer}>
          <div className={style.listHeader}>
            <p className={style.tasksCreateds}>Taterafas criadas <div className={style.count}>0</div></p> 
            <p className={style.tasksCompleteds}>Concluidas <div className={style.count}>{tasksCompleteds}</div></p>    
          </div>
          <div className={style.listTasks}>
              {/* <img src="src/assets/Clipboard.svg" alt="clipboard" />
              <h2 className={style.firstLineText}>Você ainda não tem tarefas cadastradas</h2>
              <h2>Crie tarefas e organize seus itens a fazer</h2> */}

              {
                tasks.map( task => { 
                  return(
                    <Task  title={task.title} id={task.id} isChecked={task.isCompleted} onCheckTask={taskChecked}   />
                  )
                })
              }
            
          </div>
        </section>
        </div>
      </div>
    </>
  );
}

export default App;
