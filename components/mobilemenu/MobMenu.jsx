import React from "react";
import Link from "next/link";
import styles from "../../styles/_mobmenu/_mobmenu.module.scss";
const MobMenu = ({ about, service, info, support, close }) => {
  return (
    <ul className={styles.mobnav_container}>
      <Link href={"/"}>
        <li className={styles.home}>
          <a>Home</a>
        </li>
      </Link>

      <li className={styles.about_menu}>
        <a>About Us</a>
        <ul className={styles.sub_menu}>
          {about.map((value) => {
            return (
              <Link href={value.link} passHref>
                <li onClick={close}>
                  <a>{value.name}</a>
                </li>
              </Link>
            );
          })}
        </ul>
      </li>

      <li className={styles.service_menu}>
        <a>Service</a>
        <ul className={styles.sub_menu}>
          {service.map((value) => {
            return (
              <Link href={value.link} passHref>
                <li onClick={close} style={{ marginTop: "4rem" }}>
                  <a
                    style={{
                      borderBottom: "1px solid black",
                      fontSize: "1.6rem",
                    }}
                  >
                    {value.name}
                  </a>
                  <ul className={styles.mob_submenu}>
                    {value.submenu.map((sub) => {
                      return (
                        <Link href={sub.link}>
                          <li>
                            <a>{sub.name}</a>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </li>
              </Link>
            );
          })}
        </ul>
      </li>

      <Link href={"/"} onClick={close}>
        <li className={styles.portfolio}>
          <a>Portfolio</a>
        </li>
      </Link>

      <li className={styles.info_menu}>
        <a>Info</a>
        <ul className={styles.sub_menu}>
          {info.map((value) => {
            return (
              <Link href={value.link} passHref>
                <li onClick={close}>
                  <a>{value.name}</a>
                </li>
              </Link>
            );
          })}
        </ul>
      </li>

      <li className={styles.support_menu}>
        <a>Support</a>
        <ul className={styles.sub_menu}>
          {support.map((value) => {
            return (
              <Link href={value.link} passHref>
                <li onClick={close}>
                  <a>{value.name}</a>
                </li>
              </Link>
            );
          })}
        </ul>
      </li>
    </ul>
  );
};

export default MobMenu;
