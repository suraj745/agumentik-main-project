import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/_mobmenu/_mobmenu.module.scss";
import { AiOutlineRight } from "react-icons/ai";
import { navbarData } from "../../augmen2/Navbar/NavbarData";
import { IoIosArrowDown } from "react-icons/io";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
const MobMenu = ({ close }) => {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const [open2, setOpen2] = useState("");
  const toggle2 = (id) => {
    if (open2 === id) {
      setOpen2();
    } else {
      setOpen2(id);
    }
  };

  const [open3, setOpen3] = useState("");
  const toggle3 = (id) => {
    if (open3 === id) {
      setOpen3();
    } else {
      setOpen3(id);
    }
  };
  return (
    <section className={styles.mobnav_container}>
      <Accordion className={styles.nav_menu} flush open={open} toggle={toggle}>
        {navbarData.map((value, index) => {
          return (
            <Link href={value.link} passHref>
              {/* <li>
              <div>
                {value.name}
                {value.dropdown && <IoIosArrowDown />}
              </div>
            </li> */}

              <AccordionItem>
                <AccordionHeader targetId={index}>
                  <section
                    className={styles.head}
                    onClick={value.dropdown ? null : close}
                  >
                    {value.name}
                    {value.dropdown && <IoIosArrowDown />}
                  </section>
                </AccordionHeader>
                {value.dropdown && (
                  <AccordionBody accordionId={index}>
                    <Accordion
                      className={`${styles.Accordion2} accordion2`}
                      flush
                      open={open2}
                      toggle={toggle2}
                    >
                      {value.dropdown?.map((value, index) => {
                        return (
                          <Link href={value.link} key={index}>
                            <AccordionItem>
                              <AccordionHeader
                                targetId={index}
                                onClick={value.submenu ? null : close}
                              >
                                <section className={styles.head2}>
                                  {value.name}
                                  {value.submenu && <IoIosArrowDown />}
                                </section>
                              </AccordionHeader>
                              {value.submenu && (
                                <AccordionBody accordionId={index}>
                                  <Accordion
                                    className={`${styles.Accordion3} accordion3`}
                                    flush
                                    open={open3}
                                    toggle={toggle3}
                                  >
                                    {value.submenu?.map((value, index) => {
                                      return (
                                        <Link href={value.link} key={index}>
                                          <AccordionItem>
                                            <AccordionHeader
                                              targetId={index}
                                              onClick={close}
                                            >
                                              <section className={styles.head3}>
                                                {value.name}
                                                {value.submenu && (
                                                  <IoIosArrowDown />
                                                )}
                                              </section>
                                            </AccordionHeader>
                                          </AccordionItem>
                                        </Link>
                                      );
                                    })}
                                  </Accordion>
                                </AccordionBody>
                              )}
                            </AccordionItem>
                          </Link>
                        );
                      })}
                    </Accordion>
                  </AccordionBody>
                )}
              </AccordionItem>
            </Link>
          );
        })}
      </Accordion>
    </section>
  );
};

export default MobMenu;
