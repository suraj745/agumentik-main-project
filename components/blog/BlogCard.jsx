import React, { Component } from "react";
import styles from "../../styles/blog/_blog.module.scss";
import { FaUser, FaRegComments } from "react-icons/fa";
import Link from "next/link";
export default class BlogCard extends Component {
  render() {
    const { className, tag, heading, image, id, para } = this.props;
    return (
      <section
        className={className}
        data-aos="fade-up"
        data-aos-delay={`${id * 200}`}
        data-aos-once="false"
        style={{ maxWidth: "40rem" }}
      >
        <section className={styles.blog_card}>
          <section className={styles.banner}>
            <img src={image} alt="" />

            <div className={styles.tag}>
              <span>{tag}</span>
            </div>
          </section>

          <section className={styles.content}>
            <div className={styles.main_content}>
              <div className={styles.status}>
                <div className={styles.like}>
                  <p>
                    <FaUser />
                    <span> By admin</span>
                  </p>
                </div>
                <div className={styles.user}>
                  <p>
                    <FaRegComments />
                    <span> Comments</span>
                  </p>
                </div>
              </div>
              <h1>{heading}</h1>
              <p>{para}</p>

              <section className={`${styles.buttons} mt-5`}>
                <Link href={"/blog"}>
                  <button className={styles.default}>Read More</button>
                </Link>
              </section>
            </div>
          </section>
        </section>
      </section>
    );
  }
}
