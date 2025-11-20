"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    setTimeLeft(calculateTimeLeft())

    return () => clearInterval(timer)
  }, [targetDate])

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
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-sm font-bold tabular-nums">
        {value.toString().padStart(2, "0")}
      </div>
      <span className="mt-0.5 text-[10px] text-muted-foreground">{label}</span>
    </div>
  )
}
