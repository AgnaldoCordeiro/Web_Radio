import Head from "next/head";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Publications() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const url = "https://bing-news-search1.p.rapidapi.com/news";

  const req = new Request(url);

  useEffect(() => {
    fetch(req, {
      method: "GET",
      headers: {
        "accept-language": "pt-br",
        "x-bingapis-sdk": "true",
        "x-search-location": "br",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "e9970d4199msh61cd785b8750db9p1d9d1djsnca008e95cb75",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.value);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Head>
          <title>Noticias | Radio Web</title>
        </Head>
        <main className={styles.container}>
          <div className={styles.posts}>
            {items.map((item) => (
              <Link href={item.url}>
                <a key={item.id}>
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
}
