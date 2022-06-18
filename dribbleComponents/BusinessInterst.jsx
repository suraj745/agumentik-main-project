import React from "react";
import { AiFillApple, AiTwotoneLike } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
const BusinessInterst = () => {
  return (
    <>
      <section className="business_container container">
        <section className="business_content row">
          <section className="business_left col-md-6">
            <ul>
              <li className="heading">
                <h1>Find your perfect business based on your interest</h1>
              </li>
              <li>
                <ul className="scroll">
                  <li>
                    Find full-time jobs and internship that are perfect for
                    you.Explore job roles based.
                  </li>
                  <li>
                    Stock trading online may seem like a great way to make
                    money, but if you want to
                  </li>

                  <li>
                    Technology has made our lives easier in so many ways which
                    includes a more convinent
                  </li>

                  <li>
                    Find full-time jobs and internship that are perfect for
                    you.Explore job roles based.
                  </li>
                  <li>
                    Stock trading online may seem like a great way to make
                    money, but if you want to
                  </li>

                  <li>
                    Technology has made our lives easier in so many ways which
                    includes a more convinent
                  </li>

                  <li>
                    Find full-time jobs and internship that are perfect for
                    you.Explore job roles based.
                  </li>
                  <li>
                    Stock trading online may seem like a great way to make
                    money, but if you want to
                  </li>
                  <li>
                    Technology has made our lives easier in so many ways which
                    includes a more convinent
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <section className="business_right col-md-6 d-flex justify-content-center align-items-center">
            <section className="business_image_container">
              <section className="apple_shape">
                <AiFillApple className="apple_font" />
              </section>

              <section className="google_shape">
                <section className="google_icon">
                  <FcGoogle className="google_font" />
                </section>
                <h1>Front-end</h1>
                <p>Google</p>
              </section>
              <img
                src="/dribble-image/Layer 1.png"
                className="img-fluid"
                alt="image"
                width={"400px"}
              />
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
              className="liked"
            >
              <section className="like_icon">
                <AiTwotoneLike />
              </section>
              <section className="profile">
                <img
                  src="/dribble-image/profile2.jpg"
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
          </section>
        </section>
      </section>
    </>
  );
};

export default BusinessInterst;
