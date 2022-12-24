import style from './Header.module.scss'

export default function Header() {
    return (
        <div className={style.headerContainer}>
                <img src="src/assets/Logo.svg" alt="logo" />
        </div>
    )
}