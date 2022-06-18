import React, { Component } from "react";
import styles from "../../styles/blog/_blog.module.scss";
import BlogCard from "./BlogCard";
export default class Blog extends Component {
  blogDetail = [
    {
      imageUrl: "/images/project/1.jpg",
      heading: "Startup Marketing Solution for Business Owner",
      date: "02",
      class: styles.blogcard1,
    },

    {
      imageUrl: "/images/project/2.jpg",
      heading: "Startup Marketing Solution for Business Owner",
      date: "03",
      class: styles.blogcard2,
    },

    {
      imageUrl: "/images/project/3.jpg",
      heading: "Startup Marketing Solution for Business Owner",
      date: "03",
      class: styles.blogcard3,
    },
  ];
  render() {
    return (
      <section className="container">
        <section className="boosting_content row flex-column">
          <section className="col">
            <ul className={styles.blog_content}>
              <li className={styles.title}>
                <h5>Blog</h5>
              </li>
              <li className={styles.heading}>
                <h1>Read Our Latest Project</h1>
              </li>
              <li className={styles.design}>
                <span></span>
                <span></span>
              </li>
            </ul>
          </section>
          <section className="col mt-5">
            <section className={styles.grid_card}>
              {this.blogDetail.map((value) => {
                return (
                  <BlogCard
                    image={value.imageUrl}
                    className={value.class}
                    date={value.date}
                    heading={value.heading}
                  />
                );
              })}
            </section>
          </section>
        </section>
      </section>
    );
  }
}
