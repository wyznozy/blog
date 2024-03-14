import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script'
import Layout from '../../components/layout';

const MyLinkedInImage = () => (
  <Image
    src="/images/profile.jpg"
    height={400}
    width={400}
    alt="Mike C"
  />
)



export default function FirstPost () {
  return(
    // Head is what the tab header is displaying.
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={ () =>
          console.log('script loaded correctly, window.FB has been populated')
        }
      />
      <h1>First Post!</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}