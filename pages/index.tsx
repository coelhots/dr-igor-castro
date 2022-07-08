import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Fab from "@mui/material/Fab";
import { Hidden } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

const WhatsAppFab = styled(Fab)({
  color: "white",
  backgroundColor: "#25d366",
  position: "fixed",
  left: "5px",
  bottom: "5px",
  "&:hover": {
    backgroundColor: "#25d366",
    color: "white",
  },
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dr Igor Castro</title>
        <meta name="description" content="" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <Hidden smUp>
        <Link
          rel="noopener"
          underline="none"
          href="https://wa.me/5511981045189"
          target="_blank"
        >
          <WhatsAppFab aria-label="WhatsApp">
            <WhatsAppIcon />
          </WhatsAppFab>
        </Link>
      </Hidden>
      <Header />
    </>
  );
};

export default Home;
