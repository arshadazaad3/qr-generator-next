import Head from 'next/head';
import { Fragment, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Transition } from '@headlessui/react';
import { QRCodeCanvas } from 'qrcode.react';
import { ChevronDownIcon } from '@heroicons/react/solid';

import { classNames } from '../../../utils';

function Ad(props: any) {
  const { inputValue = 'www.tasa.com.my' } = props;

  const [size, setSize] = useState(400);

  // download QR code

  return (
    <>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', duration: 1.5 }}
        className="rounded-3xl h-full p-3 justify-center flex content-center items-center flex-col space-y-10 w-full"
        style={{
          backgroundColor: '#c5e3f6',
          minHeight: 700,
          minWidth: 300,
        }}
      ></motion.div>
    </>
  );
}

export default Ad;
