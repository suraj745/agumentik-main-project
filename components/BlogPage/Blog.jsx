import React from "react";
import {
  Container,
  Row,
  Col,
  Toast,
  ToastBody,
  ToastHeader,
} from "react-bootstrap";
import BlogCard from "../blog/BlogCard";
import styles from "./blogPage.module.scss";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import Pagination from "react-js-pagination";

const blogDetail = [
  {
    imageUrl: "/start1.jpg",
    heading: "Atartup Marketing Solution for Business Owner",
    tag: `popular`,
    class: styles.blogcard1,
    para: `      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti`,
  },

  {
    imageUrl: "/startup2.jpg",
    heading: "Btartup Marketing Solution for Business Owner",
    tag: `trending`,
    class: styles.blogcard2,
    para: `      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti`,
  },

  {
    imageUrl: "/start3.jpg",
    heading: "Ctartup Marketing Solution for Business Owner",
    tag: `popular`,
    class: styles.blogcard3,
    para: `      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti`,
  },

  {
    imageUrl: "/start3.jpg",
    heading: "Dtartup Marketing Solution for Business Owner",
    tag: `popular`,
    class: styles.blogcard3,
    para: `      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti`,
  },

  {
    imageUrl: "/startup2.jpg",
    heading: "Etartup Marketing Solution for Business Owner",
    tag: `trending`,
    class: styles.blogcard2,
    para: `      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti`,
  },

  {
    imageUrl: "/start1.jpg",
    heading: "Ftartup Marketing Solution for Business Owner",
    tag: `popular`,
    class: styles.blogcard1,
    para: `      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti`,
  },

  {
    imageUrl: "/start1.jpg",
    heading: "Atartup Marketing Solution for Business Owner",
    tag: `popular`,
    class: styles.blogcard1,
    para: `      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti`,
  },

  {
    imageUrl: "/startup2.jpg",
    heading: "Btartup Marketing Solution for Business Owner",
    tag: `trending`,
    class: styles.blogcard2,
    para: `      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti`,
  },

  {
    imageUrl: "/start3.jpg",
    heading: "Ctartup Marketing Solution for Business Owner",
    tag: `popular`,
    class: styles.blogcard3,
    para: `      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti`,
  },

  {
    imageUrl: "/start3.jpg",
    heading: "Dtartup Marketing Solution for Business Owner",
    tag: `popular`,
    class: styles.blogcard3,
    para: `      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti`,
  },

  {
    imageUrl: "/startup2.jpg",
    heading: "Etartup Marketing Solution for Business Owner",
    tag: `trending`,
    class: styles.blogcard2,
    para: `      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti`,
  },

  {
    imageUrl: "/start1.jpg",
    heading: "Ftartup Marketing Solution for Business Owner",
    tag: `popular`,
    class: styles.blogcard1,
    para: `      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti`,
  },

  {
    imageUrl: "/start3.jpg",
    heading: "Dtartup Marketing Solution for Business Owner",
    tag: `popular`,
    class: styles.blogcard3,
    para: `      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti`,
  },

  {
    imageUrl: "/startup2.jpg",
    heading: "Etartup Marketing Solution for Business Owner",
    tag: `trending`,
    class: styles.blogcard2,
    para: `      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti`,
  },

  {
    imageUrl: "/start1.jpg",
    heading: "Ftartup Marketing Solution for Business Owner",
    tag: `popular`,
    class: styles.blogcard1,
    para: `      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti`,
  },
];
const BlogNew = () => {
  const [value, setValue] = useState("");

  // console.log("value", value);

  const [active, SetActive] = useState(1);

  const handleChange = (pageNumber) => {
    console.log(pageNumber);
    SetActive(pageNumber);
  };

  return (
    <Container>
      <Row className={`flex-column`}>
        <ul className="d-flex justify-content-end">
          <li className={styles.blogSearch}>
            <input
              type="text"
              value={value}
              placeholder={"Search"}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <button>
              <ImSearch className={styles.search} />
            </button>
          </li>
        </ul>
        <Col className={styles.card_grid}>
          {blogDetail.filter((search) => {
            return search.heading.toLowerCase().includes(value.toLowerCase());
          }).length == 0 ? (
            <h1>No Result Found</h1>
          ) : (
            blogDetail
              .filter((search) => {
                return search.heading
                  .toLowerCase()
                  .includes(value.toLowerCase());
              })
              .map((value, index) => {
                return (
                  <>
                    <BlogCard
                      tag={value.tag}
                      heading={value.heading}
                      key={index}
                      image={value.imageUrl}
                      para={value.para}
                    />
                  </>
                );
              })
              .slice(active * 6 - 6, active * 6)
          )}
        </Col>
        <Col className={styles.pagination}>
          <Pagination
            activePage={active}
            itemsCountPerPage={1}
            totalItemsCount={blogDetail.length / 6}
            pageRangeDisplayed={3}
            activeClass={styles.pagination_active}
            linkClass={styles.link_class}
            activeLinkClass={styles.pagination_active_link}
            onChange={handleChange}
            itemClass={styles.itemClass}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BlogNew;
