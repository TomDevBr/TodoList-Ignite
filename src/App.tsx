import Header from "./components/Header/Header";
import style from "./App.module.scss";

function App() {
  return (
    <>
      <div className={style.appContainer}>
        <Header />
        <div className={style.inputContainer}>
          <label htmlFor="input">
            <input type="text" name="input" placeholder="adicione uma nova tarefa" />
          </label>
          <button>Criar <img src="src/assets/plus.svg" alt="plus" /></button>
        </div>
      </div>
    </>
  );
}

export default App;
