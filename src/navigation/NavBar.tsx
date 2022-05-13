import cats2 from "../assets/2cats_logo_small.svg";
import menu from "../assets/menu_icon.svg";
import styles from "./NavBar.module.sass";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.conteiner}>
        <img src={cats2} alt="2cats" className={styles.logo} />
        <div className={styles.items}>LOGIN</div>
        <img
          src={menu}
          alt="menu"
          className={`${styles.logo} ${styles.menuIcon}`}
        />
      </div>
    </div>
  );
};

export default NavBar;
