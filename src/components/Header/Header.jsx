import styles from "./Header.module.css"
import logo from "../../assets/img/logo.svg"

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header__logoContainer}>
        <img src={logo} alt="Company logo" className={styles.header__logoContainer_img} />
        <div>
          <div className={styles.header__logoContainer_title}>Mangohome</div>
          <div className={styles.header__logoContainer_subtitle}>Where rice meets mangoes</div>
        </div>
        
      </div>
      <nav>
        <ul className={styles.header__menu}>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Macu</li>
          <li>Macu</li>
          <button className={styles.secondary_btn}>Sign in</button>
          <button className={styles.primary_btn}>Sign up</button>
        </ul>
      </nav>
    </div>
  )
}

export default Header
