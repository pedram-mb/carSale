import Link from "next/link";
import React from "react";
import Styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={Styles.header}>
        <Link href="/">
          <h2>CarSale</h2>
          <p>chose and bay your car</p>
        </Link>
      </header>
      <div className={Styles.container}>{children}</div>
      <footer className={Styles.footer}>
        next.js project | CarSale project &copy;
      </footer>
    </>
  );
}

export default Layout;
