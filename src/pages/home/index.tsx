import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import { NavBar } from '../../components';
import CookieConsent from '../../components/CookieConsent';
import Footer from '../../components/Footer';
import Ad from './components/Ad';
import QrGenerator from './components/QrGenerator';
import TextInput from './components/TextInput';

/**
 * Home Page
 * @returns {React.Component}
 */
const Home: NextPage = () => {
  const [inputValue, setInputValue] = useState('www.tasa.com.my');

  const [isCookieAccepted, setIsCookieAccepted] = useState(false);

  useEffect(() => {
    const isCookedAcceptedBefore =
      window.localStorage.getItem('cookie-accepted');
    if (isCookedAcceptedBefore) {
      setIsCookieAccepted(true);
      enableGoogleAdSense();
    } else {
      setIsCookieAccepted(false);
    }
    console.log(process.env.NEXT_PUBLIC_ADSENSE_ID);
  }, []);

  function enableGoogleAdSense() {
    try {
      const head = document.getElementsByTagName('head')[0];
      const scriptElement = document.createElement(`script`);
      scriptElement.type = `text/javascript`;
      scriptElement.async;
      scriptElement.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}-${process.env.NEXT_PUBLIC_ADSENSE_ID}`;
      scriptElement.crossOrigin = 'anonymous';
      head.appendChild(scriptElement);
    } catch (e) {
      console.log(e);
    }
    setIsCookieAccepted(true);
    window.localStorage.setItem('cookie-accepted', 'true');
  }

  return (
    <>
      <Head>
        <title>QR World</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header>
        <NavBar />
      </header>

      <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}-${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
        crossOrigin="anonymous"
      ></script>

      <main>
        {!isCookieAccepted && (
          <CookieConsent enableGoogleAdSense={enableGoogleAdSense} />
        )}

        <div
          // className="sm:mt-12 md:mt-10 flex flex-col md:flex-row md:m-5 mt-10 rounded-3xl bottom-0 absolute top-12 right-0 left-0 p-5 sm:h-fit md:h-screen"
          className="sm:mt-12 md:mt-10 flex flex-col lg:flex-row md:m-5 mt-10 rounded-3xl right-0 left-0 lg:p-5 sm:h-fit "
          style={{
            backgroundColor: '#ecf7ff',
          }}
        >
          <div className="w-full md:w-2/3 lg:mr-24">
            <TextInput inputValue={inputValue} setInputValue={setInputValue} />
          </div>
          <div className="w-full md:w-2/3 lg:mr-14">
            <QrGenerator inputValue={inputValue} />
          </div>
          {isCookieAccepted && (
            <div className="w-full md:w-1/4">
              <Ad />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
