import Header from "./components/Header/Header";
import { v4 } from "uuid";
import style from "./App.module.scss";
import Task from "./components/Task/Task";
import React, { useState } from "react";

interface ITasks {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [task, setTask] = useState<ITasks[]>([{
    id: v4(),
    title: "crie sua primeira task",
    isCompleted: false,}
  ]);
  const [newTitle, setNewTitle] = useState<string>("");
  const [onCheck, setOnCheck] = useState(false);
  const [ tasksCompleteds, setTasksCompleteds] = useState<number>()

  function createNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!newTitle) return alert("É necessario adicionar um titulo da tarefa");

    setTask((oldState) => [
      ...oldState,
      {
        id: v4(),
        title: newTitle,
        isCompleted: onCheck,
      },
    ]);
    setNewTitle("");
  }

  function handleNewTaskText(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTitle(event.target.value);
  }

  const numberOfTasksCompleteds = task.reduce((acc ,taskActual) => {
    taskActual.isCompleted? acc += 1 : acc += 0;
    
    return acc;
  }, 0)




  function taskChecked(id: string) {
    setTasksCompleteds(numberOfTasksCompleteds)

    setTask((oldState) => {
      const newValue = oldState.map((task)=> {
        if(task.id === id) {
          return { ...task, isCompleted: !task.isCompleted}
        }
        return task;
      });
      return newValue
    })
  }

  console.log(tasksCompleteds)

  

  console.log(numberOfTasksCompleteds)
  console.log(onCheck)


  return (
    <>
      <div className={style.appContainer}>
        <Header />
        <div className={style.appGrid}>
          <form onSubmit={createNewTask} className={style.inputContainer}>
            <label htmlFor="input">
              <input
                type="text"
                onChange={handleNewTaskText}
                name="input"
                value={newTitle}
                placeholder="adicione uma nova tarefa"
              />
            </label>
            <button type="submit">
              Criar <img src="src/assets/plus.svg" alt="plus" />
            </button>
          </form>
          <section className={style.listContainer}>
            <div className={style.listHeader}>  
              <p className={style.tasksCreateds}>
                Taterafas criadas <div className={style.count}>0</div>
              </p>
            <p className={style.tasksCompleteds}>Concluidas<div className={style.count}>{numberOfTasksCompleteds}</div>
              </p>
            </div>
            <div className={style.listTasks}>
              {task.length <= 0   ? (
                <>
                  <img src="src/assets/Clipboard.svg" alt="clipboard" />
                  <h2 className={style.firstLineText}>
                    Você ainda não tem tarefas cadastradas
                  </h2>
                  <h2>Crie tarefas e organize seus itens a fazer</h2>
                </>
              ) : (
                task.map((task) => {
                  return (
                    <Task
                      key={task.id}
                      title={task.title}
                      id={task.id}
                      isChecked={task.isCompleted}
                      onCheckTask={taskChecked}
                    />
                  );
                })
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
