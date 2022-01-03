import Link from "next/link";
import Player from "../Player";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img className={styles.headerImg} src="/podcast.png" alt="RAdio Web" />
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/" prefetch>
            <a>Posts</a>
          </Link>
        </nav>
        <div className={styles.buttonContainer}>
          <Player />
        </div>
      </div>
    </header>
  );
}
