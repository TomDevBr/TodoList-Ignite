import Header from "./components/Header/Header";
import style from "./App.module.scss";
import Task from "./components/Task/Task";

function App() {
  return (
    <>
      <div className={style.appContainer}>
        <Header />
        <div className={style.appGrid}>
        <div className={style.inputContainer}>
          <label htmlFor="input">
            <input type="text" name="input" placeholder="adicione uma nova tarefa" />
          </label>
          <button>Criar <img src="src/assets/plus.svg" alt="plus" /></button>
        </div>
        <section className={style.listContainer}>
          <div className={style.listHeader}>
            <p className={style.tasksCreateds}>Taterafas criadas <div className={style.count}>0</div></p> 
            <p className={style.tasksCompleteds}>Concluidas <div className={style.count}>0</div></p>    
          </div>
          <div className={style.listTasks}>
              {/* <img src="src/assets/Clipboard.svg" alt="clipboard" />
              <h2 className={style.firstLineText}>Você ainda não tem tarefas cadastradas</h2>
              <h2>Crie tarefas e organize seus itens a fazer</h2> */}
              { <Task/>}


          </div>
        </section>
        </div>
      </div>
    </>
  );
}

export default App;
