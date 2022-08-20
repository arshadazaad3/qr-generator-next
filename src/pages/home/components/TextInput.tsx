import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>QR Code Gen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="h-screen">
        <div
          className=" m-3 top-0 bottom-0 absolute left-0 right-0 rounded-xl p-2 flex flex-wrap	"
          style={{ backgroundColor: "#ecf7ff" }}
        >
          <div className="md:basis-2/4 sm:w-screen sm:basis-4/4 ">01</div>
          <div className="md:basis-2/4 sm:w-screen sm:basis-4/4">02</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
