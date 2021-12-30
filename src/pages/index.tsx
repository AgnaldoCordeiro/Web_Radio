import Head from "next/head";
import Whatssap from "../components/Whatssap";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Radio Web</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Bem Vindo</span>
          <h1>
            Web Radio <br />
            feita <span>Para Você</span> e todo o Mundo
          </h1>
          <p>
            Veja todas as nossas publicações <br />
            <span>por R$ 9,99</span>
          </p>
        </section>

        <img
          className={styles.imgHome}
          src="/images/girl-music.jpg"
          alt="girl music"
        />
      </main>
      <Whatssap />
    </>
  );
}
