import Head from "next/head";
import { DonateButton } from "../components/DonateButton";
import { FormularioContato } from "../components/Form";
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
          <span>Seja Bem Vindo</span>
          <h1>
            Web Radio <br />
            feita <span>Para Você</span> e todo o Mundo
          </h1>
          <p>
            Ajude a Permanecer no AR <br />
            <span>Faça sua Doação por R$ 9,99</span>
          </p>
          <DonateButton />
        </section>

        <img
          className={styles.imgHome}
          src="/images/girl-music.jpg"
          alt="girl music"
        />
      </main>
      <Whatssap />
      <FormularioContato />
    </>
  );
}
