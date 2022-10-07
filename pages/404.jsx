import React from "react";
import styles from "../styles/404/error.module.scss";
import Link from "next/link";
const _404 = () => {
  return (
    <section className="container">
      <section className=" content_pad row ">
        <ul className={styles.error_page}>
          <li className={styles.image}>
            <img
              src="/404 Error with a cute animal-rafiki.svg"
              alt=""
              width={"100%"}
            />
          </li>
          <li className={styles.heading}>
            <h1>Page Not Found</h1>
          </li>
          <li>
            <p>
              The page you are looking for might have been removed had its name
              changed <br />
              or is temporarily unavailable.
            </p>
          </li>
          <Link href={"/"} passHref>
            <li className={styles.default_button}>
              <button className={styles.default}> Go To Home</button>
            </li>
          </Link>
        </ul>
      </section>
    </section>
  );
};

export default _404;
