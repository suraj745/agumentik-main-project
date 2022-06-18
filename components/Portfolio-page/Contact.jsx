import React from "react";
import styles from "../../styles/Portfolio-Page/contact.module.scss";
import ContactCard from "./ContactCard";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
const Contact = () => {
  const contactDetail = [
    {
      icon: <AiFillPhone fontSize={"2rem"} />,
      heading: "Phone/Fax",
      content1: "(882) 569-7565",
      content2: "(882) 453-4565",
    },
    {
      icon: <AiOutlineMail fontSize={"2rem"} />,
      heading: "E-mail",
      content1: "Agumentik@gmail.com",
      content2: "supportAugumentik.com",
    },
    {
      icon: <ImLocation fontSize={"2rem"} />,
      heading: "Location",
      content1: "INNOVATION VALLEY Hill No. 3",
      content2: "IT-Sez , Rushikonda",
    },
  ];
  return (
    <section className="container">
      <section className="row">
        <section className={styles.contact_grid}>
          {contactDetail.map((value) => {
            return (
              <ContactCard
                icon={value.icon}
                heading={value.heading}
                content1={value.content1}
                content2={value.content2}
              />
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Contact;
