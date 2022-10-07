import Layout from "../layout/Layout";
import "../styles/globals.scss";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Loader from "../components/loading/Loading";
import { useEffect, useState } from "react";
import Aos from "aos";
import "react-toastify/dist/ReactToastify.css";

import "aos/dist/aos.css";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      {!loading ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MyApp;
