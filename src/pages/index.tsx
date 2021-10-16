import Head from 'next/head'
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/navbar';
import Main from '../components/main';
import Spacer from '../components/spacer';
import Footer from '../components/footer';

const Home = () => {
  const spacerHeight = 5;
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Toaster />
      <Head>
        <title>Frankenstien</title>
        <meta name="description" content="Todo: Fill out details here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      {/* <Spacer heigth={spacerHeight}></Spacer> */}
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};


export default Home;



