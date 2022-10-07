import React from "react";
import styles from "../../styles/Agumen2/_navbar/_navbar.module.scss";
import Dropdown from "../Dropdown/Dropdown";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import Hamburger from "hamburger-react";
import Drawer from "../Drawer/Drawer";
import MobMenu from "../../components/mobilemenu/MobMenu";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { navbarData } from "./NavbarData";
const searchData = [
  {
    name: "blogs",
    link: "/blogs",
  },
  {
    name: "portfolio",
    link: "/portfolio",
  },
];
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const [value, setValue] = useState("");

  const [sticky, setSticky] = useState(false);
  const [OpenDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const stickyNavbar = () => {
      window.scrollY > 40 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", stickyNavbar);

    window.addEventListener("click", () => {
      setSearch(false);
    });

    return () => {
      window.removeEventListener("scroll", stickyNavbar);
    };
  }, []);

  return (
    <section className={`${styles.nav_container} ${sticky && `stickynavbar`}`}>
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
            <ul className={styles.menu_container}>
              {navbarData.map((value, index) => {
                return (
                  <Link key={index} href={value.link} passHref>
                    <li className={styles.menu}>
                      <a>
                        {value.name}
                        {value.dropdown && (
                          <IoIosArrowDown className={styles.menu_arrow} />
                        )}
                      </a>

                      {value.dropdown && (
                        <ul className={styles.dropdown}>
                          {value.dropdown.map((value, index) => {
                            return (
                              <Link key={index} href={value.link} passHref>
                                <li className={styles.submenu_container}>
                                  <div>
                                    {value.name}

                                    {value.submenu && (
                                      <IoIosArrowDown
                                        className={styles.dropdown_arrow}
                                      />
                                    )}
                                  </div>

                                  <section
                                    className={styles.submenu_outer_container}
                                  >
                                    {value.submenu && (
                                      <ul className={styles.submenu}>
                                        {value.submenu.map((value, index) => {
                                          return (
                                            <Link
                                              href={value.link}
                                              key={index}
                                              passHref
                                            >
                                              <li>
                                                <a>{value.name}</a>
                                              </li>
                                            </Link>
                                          );
                                        })}
                                      </ul>
                                    )}
                                  </section>
                                </li>
                              </Link>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </section>
          <section className="col-6 col-md-2  d-flex justify-content-end align-items-center">
            <section className={styles.hamburger}>
              <section
                className={styles.search}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <AiOutlineSearch
                  fontSize={"3rem"}
                  onClick={(e) => {
                    setSearch(!search);
                    e.stopPropagation();
                  }}
                />

                {search && (
                  <section className={styles.input}>
                    <input
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      type="search"
                      placeholder="Search "
                    />
                    {value.length > 0 && (
                      <ul className={styles.searchedlist}>
                        {searchData
                          .filter((filt) => {
                            if (value === "") {
                              return;
                            } else if (
                              filt.name
                                .toLocaleLowerCase()
                                .includes(value.toLowerCase())
                            ) {
                              return filt;
                            }
                          })
                          .map((sear, index) => {
                            return (
                              <Link key={index} href={sear.link}>
                                <li style={{ cursor: "pointer" }}>
                                  {sear.name}
                                </li>
                              </Link>
                            );
                          })}
                      </ul>
                    )}
                  </section>
                )}
              </section>
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
      {isOpen && <MobMenu close={() => setOpen(!isOpen)} />}
    </section>
  );
};

export default Navbar;
