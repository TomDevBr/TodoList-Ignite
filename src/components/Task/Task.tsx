
import style from "./Task.module.scss";
export interface ITasks {
  title: string;
  id: string;
  isChecked: boolean;
  onCheckTask: (id: string) => void;
}

export default function Task({ title, id, isChecked, onCheckTask }: ITasks) {

    function checkTask() {
        onCheckTask(id);
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
        <img src="src/assets/delete.svg" alt="delete" />
      </div>
    </>
  );
}
