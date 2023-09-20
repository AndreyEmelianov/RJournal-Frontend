import Head from 'next/head';
import Header from '../components/Header/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Journal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}
