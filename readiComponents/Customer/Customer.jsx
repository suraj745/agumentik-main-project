import React from "react";
import styles from "../../styles/ReadiStyles/customer/customer.module.scss";
import { motion } from "framer-motion";
const img = [
  "/readi-images/company1.png",
  "/readi-images/company2.png",
  "/readi-images/company3.png",
  "/readi-images/company4.png",
  "/readi-images/company5.png",
  "/readi-images/company3.png",
  "/readi-images/company2.png",
  "/readi-images/company1.png",
];
const Customer = () => {
  return (
    <section className={styles.customer_container}>
      <section className="container">
        <section className="row content_pad flex-column">
          <section className="col">
            <ul className={styles.top}>
              <li className={styles.heading}>
                <h1>Our Customers</h1>
              </li>
              <li className={styles.paragraph}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  aspernatur illum
                </p>
              </li>
              <li className={styles.company_grid}>
                <section>
                  {img.map((value) => {
                    return (
                      <motion.img
                        key={img.length}
                        src={value}
                        alt="img"
                        whileHover={{ scale: 1.05 }}
                      />
                    );
                  })}
                </section>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Customer;
