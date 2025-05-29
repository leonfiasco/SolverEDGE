"use client";

import Link from "next/link";
import { useThemeContext } from "@/app/store/ThemeContext";

import styles from "./styles.module.scss";

type Props = {
  isActive?: boolean;
  navDrawOpen?: boolean;
};

type NavItem = {
  label: string;
  link: string;
  isExternal?: boolean;
};

const Navigation = ({ isActive, navDrawOpen }: Props) => {
  const { setNavDrawOpen } = useThemeContext();

  const handleClick = () => {
    setNavDrawOpen(false);
  };

  const navItems: NavItem[] = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Product", link: "/product" },
    { label: "Curriculum", link: "/curriculum" },
    { label: "Contact", link: "/contact" },
    {
      label: "Login",
      link: "https://problemsolving.solveredge.com/",
      isExternal: true,
    },
  ];

  const renderNavigation = () => {
    return navItems.map((nav, i) => (
      <li key={i}>
        {nav.isExternal ? (
          <a
            href={nav.link}
            onClick={handleClick}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {nav.label}
          </a>
        ) : (
          <Link href={nav.link} onClick={handleClick} className={styles.link}>
            {nav.label}
          </Link>
        )}
      </li>
    ));
  };

  return (
    <div
      className={`${styles.navigation} ${isActive ? styles.active : ""} ${
        navDrawOpen ? styles.open : ""
      }`}
    >
      <ul className={styles.navList}>{renderNavigation()}</ul>
    </div>
  );
};

export default Navigation;
