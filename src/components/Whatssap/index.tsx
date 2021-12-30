import styles from "./styles.module.scss";

export default function Whatssap() {
  return (
    <div className="widget HTML" data-version="1" id="HTML2">
      <div className="widget-content">
        <a
          href="https://api.whatsapp.com/send?phone=5534992089832&amp;text=Olá,%20tudo%20bem?"
          target="_blank"
          rel="noreferrer"
          className={styles.whatsContainer}
        >
          {" "}
          <img
            src="https://images.tcdn.com.br/img/editor/up/1005990/whatsapp.png"
            alt="whatssap"
            width="50"
            height="50"
          />
        </a>
      </div>
      <div className="clear"></div>
    </div>
  );
}
