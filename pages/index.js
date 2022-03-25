import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kumar Abhishek</title>
        <meta name="description" content="Frontend Developer, Bengaluru" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>This website is under construction</h1>{" "}
      </main>
    </div>
  );
}
