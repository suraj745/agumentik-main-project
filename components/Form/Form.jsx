import React from "react";
import styles from "../../styles/_formstyles/_form.module.scss";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
const social_icon = [
  {
    icon: <FaFacebookF fontSize={"2rem"} />,
    link: "#",
  },
  {
    icon: <FaTwitter fontSize={"2rem"} />,
    link: "#",
  },
  {
    icon: <FaInstagram fontSize={"2rem"} />,
    link: "#",
  },
  {
    icon: <FaLinkedin fontSize={"2rem"} />,
    link: "#",
  },
  {
    icon: <FaPinterest fontSize={"2rem"} />,
    link: "#",
  },
];
const Form = () => {
  return (
    <section className="container">
      <section className="row content_pad">
        <section className="col-lg-6 d-flex align-items-center">
          <ul className={styles.left_content}>
            <li className={styles.heading}>
              <h1>Get In Touch</h1>
            </li>
            <li className={styles.paragraph}>
              <p>
                Let’s work together to create a changing experience that will
                turn your brand from bland to buzz worthy. We would love to hear
                from you whether you are curious about the features, a free
                quote or even need additional information, don’t hesitate to
                leave a message. We will get back to you as soon as possible,
                and we will be happy to answer your value question.
              </p>
            </li>
            <li className={styles.icons}>
              {social_icon.map((value) => {
                return <span>{value.icon}</span>;
              })}
            </li>
          </ul>
        </section>
        <section className="col-lg-6">
          <section className={styles.form}>
            <form>
              <ul>
                <li className={styles.top}>
                  <input type="text" name="" id="" placeholder="Name" />
                  <input type="email" name="" id="" placeholder="Email" />
                </li>
                <li>
                  <input type={"text"} placeholder="Phone Number" />
                </li>
                <li>
                  <input type="text" placeholder="Subject" />
                </li>
                <li className={styles.message}>
                  <textarea
                    name=""
                    id=""
                    placeholder="Write your message...."
                  ></textarea>
                </li>
                <li>
                  <button className={styles.default}>Send Message</button>
                </li>
              </ul>
            </form>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Form;
