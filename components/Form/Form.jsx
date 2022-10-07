import React from "react";
import styles from "../../styles/_formstyles/_form.module.scss";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import { useState } from "react";
import { Spinner } from "reactstrap";
import { useEffect } from "react";
const social_icon = [
  {
    icon: <FaFacebookF fontSize={"2rem"} />,
    link: "https://www.facebook.com/agumentikconsulting",
  },
  {
    icon: <FaTwitter fontSize={"2rem"} />,
    link: "https://twitter.com/agumentik",
  },
  {
    icon: <FaInstagram fontSize={"2rem"} />,
    link: "https://www.instagram.com/agumentiksoftware/?hl=en",
  },
  {
    icon: <FaLinkedin fontSize={"2rem"} />,
    link: "https://in.linkedin.com/company/agumentikconsultancy",
  },
  {
    icon: <FaPinterest fontSize={"2rem"} />,
    link: "https://in.pinterest.com/agumentiksoftware/",
  },
];
const Form = () => {
  const captcha = useRef();
  const [active, setActive] = useState(false);

  const onChange = (value) => {
    value ? setActive(true) : setActive(false);
  };
  const validate = yup.object().shape({
    name: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(40)
      .required("Name is a required field"),
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Email is a required field"),

    subject: yup.string().required("Subject field is required"),
    phoneNumber: yup
      .string(/^[0-9][0-9 -]*$/, "Phone number must be integer")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number must be greater than 8 or equal to 8"
      ),
    message: yup.string().required("Message is required field"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(validate),
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`${process.env.URL}api/contact`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const data1 = await res.json();

      toast.success(data1.success, {
        position: "bottom-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      captcha.current.props.grecaptcha.reset();
      return reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="container">
      <ToastContainer />
      <section className="row justify-content-between content_pad">
        <section className="col-lg-5 d-flex align-items-center">
          <ul className={styles.left_content}>
            <li className={styles.heading}>
              <h1>Get In Touch</h1>
            </li>
            <li className={styles.paragraph}>
              <p>
                Let’s work together to create a changing experience that will
                turn your brand from bland to buzz worthy. We would love to hear
                from you whether you are curious about the features, a free
                quote or even need additional information, don’t hesitate to
                leave a message. We will get back to you as soon as possible,
                and we will be happy to answer your value question.
              </p>
            </li>
            <li className={styles.icons}>
              {social_icon.map((value, index) => {
                return (
                  <Link key={index} href={value.link} passHref>
                    <span>{value.icon}</span>
                  </Link>
                );
              })}
            </li>
          </ul>
        </section>
        <section className="col-lg-6">
          <section className={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <ul>
                <li className={styles.top}>
                  <section>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Name"
                      {...register("name")}
                    />
                    <div style={{ height: "2rem" }}>
                      {errors?.name && (
                        <span style={{ color: "red" }}>
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                  </section>
                  <section>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Email"
                      {...register("email")}
                    />
                    <div style={{ height: "2rem" }}>
                      {errors?.email && (
                        <span style={{ color: "red" }}>
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </section>
                </li>
                <li>
                  <input
                    type={"text"}
                    placeholder="Phone Number"
                    {...register("phoneNumber")}
                  />

                  <div style={{ height: "2rem" }}>
                    {errors?.phoneNumber && (
                      <span style={{ color: "red" }}>
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </div>
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    {...register("subject")}
                  />

                  <div style={{ height: "2rem" }}>
                    {errors?.subject && (
                      <span style={{ color: "red" }}>
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </li>
                <li className={styles.message}>
                  <textarea
                    name=""
                    id=""
                    placeholder="Write your message...."
                    {...register("message")}
                  ></textarea>

                  <div style={{ height: "2rem" }}>
                    {errors?.message && (
                      <span style={{ color: "red" }}>
                        {errors.message.message}
                      </span>
                    )}
                  </div>
                </li>
                <li>
                  <ReCAPTCHA
                    ref={captcha}
                    sitekey={process.env.RECAPTCHA}
                    onChange={onChange}
                  />
                </li>
                <li>
                  <button
                    disabled={active ? false : true}
                    className={styles.default}
                  >
                    {isSubmitting ? (
                      <Spinner color="light" size="">
                        Loading...
                      </Spinner>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                </li>
              </ul>
            </form>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Form;
