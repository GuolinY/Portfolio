import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Layout({ title = "Guolin Yang", children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap"
        />
      </Head>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
