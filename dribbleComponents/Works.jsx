import React from "react";
import { motion } from "framer-motion";
const Works = () => {
  return (
    <section className="work_container container">
      <section className="work_content row gx-5 flex-column flex-md-row align-items-center">
        <section className="work_left col-md-6 p-0">
          <motion.section
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.2 },
            }}
            className="card card-1 py-5"
            viewport={{ once: true }}
          >
            <h1>125+</h1>
            <p className="name">Performer</p>
          </motion.section>
          <motion.section
            className="card card-2"
            initial={{ translateY: -100, opacity: 0 }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.4 },
            }}
            viewport={{ once: true }}
          >
            <h1>10K+</h1>
            <p className="name">Member</p>
          </motion.section>
          <motion.section
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.6 },
            }}
            className="card card-3"
            viewport={{ once: true }}
          >
            <h1>450</h1>
            <p className="name">Composition</p>
          </motion.section>
        </section>

        {/* ///////////////////////////////////////////////// */}
        <section className="work_right col-md-6 ">
          <ul>
            <li className="heading">
              <h1>How it works ?</h1>
            </li>
            <li className="paragraph">
              <p>
                Only companies you apply to will see your'e looking for a job
                .Your current boss won't know.Compare jobs using our salary tool
              </p>

              <p>
                No middlemen . Speak directly to founders and hiring managers .
                No third party recuriters allowed.
              </p>
            </li>
            <li>
              <button className="button">Read More</button>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Works;
