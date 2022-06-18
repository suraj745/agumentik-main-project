import { FaSearch } from "react-icons/fa";
import styles from "../../styles/_navbar.scss/_navbar.module.scss";
import Dropdown from "../dropdown/Dropdown";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { useState } from "react";
import MobMenu from "../mobilemenu/MobMenu";
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
  },
  {
    link: "/single-service",
    name: "Ecommerce Development",
  },
  {
    link: "/single-service",
    name: " Single Vendor",
  },

  {
    link: "/Load",
    name: "Multivendor",
  },
  {
    link: "/single-service",
    name: "  Mobile App Development",
  },
  {
    link: "/single-service",
    name: "Software Development",
  },
  {
    link: "/single-service",
    name: "UI/UX Designing",
  },
  {
    link: "/single-service",
    name: "Emerging Technologies",
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
    link: "#",
    name: "Project Status",
  },
  {
    link: "#",
    name: "Grievance Board",
  },

  {
    link: "#",
    name: "Contact",
  },
];

const Navbar = ({ open }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className={styles.nav_container}>
      {/* logo */}
      <section className={styles.logo}>
        <Link href={"/"} passHref>
          <img
            src="https://agumentik-software.vercel.app/images/logo.png"
            alt="logo"
            width={150}
          />
        </Link>
      </section>

      {/* menu */}
      <section className={styles.menus}>
        <Link href={"/"} passHref>
          <a className="text-decoration-none" style={{ color: "#202647" }}>
            Home
          </a>
        </Link>

        <Dropdown
          menuName={"AboutUs"}
          name={About.map((value) => {
            return (
              <Link href={value.link} passHref key={About.length}>
                <li>{value.name}</li>
              </Link>
            );
          })}
        />
        <Dropdown
          menuName={"Services"}
          name={Service.map((value) => {
            return (
              <Link href={value.link} passHref key={Service.length}>
                <li>{value.name}</li>
              </Link>
            );
          })}
        />
        <a>Portfolio </a>
        <Dropdown
          menuName={"Info"}
          name={Info.map((value) => {
            return (
              <Link href={value.link} passHref key={Info.length}>
                <li>{value.name}</li>
              </Link>
            );
          })}
        />
        <Dropdown
          menuName={"Support"}
          name={Support.map((value) => {
            return (
              <Link href={value.link} passHref key={Support.length}>
                <li>{value.name}</li>
              </Link>
            );
          })}
        />
      </section>

      {/* hamburger */}
      <section className={styles.hamburgers}>
        {/*  search*/}
        <section className={styles.first_section}>
          <div className={styles.search}>
            <FaSearch
              fontSize={"2rem"}
              color={"#5b5b98"}
              fontWeight={"bolder"}
            />
          </div>

          {/* hamburger */}
          <div className={styles.hamburger} onClick={open}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>

        {/* animated hamburger */}
        <div className={styles.anim_hamburger}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            direction={"right"}
            color={"black"}
            rounded
          />
        </div>
      </section>

      {isOpen && (
        <MobMenu
          about={About}
          service={Service}
          info={Info}
          support={Support}
        />
      )}
    </nav>
  );
};

export default Navbar;
