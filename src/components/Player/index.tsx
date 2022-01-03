import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

export default function Player() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  function setPlayingState(state: boolean | ((prevState: boolean) => boolean)) {
    setIsPlaying(state);
  }

  function toggleIsPlaying() {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div>
      <div>
        {isPlaying ? (
          <button className={styles.pause} onClick={toggleIsPlaying}>
            Pause
          </button>
        ) : (
          <button className={styles.player} onClick={toggleIsPlaying}>
            Play
          </button>
        )}
      </div>
      <audio
        src="https://player-ssl.kshost.com.br:12462/live"
        autoPlay={true}
        ref={audioRef}
        onPlay={() => setPlayingState(true)}
        onPause={() => setPlayingState(false)}
      />
    </div>
  );
}
