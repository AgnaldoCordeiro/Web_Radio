import styles from "./styles.module.scss";
import Link from "next/link";

export function DonateButton() {
  const url = "https://buy.stripe.com/test_7sI6so6Nt1dF9Gg6oo";
  return (
    <Link href={url}>
      <a target="_blank">
        <button type="button" className={styles.donateButton}>
          Faça sua Doação
        </button>
      </a>
    </Link>
  );
}
