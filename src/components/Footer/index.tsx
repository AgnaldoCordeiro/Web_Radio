import Link from "next/link";
import styles from "./styles.module.scss";

export function Footer() {
  const urlLink = "https://www.linkedin.com/in/agnaldo-gabriel-61527112a/";
  return (
    <footer>
      <Link href={urlLink} passHref={true}>
        <div className={styles.divFooter}>
          <a target="_blank" rel="noreferrer">
            <p>
              &copy; 2021 AgnaldoCordeiro • Direitos Reservados. Inc.
              Desenvolvido por AgnaldoCordeiro.
            </p>
          </a>
        </div>
      </Link>
    </footer>
  );
}
