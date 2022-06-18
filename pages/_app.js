import Layout from "../layout/Layout";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Loader from "../components/loading/Loading";
import { useEffect, useState } from "react";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
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
