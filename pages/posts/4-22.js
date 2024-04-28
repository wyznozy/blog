import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script'
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

// This is now from Layout
// const MyLinkedInImage = () => (
//   <Image
//     src="/images/profile.jpg"
//     height={400}
//     width={400}
//     alt="Mike C"
//   />
// )

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
      <h1>My first React post! Going to discuss about SITA certification here on the week of 4-22</h1>

      <section className={utilStyles.headingMd}>
        <p>
          Ahh at last I can start to add into the blog, work has kept me super busy!
          </p>
        <p>
          Later I will compile all the stuff I have worked on at work in the past.
          For now I am just going to talk about what I am doing now, and what I am learning :)
        </p>
        <p>
          Today marks like the month mark of me working on SITA certification for my PCM (Peripheral Control Manager) that communicates with SITA's application in order to read/write to the device.
        </p>

        <p>
          Over the course of the certification I've had to make numerous changes to the application. The latest changes I've had to do is message the SITA application to turn on transparency
          mode for the BGR (Boarding Gate Reader). <br/> The reason for this is because when connecting to a BGR, if the BGR is on a wedge device with an LSR it will just open both of the devices.
          If i then scan a boarding pass on the BGR, it will become confused and send the signal to either the LSR or the BGR randomly. 
        </p>

        <p>
          Transparency mode fixes this by forcing the wedge device to only use the BGR (locking the LSR). Setting the mode to A08 apparently also can fix this but after doing so we were still noticing issues. 
        </p>

        <p>
          The latest change I have had to make recently (and hopefully the last lol) is we noticed that whenever a BTP's paper jam is cleared, it will attempt to reprint or do nothing depending on the ATB setting.
          This would be fine but if the ATB attempts to reprint, it will send a message to the SITA application which will then be held in the queue of messages to be read. <br/>
          If the message is not read, we will always be behind a response whenever we write. 
        </p>

        <p>
          The solution to this is by querying the ATB status (we input a specific bit to observe after querying) and then observing what the query response is.
          Typical response would be 3110 or 3010. We care about whether or not the 3rd bit is 1 or 0. <br/>
          1 = device has at least one read message pending <br/>
          0 = device has no read messages pending <br/>
        </p>

        <p>
          If a message is pending we will do a while loop and read from the device and query again until the status returns a 0 in that specific bit.
        </p>

        <p>
          Sorry if that was a mouthful, I will slowly figure out how to not just make this a wall of text with technical stuff sometime later lol. Will look into introducing images which hopefully 
          make it more fun to follow along with. Till next time!
        </p>
      </section>
    </Layout>
  );
}