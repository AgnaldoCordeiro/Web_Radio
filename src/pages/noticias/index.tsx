import Head from "next/head";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { apiNoticia } from "../../services/api";
import { UserShartInterface } from "../../data/@types/UserInterface";

export default function Publications() {
  const [items, setItems] = useState([] as UserShartInterface[]);
  const urlBase = "https://bing-news-search1.p.rapidapi.com/news";

  const data = async () => {
    const result = await apiNoticia(urlBase);
    return result;
  };
  useEffect(() => {
    data().then((res) => {
      JSON.stringify(setItems(res.data.value), null, 2);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Noticias | Radio Web</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          {items.map((item) => (
            <Link key={item.id} href={`${item.url}`}>
              <a>
                <time>
                  {new Date(item.datePublished).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <strong>{item.name}</strong>
                <p>{item.description}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
