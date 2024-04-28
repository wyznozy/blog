import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script'
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

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
      <h1>Sita Application Certified!</h1>

      <section className={utilStyles.headingMd}>
        <p>
          And I'm freeeeeeeeeeeeeeeeeeeeeeee! I'd insert a gif here if I knew how.
        </p>
        <p>
          Will write more on this later but god the feeling of finally accomplishing a task you've worked like a month+ on feels so good. THIS IS WHY IM HERE BABY. 
          <br/> Thinking about putting a folder just for work posts because I want to start working on this website and doing stuff like making promises/api calls on here. 
        </p>



      </section>


    </Layout>
  );
}