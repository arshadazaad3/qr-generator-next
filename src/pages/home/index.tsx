import type { NextPage } from "next";
import Head from "next/head";

import QrGenerator from "./components/QrGenerator";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>QR Code Gen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header className="p-3 b-10" style={{ backgroundColor: "#05445E" }}>
        <div className="max-w-7xl m-auto">
          <div className="text-xl font-bold text-white">QR Code Gen</div>
        </div>
      </header>

      {/* <div className="">
        <div
          className=" m-3 top-12   bottom-0 absolute left-0 right-0 rounded-xl p-2 flex flex-wrap"
          style={{ backgroundColor: "#ecf7ff" }}
        >
          <div className="md:basis-2/4 w-screen sm:basis-4/4">01</div>
          <QrGenerator />
        </div>
      </div> */}

      <main>
        <div
          className="flex flex-col-reverse align-center justify-center md:max-w-4xl md:flex-row m-auto mt-5"
          // style={{ backgroundColor: "#ecf7ff" }}
        >
        <div className="w-full md:w-2/3 mr-24">Div 1</div>
        <div className="w-full md:w-1/3 self-center">Div 2</div>
        </div>
      </main>
    </>
  );
};

export default Home;
