"use client";
import { useState, useEffect } from "react";

const calculateTimeElapsed = (startDate: string) => {
  const now = new Date();
  const start = new Date(startDate);

  const totalMilliseconds = now.getTime() - start.getTime();
  const totalDays = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));
  const totalMonths = Math.floor(totalDays / 30.44);
  const totalYears = Math.floor(totalMonths / 12);

  return {
    years: totalYears,
    months: totalMonths % 12,
    days: totalDays % 30,
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  };
};

export const useTimeElapsed = (startDate: string) => {
  const [timeElapsed, setTimeElapsed] = useState(
    calculateTimeElapsed(startDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed(startDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return timeElapsed;
};
