import { ActiveLink } from "../ActiveLink";
import Player from "../Player";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img className={styles.headerImg} src="/podcast.png" alt="RAdio Web" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/noticias">
            <a>Noticias</a>
          </ActiveLink>
        </nav>
        <div className={styles.buttonContainer}>
          <Player />
        </div>
      </div>
    </header>
  );
}
