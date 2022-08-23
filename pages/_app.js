import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Reza Portfolio</title>
        <link rel="icon" href="/next.ico"></link>
      </Head>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
