import React from "react";
import styles from "../../styles/ReadiStyles/service/accord.module.scss";

const Accord = ({ ac_head, ac_para, id }) => {
  return (
    <section className={styles.accord}>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${id}`}
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <p className={styles.accordianHeading}>{ac_head}</p>
            </button>
          </h2>
          <div
            id={id}
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p>{ac_para}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accord;
