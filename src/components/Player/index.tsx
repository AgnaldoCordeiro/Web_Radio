import ReactAudioPlayer from "react-audio-player";
//

export default function Player() {
  return (
    <iframe
      src="https://app.kshost.com.br/player-barra01/12462/false"
      frameBorder="0"
      scrolling="no"
      width="231"
      height="73"
    >
      <ReactAudioPlayer
        src="https://player-ssl.kshost.com.br:12462/live"
        autoPlay={true}
        controls
      />
    </iframe>
  );
}
