import Link from "next/link";
import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLocation, ImFacebook } from "react-icons/im";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "../../styles/_footer/_footer.module.scss";
import { BsHeartFill } from "react-icons/bs";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
const Footer = () => {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const list = {
    icons: [
      {
        icon: <AiOutlineInstagram />,
        link: `https://www.instagram.com/agumentiksoftware/?hl=en`,
      },
      {
        icon: <ImFacebook />,
        link: `https://www.facebook.com/AgumentikSoftware`,
      },
      {
        icon: <FaLinkedinIn />,
        link: `https://in.linkedin.com/company/agumentikgroup`,
      },
      {
        icon: <AiOutlineTwitter />,
        link: `https://twitter.com/agumentik`,
      },
    ],
    important: [
      {
        name: "About Us",
        link: "/about-company",
      },
      {
        name: "Project",
        link: "/project-status",
      },
      {
        name: "Services",
        link: "/services",
      },
      {
        name: "Team",
        link: "#",
      },
      {
        name: "Contact",
        link: "/contacts",
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
        heading: `Sales Contact`,
        email: `sales@gmail.com`,
        contact: 9847384732,
      },

      {
        heading: `Support Contact`,

        email: `support@gmail.com`,
        contact: 9847384732,
      },

      {
        heading: `General Enquires `,

        email: `generalinquries@gmail.com`,
        contact: 9847384732,
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
                  Let’s work together to create a changing experience that will
                  turn your brand from bland to buzz worthy. We would love to
                  hear from you whether you are curious about the features,
                </p>
              </li>
              <li className={styles.icons}>
                {list.icons.map((value, index) => {
                  return (
                    <Link key={index} href={value.link} passHref>
                      <span>{value.icon}</span>
                    </Link>
                  );
                })}
              </li>
            </ul>
            <ul className={styles.list}>
              <li className={styles.heading}>
                <h1>Important Links</h1>
              </li>
              {list.important.map((value, index) => {
                return (
                  <Link key={index} passHref href={value.link}>
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
              {list.list.map((value, index) => {
                return (
                  <Link passHref href={"#"} key={index}>
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
              {list.service.map((value, index) => {
                return (
                  <Link passHref href={"#"} key={index}>
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
              <li>
                {list.contact.map((value, index) => {
                  return (
                    <section key={index} className={styles.details}>
                      <summary>{value.heading}</summary>
                      <p>
                        <MdEmail />
                        {value.email}
                      </p>
                      <p>
                        <BsFillTelephoneFill />
                        {value.contact}
                      </p>
                    </section>
                  );
                })}
              </li>
            </ul>
          </section>

          <ul className="text-center text-white">
            <li>
              <h2 style={{ wordSpacing: "0.2rem" }}>
                Made with <BsHeartFill className={styles.heart} /> Agumentik
                Software Private Limited
              </h2>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Footer;
