import Link from "next/link";
import { useThemeContext } from "@/app/store/ThemeContext";

import styles from "./styles.module.scss";

type props = {
  isActive?: boolean;
  navDrawOpen?: boolean;
};

const Navigation = ({ isActive, navDrawOpen }: props) => {
  const { setNavDrawOpen } = useThemeContext();

  const navItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Product", link: "/product" },
    { label: "Curriculum", link: "/curriculum" },
    { label: "Contact", link: "/contact" },
  ];

  const handleClick = () => {
    setNavDrawOpen(false);
  };

  const renderNavigation = () => {
    return navItems.map((nav, i) => (
      <li key={i}>
        <Link href={nav.link} onClick={handleClick} className={styles.link}>
          {nav.label}
        </Link>
      </li>
    ));
  };
  return (
    <div
      className={`${styles.navigation} ${isActive ? styles.active : null} ${
        navDrawOpen ? styles.open : null
      }`}
    >
      <ul className={styles.navList}>{renderNavigation()}</ul>
    </div>
  );
};

export default Navigation;
