"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useLanguage } from "@/contexts/language-context";
import {
  getAvailableDates,
  getTimeSlots,
  type AvailableDate,
} from "@/lib/mock-api";
import { Calendar, Clock, ChevronRight } from "lucide-react";

export function BookCallModal() {
  const { t } = useLanguage();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showMonthlyPopup, setShowMonthlyPopup] = useState(false);
  const [availableDates, setAvailableDates] = useState<AvailableDate[]>([]);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);

  useEffect(() => {
    // Load available dates from mock API
    getAvailableDates().then(setAvailableDates);
  }, []);

  useEffect(() => {
    // Load time slots when a date is selected
    if (selectedDate) {
      getTimeSlots(selectedDate).then(setTimeSlots);
    }
  }, [selectedDate]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="default" className="cursor-pointer">
          <Calendar className="mr-2 h-4 w-4" />
          {t.hero.cta.bookCall}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md sm:max-w-[425px] overflow-hidden">
        <DialogHeader>
          <DialogTitle>{t.bookCall.title}</DialogTitle>
          <DialogDescription>{t.bookCall.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4 overflow-hidden">
          <div className="space-y-3 overflow-hidden">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">
                {t.bookCall.selectDate}
              </label>
              <Button
                variant="link"
                size="sm"
                onClick={() => setShowMonthlyPopup(true)}
                className="h-auto p-0 text-xs text-blue-500 hover:text-blue-600"
              >
                {t.bookCall.showMoreDates}
                <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
            <ScrollArea className="w-full max-w-full rounded-md border border-border/50">
              <div className="flex gap-2 p-4 w-max">
                {availableDates.map((item) => (
                  <button
                    key={item.date}
                    onClick={() => setSelectedDate(item.date)}
                    className={`flex flex-col items-center rounded-lg border p-3 text-center transition-all w-[70px] shrink-0 ${
                      selectedDate === item.date
                        ? "border-blue-500 bg-blue-500/10 text-blue-500"
                        : "border-border bg-muted/30 hover:border-blue-500/50 hover:bg-muted"
                    }`}
                  >
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {item.day}
                    </span>
                    <span className="text-lg font-semibold">
                      {new Date(item.date).getDate()}
                    </span>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {new Date(item.date).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </span>
                  </button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          {selectedDate && timeSlots.length > 0 && (
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-medium">
                <Clock className="h-4 w-4" />
                {t.bookCall.selectTime}
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
            <Button className="w-full cursor-pointer" size="lg">
              {t.bookCall.confirmBooking}
            </Button>
          )}
        </div>
      </DialogContent>

      <Dialog open={showMonthlyPopup} onOpenChange={setShowMonthlyPopup}>
        <DialogContent className="max-w-lg sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{t.bookCall.monthlyCalendar}</DialogTitle>
            <DialogDescription>
              {t.bookCall.monthlyDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 overflow-hidden">
            <div className="grid grid-cols-7 gap-2">
              {[
                t.bookCall.days.sun,
                t.bookCall.days.mon,
                t.bookCall.days.tue,
                t.bookCall.days.wed,
                t.bookCall.days.thu,
                t.bookCall.days.fri,
                t.bookCall.days.sat,
              ].map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-medium text-muted-foreground p-2"
                >
                  {day}
                </div>
              ))}
              {Array.from({ length: 35 }, (_, i) => {
                const dayNumber = i - 2; // Assuming month starts on Wednesday
                const isValidDay = dayNumber > 0 && dayNumber <= 31;
                const dateStr = isValidDay
                  ? `2025-01-${String(dayNumber).padStart(2, "0")}`
                  : null;
                const isAvailable =
                  dateStr && availableDates.some((d) => d.date === dateStr);

                return (
                  <Button
                    key={i}
                    disabled={!isAvailable}
                    variant={
                      selectedDate === dateStr && isAvailable
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => {
                      if (dateStr && isAvailable) {
                        setSelectedDate(dateStr);
                        setShowMonthlyPopup(false);
                      }
                    }}
                    className={`aspect-square h-auto p-2 text-sm ${
                      !isValidDay
                        ? "border-transparent bg-transparent hover:bg-transparent"
                        : isAvailable
                        ? selectedDate === dateStr
                          ? "bg-blue-500 hover:bg-blue-600"
                          : "hover:border-blue-500/50"
                        : "opacity-40"
                    }`}
                  >
                    {isValidDay ? dayNumber : ""}
                  </Button>
                );
              })}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
}
