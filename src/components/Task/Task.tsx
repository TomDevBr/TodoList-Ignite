
import style from "./Task.module.scss";
export interface ITasks {
  title: string;
  id: string;
  isChecked: boolean;
  onCheckTask: (id: string) => void;
  onDeleteTask : (id: string) => void;
}

export default function Task({ title, id, isChecked, onCheckTask, onDeleteTask }: ITasks) {

    function checkTask() {
      onCheckTask(id);
    }

    function deleteTask() {
      onDeleteTask(id);
    }
  return (
    <>
      <div className={style.taskContainer}>
        <div className={style.customCheckbox}>
            <input type="checkbox" onClick={checkTask} id={id} data-checked={isChecked}/>
          <label htmlFor={id}  className={style.checkboxLabel}>
            <p>{title}</p>
          </label>
        </div>
        <img onClick={deleteTask} src="src/assets/delete.svg" alt="delete" />
      </div>
    </>
  );
}
