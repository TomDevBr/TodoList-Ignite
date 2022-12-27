import style from './Task.module.scss'

export default function Task(){
    return (
        <div className={style.taskContainer}>
            <label htmlFor="checkbox" >
            <input type="checkbox"  className={style.checkbox} name="checkbox" id="checkbox" checked/>
            </label>
            <p className={style.nameTask}> Lorem ipsum dolor sit amet consectetur adipisicing eli</p>
            <img src="src/assets/delete.svg" alt="delete" />
        </div>
    )
}