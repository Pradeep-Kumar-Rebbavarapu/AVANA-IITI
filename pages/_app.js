import '@/styles/globals.css';
import '@/public/css/animate.css';
import '@/public/css/icomoon.css';
import '@/public/css/bootstrap.css';
import '@/public/css/superfish.css';
import '@/public/css/style.css';
import Script from 'next/script';
import dynamic from 'next/dynamic'
import { useRef, useEffect } from 'react';

const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false })
const Footer = dynamic(() => import('../components/Footer'), { ssr: false })

export default function App({ Component, pageProps }) {


  return (
    <div className=''>
      <Navbar />
      <div className='!z-[0]'>
        <Component {...pageProps} />
      </div>
      <Footer />
      <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/js/jquery.easing.1.3.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
      <Script src="/js/jquery.waypoints.min.js" strategy="beforeInteractive" />
      <Script src="/js/sticky.js" strategy="beforeInteractive" />
      <Script src="/js/jquery.stellar.min.js" strategy="beforeInteractive" />
      <Script src="/js/hoverIntent.js" strategy="beforeInteractive" />
      <Script src="/js/superfish.js" strategy="beforeInteractive" />
      <Script src="/js/main.js" strategy="beforeInteractive" />
    </div>
  );
}