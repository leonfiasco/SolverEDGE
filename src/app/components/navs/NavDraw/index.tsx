import { useThemeContext } from "@/app/store/ThemeContext";
import styles from "./styles.module.scss";
import Navigation from "../Navigation/Navigation";

const NavDraw = () => {
  const { navDrawOpen } = useThemeContext();

  return (
    <div
      className={`${styles.navDraw} ${navDrawOpen ? styles.open : ""}`}
      style={{ border: "2px solid red" }} // Temporary test border
    >
      <div className={styles.navWrap}>
        <Navigation />
      </div>
    </div>
  );
};

export default NavDraw;
