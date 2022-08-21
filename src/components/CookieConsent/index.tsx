import React from 'react';
import { motion } from 'framer-motion';

export default function CookieConsent(props: any) {
  const { enableGoogleAdSense } = props;
  return (
    <>
      <motion.div
        initial={{ y: '2000px' }}
        animate={{ y: '0' }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', duration: 1.5 }}
        className="lg:bottom-5 lg:left-10  w-96 rounded-md h-44 absolute p-8 bg-white shadow-2xl sm:bottom-0 sm:left-0"
      >
        <div>
          <h3 className=" font-normal text-xl">
            By using our site you agree to our use of cookies to deliver a
            better site experience.
          </h3>
        </div>
        <div
          className="mt-3 w-32 rounded-lg font-bold text-xl underline cursor-pointer"
          onClick={enableGoogleAdSense}
        >
          Got it
        </div>
      </motion.div>
    </>
  );
}
