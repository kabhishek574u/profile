import Head from "next/head";
import Link from "next/link";
import Nav from "../components/nav";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kumar Abhishek</title>
        <meta name="description" content="Frontend Developer, Bengaluru" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <h1 className={styles.title}>$ Hi! I am Kumar Abhishek</h1>
        <p>$ A frontend developer</p>
        <p>
          $ <strong>Skills:</strong>
        </p>
        <p>
          $ <strong>Languages: </strong> HTML, HTML5, CSS, CSS3, Javascript,
          Python
        </p>
        <p>
          $ <strong>Libraries: </strong> React, Jquery, Redux, Thunk, Redux-Saga
        </p>
        <p>
          $ <strong>UI Libraries: </strong> Material UI, SCSS, Tailwind, Styled
          Components, Bootstrap
        </p>
        <p>
          $ <strong>Frameworks: </strong> NextJs, Node
        </p>
        <p>
          $ <strong>Tools: </strong> Webpack, Babel, Storybook, GIT,
        </p>
        <p>
          $ <strong>Testing</strong> Jest, Mocha
        </p>
        <br />
        <h3>***<Link href="https://learn.kumarabhishek.dev/">Learn with me</Link>***</h3>
      </main>
    </div>
  );
}
