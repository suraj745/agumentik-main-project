import React from "react";
import styles from "../../styles/Agumen2/_navbar/_navbar.module.scss";
import Dropdown from "../Dropdown/Dropdown";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import Hamburger from "hamburger-react";
import Drawer from "../Drawer/Drawer";
import MobMenu from "../../components/mobilemenu/MobMenu";
import { AnimatePresence, motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const About = [
    {
      link: "/about-us",
      name: "About Company",
    },
    {
      link: "/gallery",
      name: "Gallery",
    },
    {
      link: "/our-products",
      name: "Products",
    },
    {
      link: "/carrer",
      name: "Carrers",
    },
  ];
  const Service = [
    {
      link: "/service",
      name: " Web Development",
      submenu: [
        {
          link: "#",
          name: "Static Website",
        },
        {
          link: "#",
          name: "Dynamic Website",
        },
        {
          link: "#",
          name: "Landing Website",
        },
      ],
    },

    {
      link: "/single-service",
      name: "Ecommerce Development",
      submenu: [
        {
          link: "#",
          name: "Single Vendor",
        },
        {
          link: "#",
          name: "Multi Vendor",
        },
      ],
    },
    // {
    //   link: "/single-service",
    //   name: " Single Vendor",
    //   submenu: [],
    // },

    // {
    //   link: "/Load",
    //   name: "Multivendor",
    //   submenu: [],
    // },
    {
      link: "/single-service",
      name: "  Mobile App Development",
      submenu: [
        {
          link: "#",
          name: "Android App Devlopment",
        },
        {
          link: "#",
          name: "IOS App Development",
        },
        {
          link: "#",
          name: "Cross Platform Development",
        },
      ],
    },
    {
      link: "/single-service",
      name: "Software Development",
      submenu: [
        {
          link: "#",
          name: "Customised Software",
        },
        {
          link: "#",
          name: "ERP Software",
        },
        {
          link: "#",
          name: "Sass Software",
        },
      ],
    },
    {
      link: "/single-service",
      name: "UI/UX Designing",
      submenu: [
        {
          link: "#",
          name: "Graphic Designing",
        },
        {
          link: "#",
          name: "UI/UX Designing",
        },
      ],
    },
    {
      link: "#",
      name: "Emerging Technologies",
      submenu: [
        {
          link: "/ai",
          name: "Artificial Intelligence",
        },
        {
          link: "/ai",
          name: "Machine Learning",
        },
        {
          link: "/ar",
          name: "AR & VR",
        },
      ],
    },
  ];

  const Info = [
    {
      link: "/blog",
      name: "Blogs",
    },
    {
      link: "/404",
      name: "Media & Events",
    },

    {
      link: "",
      name: "CSR",
    },
  ];
  const Support = [
    {
      link: "#",
      name: "Verify Employee",
    },
    {
      link: "#",
      name: "Verify Certificate",
    },
    {
      link: "/project",
      name: "Project Status",
    },
    {
      link: "#",
      name: "Grievance Board",
    },

    {
      link: "/contact",
      name: "Contact",
    },
  ];

  const [OpenDrawer, setOpenDrawer] = useState(false);
  return (
    <section className={styles.nav_container}>
      <section className="container">
        <section className="row justify-content-between ">
          <section className="col-6 col-md-2 d-flex justify-content-md-center">
            <section className={styles.logo_container}>
              <Link href={"/"} passHref>
                <img width={"150px"} src="/images/main-logo.png" alt="logo" />
              </Link>
            </section>
          </section>
          <section className="col-md-8 d-none d-md-block">
            <ul className={styles.nav_menu}>
              <Link href={"/"} passHref>
                <li>Home</li>
              </Link>

              <li>
                <Dropdown
                  MenuName={"About"}
                  us={"Us"}
                  MenuList={About.map((value) => {
                    return (
                      <Link href={value.link} key={About.length}>
                        <li>{value.name}</li>
                      </Link>
                    );
                  })}
                />
              </li>
              <li>
                <Dropdown
                  MenuName={"Service"}
                  MenuList={Service.map((value) => {
                    return (
                      <Link href={value.link} key={Service.length}>
                        <li className="service_list">
                          {value.name}
                          <ul className="sub_dropdown">
                            {value.submenu.map((sub) => {
                              return (
                                <Link href={sub.link}>
                                  <li>{sub.name}</li>
                                </Link>
                              );
                            })}
                          </ul>
                        </li>
                      </Link>
                    );
                  })}
                />
              </li>
              <Link href={"/portfolio"} passHref>
                <li>Portfolio</li>
              </Link>
              <li>
                <Dropdown
                  MenuName={"Info"}
                  MenuList={Info.map((value) => {
                    return (
                      <Link href={value.link} key={Info.length}>
                        <li>{value.name}</li>
                      </Link>
                    );
                  })}
                />
              </li>
              <li>
                <Dropdown
                  MenuName={"Support"}
                  MenuList={Support.map((value) => {
                    return (
                      <Link href={value.link} key={Support.length}>
                        <li>{value.name}</li>
                      </Link>
                    );
                  })}
                />
              </li>
            </ul>
          </section>
          <section className="col-6 col-md-2  d-flex justify-content-end align-items-center">
            <section className={styles.hamburger}>
              <AiOutlineSearch fontSize={"3rem"} />

              <section
                className={styles.animated}
                onClick={() => setOpenDrawer(!OpenDrawer)}
              >
                <span></span>
                <span></span>
                <span></span>
              </section>

              <section className="d-block d-md-none ">
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  direction={"right"}
                  color={"black"}
                  rounded
                />
              </section>
            </section>
          </section>
        </section>
      </section>
      <AnimatePresence>
        {OpenDrawer && (
          <Drawer closeDrawer={() => setOpenDrawer(!OpenDrawer)} />
        )}
      </AnimatePresence>
      {isOpen && (
        <MobMenu
          about={About}
          service={Service}
          info={Info}
          support={Support}
          close={() => setOpen(!isOpen)}
        />
      )}
    </section>
  );
};

export default Navbar;
