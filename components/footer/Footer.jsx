import Link from "next/link";
import React, { Component } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLocation, ImFacebook } from "react-icons/im";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "../../styles/_footer/_footer.module.scss";
export default class Footer extends Component {
  render() {
    const list = {
      icons: [
        <FaLinkedinIn />,
        <ImFacebook />,
        <AiOutlineTwitter />,
        <AiOutlineInstagram />,
      ],
      important: [
        {
          name: "About Us",
          link: "/about-us",
        },
        {
          name: "Project",
          link: "#",
        },
        {
          name: "Services",
          link: "#",
        },
        {
          name: "Team",
          link: "#",
        },
        {
          name: "Contact",
          link: "#",
        },
      ],

      list: [
        "iOs Development",
        "Android Development",
        "Web Development",
        "Pay-Per-Click",
        "Social Media",
      ],

      service: ["3D Game Development", "2D Game Development"],

      contact: [
        {
          icon: <BsFillTelephoneFill />,
          li: "Phone (882) 569-7565",
        },
        {
          icon: <MdEmail />,
          li: "Email hello@neemo.com",
        },
        {
          icon: <ImLocation />,
          li: "Address INOVATION VALLEY Hill No :3 IT-SEZ , Rushikonda",
        },
      ],
    };

    return (
      <section className={styles.footer_container}>
        <section className="container">
          <section className="row">
            <section className={styles.footer_content}>
              <ul className={styles.list}>
                <li className={styles.heading}>
                  <h1>About Us</h1>
                </li>
                <li className={styles.paragraph}>
                  <p>
                    Let’s work together to create a changing experience that
                    will turn your brand from bland to buzz worthy. We would
                    love to hear from you whether you are curious about the
                    features,
                  </p>
                </li>
                <li className={styles.icons}>
                  {list.icons.map((value) => {
                    return <span key={list.icons.length}>{value}</span>;
                  })}
                </li>
              </ul>
              <ul className={styles.list}>
                <li className={styles.heading}>
                  <h1>Important Links</h1>
                </li>
                {list.important.map((value) => {
                  return (
                    <Link
                      key={list.important.length}
                      passHref
                      href={value.link}
                    >
                      <li>
                        <a>{value.name}</a>
                      </li>
                    </Link>
                  );
                })}
              </ul>

              <ul className={styles.list}>
                <li className={styles.heading}>
                  <h1>Featured Service</h1>
                </li>
                {list.list.map((value) => {
                  return (
                    <Link passHref href={"#"} key={list.list.length}>
                      <li>
                        <a>{value}</a>
                      </li>
                    </Link>
                  );
                })}
              </ul>

              <ul className={styles.list}>
                <li className={styles.heading}>
                  <h1>Featured Service</h1>
                </li>
                {list.service.map((value) => {
                  return (
                    <Link passHref href={"#"} key={list.service.length}>
                      <li>
                        <a>{value}</a>
                      </li>
                    </Link>
                  );
                })}
              </ul>

              <ul className={styles.list}>
                <li className={styles.heading}>
                  <h1>Contact</h1>
                </li>
                {list.contact.map((value) => {
                  return (
                    <Link passHref href={"#"} key={list.contact.length}>
                      <li>
                        {value.icon}
                        <a> {value.li}</a>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
