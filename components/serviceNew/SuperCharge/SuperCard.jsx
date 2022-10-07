import Link from "next/link";
import styles from "./SuperCard.module.scss";
import { motion } from "framer-motion";
const SuperCard = ({
  icon,
  brandname,
  content,
  link,
  id,
  count,
  background,
}) => {
  return (
    <motion.ul
      whileHover={{ scale: 1.05 }}
      className={styles.supercard_container}
      style={{ background: background }}
      data-aos="fade-up"
      data-aos-duratoin={`${id * 100}`}
    >
      <li>
        <img className={styles.icon} src={icon} alt="" />
        <p
          style={{ fontSize: "4rem", fontWeight: 700 }}
          className={styles.count}
        >
          {" "}
          {count}
        </p>
        <p>
          <strong>{brandname}-</strong>
          {content}
        </p>
      </li>
      <Link href={link} passHref>
        <li>Explore More</li>
      </Link>
    </motion.ul>
  );
};

export default SuperCard;
