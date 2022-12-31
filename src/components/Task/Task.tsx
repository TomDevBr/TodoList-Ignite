import style from './Task.module.scss'

export default function Task(){
    return (
        <>
        <div className={style.taskContainer}>
            <div className={style.customCheckbox}>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className={style.checkboxLabel}>
                <p> Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                </label>
            </div>
            <img src="src/assets/delete.svg" alt="delete" />
        </div>
        </>
    )
}