import type { NextPage } from "next";
import Head from "next/head";
import { NavBar } from "../../components";

import QrGenerator from "./components/QrGenerator";

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

      <main>
        <div
          className="sm:mt-52 flex flex-col-reverse  md:flex-row md:m-5 mt-10 rounded-3xl bottom-0 absolute top-12 right-0 left-0 p-5"
          style={{ backgroundColor: "#ecf7ff", minHeight: 500 }}
        >
          <div className="w-full md:w-2/3 mr-24">Div 1</div>
          <div className="w-full md:w-1/2">
            <QrGenerator />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
