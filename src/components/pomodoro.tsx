"use client";
import { PauseIcon, PlayIcon, TimerIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountdown } from "usehooks-ts";
import { useEffect, useState } from "react";
import { ResetIcon } from "@radix-ui/react-icons";
// import confetti from "canvas-confetti";

const Pomodoro = () => {
  const [startSound, setStartSound] = useState<HTMLAudioElement | null>(null);
  const [completedSound, setCompletedSound] = useState<HTMLAudioElement | null>(
    null
  );
  const [resetSound, setResetSound] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setStartSound(new Audio("./sounds/start.mp3"));
    setCompletedSound(new Audio("./sounds/completed.mp3"));
    setResetSound(new Audio("./sounds/reset.mp3"));
  }, []);

  const [count, { startCountdown, stopCountdown, resetCountdown }] =
    useCountdown({
      countStart: 1 * 5,
      intervalMs: 1000,
    });
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    setIsPlaying(true);
    setIsPaused(!isPaused);
    if (isPaused) {
      stopCountdown();
    } else {
      startSound?.play();
      startCountdown();
    }
  };
  const handleReset = () => {
    resetSound?.play();
    setIsPlaying(false);
    resetCountdown();
  };

  const formattedCount = formatTime(count);
  if (count === 0 && isPlaying) {
    completedSound?.play();
    // confetti(); // FIXME - Confetti not working on Vercel
    setIsPaused(false);
    handleReset();
  }

  return (
    <section className="w-full max-w-xl mx-auto bg-[#1A1A1A] rounded-lg p-6 mb-12">
      <header className="flex items-center justify-center mb-6">
        <TimerIcon className="text-red-500 h-6 w-6 mr-1" />
        <h2 className="text-xl font-bold">Pomodoro Timer</h2>
      </header>
      <div className="flex items-center justify-center text-4xl font-bold mb-6">
        <span> {formattedCount}</span>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <Button
          className={
            !isPlaying
              ? "bg-red-500 hover:bg-red-600"
              : isPaused
              ? "bg-purple-500 hover:bg-purple-600"
              : "bg-green-500 hover:bg-green-600"
          }
          onClick={handlePlay}
        >
          {!isPlaying ? (
            <>
              <PlayIcon className="h-5 w-5 mr-2" />
              Start
            </>
          ) : !isPaused ? (
            <>
              <PlayIcon className="h-5 w-5 mr-2" />
              Resume
            </>
          ) : (
            <>
              <PauseIcon className="h-5 w-5 mr-2" />
              Pause
            </>
          )}
        </Button>
        <Button className="bg-gray-500 hover:bg-gray-600" onClick={handleReset}>
          <ResetIcon className="h-5 w-5 mr-2" /> Reset
        </Button>
      </div>
    </section>
  );
};
export default Pomodoro;

function formatTime(timeInSeconds = 0) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}
