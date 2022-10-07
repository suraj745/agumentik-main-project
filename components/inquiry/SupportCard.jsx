import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/_inquiry/supportcard.module.scss";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { Spinner } from "reactstrap";
const InquriyCard = () => {
  const [flip, setFlip] = useState(false);

  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("Name is a required field"),
    phoneNumber: yup
      .string(/^[0-9][0-9 -]*$/, "Phone number must be integer")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number must be greater than 8 or equal to 8"
      ),
  });

  // form control
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const data1 = { ...data, project: "project" };

    const res = await fetch(`${process.env.URL}api/contact`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(data1),
    });

    const data2 = await res.json();

    data2.success && setFlip(!flip);
    toast.success(data2.success, {
      position: "bottom-right",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    return reset();
  };
  return (
    <div className={styles.outerLayer} onClick={() => setFlip(!flip)}>
      <ToastContainer />
      <div className={styles.cardContainer}>
        <ReactCardFlip isFlipped={flip} flipDirection={"horizontal"}>
          <motion.ul
            className={`${styles.cardContent1}`}
            onClick={() => setFlip(!flip)}
          >
            <li className={styles.icon}>
              <img src="/new-icons/clipboard.png" alt="" />
            </li>
            <li className={styles.heading}>
              <h1>Project Status</h1>
            </li>
            <li className={styles.para}>
              <p>
                Get latest status and preview of your project using project ID.
              </p>
            </li>
          </motion.ul>

          <motion.form
            className={`${styles.cardContent2} `}
            onSubmit={handleSubmit(onSubmit)}
          >
            <ul className={`text-center `} style={{ paddingBottom: "2rem" }}>
              <li className={styles.heading1}>Enter Project Information</li>
              <li className={styles.input}>
                <input
                  type="text "
                  null
                  name=""
                  id=""
                  placeholder="project name"
                  {...register("name")}
                  autoComplete={"off"}
                  onClick={(e) => e.stopPropagation()}
                />
                {errors?.name && (
                  <p
                    className="text-start"
                    style={{
                      color: "red",
                      paddingLeft: "0.5rem",
                      paddingTop: "0.5rem",
                    }}
                  >
                    {errors.name.message}
                  </p>
                )}
              </li>
              <li className={styles.input}>
                <input
                  type="text "
                  name=""
                  id=""
                  placeholder="phone number"
                  autoComplete={"off"}
                  {...register("phoneNumber")}
                  onClick={(e) => e.stopPropagation()}
                />
                {errors?.phoneNumber && (
                  <p
                    className="text-start"
                    style={{
                      color: "red",
                      paddingLeft: "0.5rem",
                      paddingTop: "0.5rem",
                    }}
                  >
                    {errors.phoneNumber.message}
                  </p>
                )}
              </li>
              <li className={`${styles.button}`}>
                <button onClick={(e) => e.stopPropagation()}>
                  {isSubmitting ? (
                    <Spinner color="light">Loading...</Spinner>
                  ) : (
                    <span> Submit</span>
                  )}
                </button>
              </li>
            </ul>
          </motion.form>
        </ReactCardFlip>
      </div>
    </div>
  );
};

export default InquriyCard;
