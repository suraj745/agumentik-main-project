import React from "react";
import { BsHeartFill, BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
const Banner = () => {
  return (
    <section className="banner_container  container">
      <section className="banner_content row flex-column flex-md-row">
        <section className="banner_left col-md-6">
          {/* circle */}
          <span className="green_circle"></span>
          <ul>
            <motion.li
              className={"banner_heading"}
              initial={{ translateX: -100, opacity: 0 }}
              whileInView={{
                translateX: 0,
                opacity: 1,
                transition: { duration: 0.4 },
              }}
              viewport={{ once: true }}
            >
              <h1>Join the world's largest startup community</h1>
            </motion.li>
            <motion.li
              className="banner_paragraph"
              initial={{ translateY: 100, opacity: 0 }}
              whileInView={{
                translateY: 0,
                opacity: 1,
                transition: { duration: 0.6, delay: 0.1 },
              }}
              viewport={{ once: true }}
            >
              <p>
                Experience the startup ecosystem _ invest in startups <br />
                Research the fastest growing companies
              </p>
            </motion.li>
            <motion.li
              className="banner_button"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2 },
              }}
              viewport={{ once: true }}
            >
              <button>Get Started</button>
            </motion.li>
          </ul>
        </section>

        {/* stats */}
        <section className="banner_right col-md-6">
          <motion.section
            className="rank_card"
            initial={{ rotateY: 300, transformPerspective: 800 }}
            whileInView={{ rotateY: 0, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
          >
            <section className="rank">
              <section className="purple"></section>
            </section>
            <p>
              80% startups
              <br /> <span>Investors</span>
            </p>
          </motion.section>

          {/* chat */}

          <section className="yellow">
            <motion className="icon">
              <BsArrowRight className="right_arrow" />
            </motion>
            <h1>
              Let's chat <br /> with us!
            </h1>
          </section>

          <motion.section
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: "easeIn",
                type: "spring",
                delay: 0.2,
              },
            }}
            viewport={{ once: true }}
            className="banner_heart"
          >
            <motion className="heart_icon">
              <BsHeartFill />
            </motion>
            <section className="profile">
              <img
                src="/dribble-image/profile 1.jpg"
                alt=""
                width={"60"}
                height={"60"}
              />
            </section>
            <section className="notificaiton">
              <p>
                <strong>Domey</strong> has liked this community
              </p>
            </section>
          </motion.section>
          <img src="/dribble-image/banner2.jpg" className="img-fluid" alt="" />
        </section>
      </section>
    </section>
  );
};

export default Banner;
