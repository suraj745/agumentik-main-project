import React from "react";
import styles from "../styles/404/error.module.scss";
const _404 = () => {
  return (
    <section className="container">
      <section className=" content_pad row ">
        <ul className={styles.error_page}>
          <li className={styles.image}>
            <img
              src="https://agumentik-software.vercel.app/images/404.png"
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
          <li className={styles.default_button}>
            <button className={styles.default}> Go To Home</button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default _404;
