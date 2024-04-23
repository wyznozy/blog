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
        <Link href="/posts/first-post">4-22 Post</Link>
      </h1>
    </Layout>
  );
}
