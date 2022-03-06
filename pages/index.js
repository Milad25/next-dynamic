import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='keywords' content='ninja course' />
        <meta
          name='description'
          content='this is a course from netninja youtube channel'
        />
        <meta charSet='utf-8' />
      </Head>
      <div>
        <Link href='/about'>about</Link>
      </div>
    </>
  );
}
