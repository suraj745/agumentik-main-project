import React, { Component } from "react";
import styles from "../../styles/blog/_blog.module.scss";
import BlogCard from "./BlogCard";
export default class Blog extends Component {
  blogDetail = [
    {
      imageUrl: "/start1.jpg",
      heading: "Startup Marketing Solution for Business Owner",
      tag: `popular`,
      class: styles.blogcard1,
      para: `      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti`,
    },

    {
      imageUrl: "/startup2.jpg",
      heading: "Startup Marketing Solution for Business Owner",
      tag: `trending`,
      class: styles.blogcard2,
      para: `      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti`,
    },

    {
      imageUrl: "/start3.jpg",
      heading: "Startup Marketing Solution for Business Owner",
      tag: `popular`,
      class: styles.blogcard3,
      para: `      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti`,
    },
  ];
  render() {
    const { title, heading, para } = this.props;
    return (
      <section className="container mt-5">
        <section className="boosting_content row flex-column">
          <section className="col">
            <ul className={styles.blog_content}>
              <li className={styles.title}>
                <h5>{title}</h5>
              </li>
              <li className={styles.heading}>
                <h1>{heading}</h1>
              </li>
              <li className={styles.design}>
                <span></span>
                <span></span>
              </li>
            </ul>
          </section>
          <section className="col mt-5 overflow-hidden ">
            <section className={styles.grid_card}>
              {this.blogDetail.map((value, index) => {
                return (
                  <BlogCard
                    id={index}
                    para={value.para}
                    key={index}
                    image={value.imageUrl}
                    className={value.class}
                    tag={value.tag}
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
