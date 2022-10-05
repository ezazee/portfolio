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

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5533536258066529"
     crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
