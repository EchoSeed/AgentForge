import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Philosopher&apos;s Stone v4 — AI Agent Markdown Forge</title>
        <meta name="description" content="Philosopher's Stone v4 — Dual-Register · Triple-Mode · Semantic Taxonomy · EchoSeed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { background: #0a0a1a; }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
