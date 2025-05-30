"use client";

import React, { JSX } from "react";
import { useThemeContext } from "@/app/store/ThemeContext";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import BurgerMenu from "./BurgerMenu";
import styles from "./styles.module.scss";
import { LOGO } from "@/utils/images";

const SiteHeader = (): JSX.Element => {
  const { navDrawOpen, setNavDrawOpen } = useThemeContext();
  const pathname = usePathname();

  const handleClick = () => {
    setNavDrawOpen(!navDrawOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link
            href="/"
            className={styles.logoLink}
            aria-label="SolverEDGE Home"
          >
            <Image
              src={LOGO}
              alt="SolverEDGE Logo"
              width={172}
              height={94}
              className={styles.logoImage}
              priority
              sizes="(max-width: 768px) 125px, (max-width: 1024px) 145px, 172px"
            />
          </Link>
        </div>

        {/* Main navigation - visible on desktop */}
        <ul className={styles.navMenu} role="menubar">
          <li className={styles.navItem} role="none">
            <Link
              href="/"
              className={`${styles.navLink} ${
                pathname === "/" ? styles.active : ""
              }`}
              role="menuitem"
              aria-current={pathname === "/" ? "page" : undefined}
            >
              HOME
            </Link>
          </li>
          <li className={styles.navItem} role="none">
            <Link
              href="/about"
              className={`${styles.navLink} ${
                pathname === "/about" ? styles.active : ""
              }`}
              role="menuitem"
              aria-current={pathname === "/about" ? "page" : undefined}
            >
              ABOUT US
            </Link>
          </li>
          <li className={styles.navItem} role="none">
            <Link
              href="/product"
              className={`${styles.navLink} ${
                pathname === "/product" ? styles.active : ""
              }`}
              role="menuitem"
              aria-current={pathname === "/product" ? "page" : undefined}
            >
              PRODUCT
            </Link>
          </li>
          <li className={styles.navItem} role="none">
            <Link
              href="/curriculum"
              className={`${styles.navLink} ${
                pathname === "/curriculum" ? styles.active : ""
              }`}
              role="menuitem"
              aria-current={pathname === "/curriculum" ? "page" : undefined}
            >
              CURRICULUM
            </Link>
          </li>
          <li className={styles.navItem} role="none">
            <Link
              href="/contact"
              className={`${styles.navLink} ${
                pathname === "/contact" ? styles.active : ""
              }`}
              role="menuitem"
              aria-current={pathname === "/contact" ? "page" : undefined}
            >
              CONTACT
            </Link>
          </li>
          <li className={styles.navItem} role="none">
            <Link
              href="https://problemsolving.solveredge.com/"
              className={styles.profileLink}
            >
              <FontAwesomeIcon
                icon={faCircleUser}
                size="lg"
                className={styles.userIcon}
              />
            </Link>
          </li>
        </ul>

        {/* Burger menu - visible on mobile */}
        <div className={styles.burgerMenuContainer}>
          <BurgerMenu handleClick={handleClick} isOpen={navDrawOpen} />
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
