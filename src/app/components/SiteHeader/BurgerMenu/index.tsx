import { JSX } from "react";
import styles from "./styles.module.scss";

type props = {
  isOpen: boolean;
  handleClick: () => void;
};

const BurgerMenu = ({ isOpen, handleClick }: props): JSX.Element => {
  return (
    <div className={styles.burgerWrap}>
      <div className={styles.burgerContainer}>
        <button
          type="button"
          onClick={handleClick}
          className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>
  );
};

export default BurgerMenu;
