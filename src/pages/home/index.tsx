import type { NextPage } from 'next';
import Head from 'next/head';
import { NavBar } from '../../components';

import QrGenerator from './components/QrGenerator';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>QR Code Gen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header>
        <NavBar />
      </header>

      {/* <div className="">
        <div
          className=" m-3 top-12   bottom-0 absolute left-0 right-0 rounded-xl p-2 flex flex-wrap"
          style={{ backgroundColor: "#ecf7ff" }}
        >
          <div className="md:basis-2/4 w-screen sm:basis-4/4">01</div>
          
        </div>
      </div> */}

      <main>
        <div
          className="flex flex-col-reverse  md:flex-row m-5 mt-10 rounded-3xl bottom-0 absolute top-12 right-0 left-0 p-5"
          style={{ backgroundColor: '#ecf7ff' }}
        >
          <div className="w-full md:w-2/3 mr-24">Div 1</div>
          <div className="w-full md:w-2/3">
            <QrGenerator />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
