import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import navLinks from "@data/navLinks";
import styles from "@components/Navbar/NavMenu.module.scss";

const NavMenu = () => {
  const menuRef = useRef(null);

  useEffect(() => {
    const listItems = menuRef.current.children;

    function slideInLinks() {
      Array.from(listItems).forEach((item, index) => {
        setTimeout(() => {
          let pos = 0;
          const id = setInterval(() => {
            if (pos >= 0) clearInterval(id);
            item.style.transform = `translateY(${pos}%)`;
            pos++;
          }, 40);
        }, index * 400);
      });
    }

    function slideFromRight() {
      const listItemsArray = Array.from(listItems);
      const windowWidth = window.innerWidth;
      const startPosition = windowWidth;

      listItemsArray.forEach((item, index) => {
        item.style.transform = `translateX(${startPosition}px)`;
        setTimeout(() => {
          let pos = startPosition;
          const id = setInterval(() => {
            if (pos <= 0) clearInterval(id);
            item.style.transform = `translateX(${pos}px)`;
            pos -= 10;
          }, 10);
        }, index * 200);
      });
    }

    if (window.innerWidth > 768) {
      slideInLinks();
    } else {
      slideFromRight();
    }
  }, []);

  return (
    <ul className={styles.menu} ref={menuRef}>
      {navLinks.map((navLink) => (
        <li className={styles.list} key={navLink.title}>
          <Link className={styles.link} to={navLink.to}>
            {navLink.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
