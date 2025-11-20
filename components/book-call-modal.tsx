"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ChevronRight } from "lucide-react"

const availableDates = [
  { date: "2025-01-22", day: "Wed" },
  { date: "2025-01-23", day: "Thu" },
  { date: "2025-01-27", day: "Mon" },
  { date: "2025-01-29", day: "Wed" },
  { date: "2025-01-30", day: "Thu" },
  { date: "2025-02-03", day: "Mon" },
  { date: "2025-02-05", day: "Wed" },
  { date: "2025-02-06", day: "Thu" },
  { date: "2025-02-10", day: "Mon" },
  { date: "2025-02-12", day: "Wed" },
]

const timeSlots = ["9:00 AM", "10:30 AM", "1:00 PM", "3:30 PM", "5:00 PM"]

export function BookCallModal() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [showMonthlyPopup, setShowMonthlyPopup] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="default">
          <Calendar className="mr-2 h-4 w-4" />
          Book a call
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Schedule a 30-Minute Call</DialogTitle>
          <DialogDescription>
            Book a quick 30-minute introductory call to discuss your project and explore how we can work together.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Select a Date</label>
              <button
                onClick={() => setShowMonthlyPopup(true)}
                className="flex items-center gap-1 text-xs text-blue-500 hover:text-blue-600 transition-colors"
              >
                show more dates
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <div className="flex gap-2 min-w-max">
                {availableDates.map((item) => (
                  <button
                    key={item.date}
                    onClick={() => setSelectedDate(item.date)}
                    className={`flex flex-col items-center rounded-lg border p-3 text-center transition-all w-[70px] ${
                      selectedDate === item.date
                        ? "border-blue-500 bg-blue-500/10 text-blue-500"
                        : "border-border bg-muted/30 hover:border-blue-500/50 hover:bg-muted"
                    }`}
                  >
                    <span className="text-xs text-muted-foreground">{item.day}</span>
                    <span className="text-lg font-semibold">{new Date(item.date).getDate()}</span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(item.date).toLocaleDateString("en-US", { month: "short" })}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {selectedDate && (
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-medium">
                <Clock className="h-4 w-4" />
                Select a Time
              </label>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((time) => (
                  <Badge
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className={`cursor-pointer px-3 py-2 transition-all ${
                      selectedTime === time
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "hover:border-blue-500/50 hover:bg-muted"
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {selectedDate && selectedTime && (
            <Button className="w-full" size="lg">
              Confirm Booking
            </Button>
          )}
        </div>
      </DialogContent>

      <Dialog open={showMonthlyPopup} onOpenChange={setShowMonthlyPopup}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Monthly Calendar</DialogTitle>
            <DialogDescription>Select a date from the full monthly calendar view.</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="grid grid-cols-7 gap-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center text-xs font-medium text-muted-foreground p-2">
                  {day}
                </div>
              ))}
              {Array.from({ length: 35 }, (_, i) => {
                const dayNumber = i - 2 // Assuming month starts on Wednesday
                const isValidDay = dayNumber > 0 && dayNumber <= 31
                const dateStr = isValidDay ? `2025-01-${String(dayNumber).padStart(2, "0")}` : null
                const isAvailable = dateStr && availableDates.some((d) => d.date === dateStr)

                return (
                  <button
                    key={i}
                    disabled={!isAvailable}
                    onClick={() => {
                      if (dateStr && isAvailable) {
                        setSelectedDate(dateStr)
                        setShowMonthlyPopup(false)
                      }
                    }}
                    className={`aspect-square rounded-lg border p-2 text-sm transition-all ${
                      !isValidDay
                        ? "border-transparent bg-transparent"
                        : isAvailable
                          ? selectedDate === dateStr
                            ? "border-blue-500 bg-blue-500 text-white"
                            : "border-border bg-muted/30 hover:border-blue-500/50 hover:bg-muted cursor-pointer"
                          : "border-border bg-background text-muted-foreground cursor-not-allowed opacity-40"
                    }`}
                  >
                    {isValidDay ? dayNumber : ""}
                  </button>
                )
              })}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Dialog>
  )
}
