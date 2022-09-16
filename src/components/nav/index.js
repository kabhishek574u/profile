import React from "react";
import styles from "./style.module.scss";
import { navLinks } from "../../constants";
import Link from "next/link";

function Nav() {
  return (
    <div className={styles.nav}>
      {/* <p>////////////////////////////////////</p> */}
      <ul>
        {navLinks.map(({ title, url }) => (
          <li>
            <Link href={url}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
      {/* <p>////////////////////////////////////</p> */}
    </div>
  );
}

export default Nav;
