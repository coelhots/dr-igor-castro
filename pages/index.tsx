import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dr Igor Castro</title>
        <meta name="description" content="" />
        <link rel="icon" type="image/x-icon" href="favicon.ico"/>

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar/>
      <Header/>
    </>
  )
}

export default Home
