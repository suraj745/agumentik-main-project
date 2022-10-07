import React from "react";
import styles from "../../styles/Portfolio-Page/contact.module.scss";
import ContactCard from "./ContactCard";
import { BiSupport } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { SiSalesforce } from "react-icons/si";
import { FaClipboardList } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";

const Contact = () => {
  const contactDetail = [
    {
      icon: <SiSalesforce fontSize={"2rem"} />,
      heading: "Sales",
      contact: "9828192838",
      email: "sales@gmail.com",
    },
    {
      icon: <BiSupport fontSize={"2rem"} />,
      heading: "Support",
      contact: "9283819283",
      email: "support@gmail.com",
    },

    {
      icon: <FaClipboardList fontSize={"2rem"} />,
      heading: "General Enquires",
      contact: "9381492848",
      email: "general_enquires@gmail.com",
    },
    {
      icon: <ImLocation fontSize={"2rem"} />,
      heading: "Location",
      address: "INNOVATION VALLEY Hill No. 3  IT-Sez , Rushikonda",
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
                content1={value.contact}
                content2={value.email ? value.email : value.address}
                location={
                  value.address && (
                    <MdLocationCity style={{ fontSize: "4rem" }} />
                  )
                }
              />
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Contact;
