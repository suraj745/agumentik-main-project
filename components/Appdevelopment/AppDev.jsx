import React from "react";
import styles from "../../styles/appdev/appdev.module.scss";
import { TiTick } from "react-icons/ti";
const AppDev = () => {
  return (
    <section className="container">
      {/* top */}
      <section className="row content_pad flex-column">
        <section className="col">
          <section className="row align-items-center">
            <section className="col-lg-6">
              <ul className={styles.content}>
                <li className={styles.top}>
                  <h1>Digital Marketing</h1>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </li>
                <li className={styles.upper}>
                  <h1>
                    <span>
                      <TiTick color="orangered" />
                    </span>
                    Core Development
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                </li>
                <li className={styles.upper}>
                  <h1>
                    <span>
                      <TiTick color="orangered" />
                    </span>
                    Define Your Choices
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                </li>
              </ul>
            </section>
            <section className="col-lg-6">
              <img src="/images/laptop.jpg" alt="" width={"100%"} />
            </section>
          </section>
        </section>

        {/* bottom */}
        <section className=" py-5">
          <section
            className="row
          flex-row-reverse align-items-center
"
          >
            <section className="col-lg-6">
              <ul className={styles.content}>
                <li className={styles.top}>
                  <h1>Digital Marketing</h1>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </li>
                <li className={styles.upper}>
                  <h1>
                    <span>
                      <TiTick color="orangered" />
                    </span>
                    Core Development
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                </li>
                <li className={styles.upper}>
                  <h1>
                    <span>
                      <TiTick color="orangered" />
                    </span>
                    Define Your Choices
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's.
                  </p>
                </li>
              </ul>
            </section>
            <section className="col-lg-6">
              <img src="/images/working.jpg" alt="" width={"100%"} />
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default AppDev;
