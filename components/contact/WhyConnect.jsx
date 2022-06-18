import React from "react";
import styles from "../../styles/_contact/contact.module.scss";
const WhyConnect = () => {
  return (
    <section className="container">
      <section className="row content_pad">
        <section className="col-lg-6 d-flex align-items-center">
          <ul className={styles.contact_content}>
            <li className={styles.heading}>
              <h1>Why To Connect ?</h1>
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
            <li className={styles.button}>
              <button className={styles.default}>Call Us Now</button>
            </li>
          </ul>
        </section>
        <section className="col-lg-6 d-flex align-items-center">
          <img src="/images/contact-image.svg" alt="" width={"100%"} />
        </section>
      </section>
    </section>
  );
};

export default WhyConnect;
