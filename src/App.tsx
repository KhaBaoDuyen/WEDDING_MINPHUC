import { useState } from "react";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import "./App.css";

export const audioRef = { current: null as HTMLAudioElement | null };

function App() {
  const [screen, setScreen] = useState<"landing" | "home">("landing");
  const [isPlaying, setIsPlaying] = useState(false);

  const startAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.muted = false;
      audio.volume = 0;
      await audio.play();

      setIsPlaying(true);

      let vol = 0;
      const fade = setInterval(() => {
        if (vol < 1) {
          vol += 0.05;
          audio.volume = Math.min(vol, 1);
        } else {
          clearInterval(fade);
        }
      }, 100);
    } catch (e) {
      console.log("Audio bị chặn:", e);
    }
  };

  return (
    <div className="bg-main min-h-screen flex justify-center items-center">
      <div className="w-full max-w-[430px] min-h-screen bg-Linen relative overflow-hidden">
        <audio
          ref={(el) => {
            audioRef.current = el;
          }}
          src="/audio/snaptt.me-37205712.mp3"
          loop
          playsInline
          preload="auto"
        />

        <button
          onClick={() => {
            if (!audioRef.current) return;

            if (audioRef.current.paused) {
              audioRef.current.play();
              setIsPlaying(true);
            } else {
              audioRef.current.pause();
              setIsPlaying(false);
            }
          }}
          className="fixed top-2 right-2 z-50 w-16 h-16 rounded-full p-[5px] bg-Red shadow-lg hover:scale-105 transition"
        >
          <div className="w-full h-full rounded-full overflow-hidden relative">

            <img
              src="/images/SAM11579.jpg"
              className={`w-full h-full object-cover ${isPlaying ? "animate-spin-slow" : ""
                }`}
            />

            <div className="absolute w-3 h-3 bg-white rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          </div>
        </button>

        {screen === "landing" ? (
          <Landing
            onFinish={() => setScreen("home")}
            onStartAudio={startAudio}
          />
        ) : (
          <Home />
        )}
      </div>
    </div>
  );
}

export default App;