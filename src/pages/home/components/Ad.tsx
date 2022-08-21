import { useEffect } from 'react';
import { motion } from 'framer-motion';

function Ad() {
  useEffect(() => {
    // @ts-ignore
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', duration: 1.5 }}
        className="rounded-3xl h-full p-3  flex  flex-col  w-full text-center"
        style={{
          backgroundColor: '#c5e3f6',
          minHeight: 700,
          minWidth: 300,
        }}
      >
        <div>Ads</div>
        <div>
          <ins
            className="adsbygoogle"
            style={{ display: 'inline-block', width: '728px', height: '90px' }}
            data-ad-client={`${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}-${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
            data-ad-slot={process.env.NEXT_PUBLIC_ADSENSE_ID}
          ></ins>
        </div>
      </motion.div>
    </>
  );
}

export default Ad;
