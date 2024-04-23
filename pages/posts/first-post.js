import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script'
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

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
        <title>4-22 Blog</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={ () =>
          console.log('script loaded correctly, window.FB has been populated')
        }
      />
      <h1>My first React post!</h1>

      <section className={utilStyles.headingMd}>
        <p>
          Ahh at last I can start to add into the blog, work has kept me super busy!
          </p>
        <p>
          Later I will compile all the stuff I have worked on at work in the past.
          For now I am just going to talk about what I am doing now, and what I am learning :)
        </p>
        <p>
          Today marks like the month mark of me working on SITA certification for my PCM (Peripheral Control Manager) that communicates with SITA's application which then communicates 
          devices.
        </p>
      </section>


      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}