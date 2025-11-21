"use client";

import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

interface CountdownTimerProps {
  targetDate: Date;
  compact?: boolean;
}

export function CountdownTimer({
  targetDate,
  compact = false,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate]);

  if (compact) {
    return (
      <div className="flex items-center gap-1.5 rounded-full bg-linear-to-r from-orange-500 via-red-500 to-pink-500 px-2.5 py-1 shadow-lg shadow-red-500/30 animate-gentle-pulse">
        <Flame className="h-3 w-3 text-white animate-gentle-pulse opacity-90" />
        <div className="flex items-center gap-0.5 text-white">
          <CompactTimeUnit value={timeLeft.days} label="d" />
          <span className="text-[10px] font-bold">:</span>
          <CompactTimeUnit value={timeLeft.hours} label="h" />
          <span className="text-[10px] font-bold">:</span>
          <CompactTimeUnit value={timeLeft.minutes} label="m" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-1.5">
      <TimeUnit value={timeLeft.days} label="d" />
      <span className="text-sm font-bold">:</span>
      <TimeUnit value={timeLeft.hours} label="h" />
      <span className="text-sm font-bold">:</span>
      <TimeUnit value={timeLeft.minutes} label="m" />
      <span className="text-sm font-bold">:</span>
      <TimeUnit value={timeLeft.seconds} label="s" />
    </div>
  );
}

function CompactTimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <span className="text-[11px] font-bold tabular-nums">
      {value.toString().padStart(2, "0")}
      <span className="text-[9px] opacity-90">{label}</span>
    </span>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-sm font-bold tabular-nums">
        {value.toString().padStart(2, "0")}
      </div>
      <span className="mt-0.5 text-[10px] text-muted-foreground">{label}</span>
    </div>
  );
}
