import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1 className={utilStyles.Link}>
        <Link href="/posts/4-22">4-22 Post</Link>
      </h1>

      <h1 className={utilStyles.Link}>
        <Link href="/posts/4-27">4-27 Post</Link>
      </h1>
    </Layout>
  );
}
