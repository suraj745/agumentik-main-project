import React from "react";
import Modal from "../components/modal/Modal";
// import Navbar from "../components/navbar/Navbar";
import Navbar from "../augmen2/Navbar/Navbar";
import styles from "../styles/_layout/_layout.module.scss";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/footer/Footer";
import Router, { useRouter } from "next/router";
const Layout = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const router = useRouter();

  return (
    <section>
      <AnimatePresence>
        {isOpen && (
          <section className={styles.dark_container}>
            <Modal close={() => setOpen(!isOpen)} />
          </section>
        )}
      </AnimatePresence>
      <header>
        {router.route === "/careers" ? (
          ""
        ) : (
          <Navbar open={() => setOpen(!isOpen)} />
        )}
      </header>
      <main>{children}</main>
      <footer>{router.route === "/careers" ? "" : <Footer />}</footer>
    </section>
  );
};

export default Layout;
