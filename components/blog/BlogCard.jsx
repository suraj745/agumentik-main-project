import React, { Component } from "react";
import styles from "../../styles/blog/_blog.module.scss";
import { FaUser, FaRegComments } from "react-icons/fa";
export default class BlogCard extends Component {
  render() {
    const { className, date, heading, image } = this.props;
    return (
      <section className={className}>
        <section className={styles.blog_card}>
          <section className={styles.banner}>
            <img src={image} alt="" />

            <div className={styles.tag}>
              <span>{date}</span>
              <span>January</span>
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
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti
              </p>

              <section className={styles.buttons}>
                <button className={styles.default}>Read More</button>
              </section>
            </div>
          </section>
        </section>
      </section>
    );
  }
}
