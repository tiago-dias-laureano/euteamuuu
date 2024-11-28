import React from "react";
import { motion } from "motion/react";

interface TimeElapsedProps {
  timeElapsed: {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const TimeElapsed: React.FC<TimeElapsedProps> = ({ timeElapsed }) => {
  const counters = [
    { label: "Anos", value: timeElapsed.years },
    { label: "Meses", value: timeElapsed.months },
    { label: "Dias", value: timeElapsed.days },
    { label: "Horas", value: timeElapsed.hours },
    { label: "Minutos", value: timeElapsed.minutes },
    { label: "Segundos", value: timeElapsed.seconds },
  ];

  return (
    <div>
      <h2 className="pt-6 font-bold text-xl lg:text-2xl">
        Compartilhando momentos juntos há
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mt-2 p-4">
        {counters.map((counter, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#1E2637] border shadow-[0px_-2px_8px_1px_#BF2F32] border-[#BF2F32] p-2 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-[#BF2F32]">
              {counter.value}
            </h3>
            <p className="text-sm">{counter.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimeElapsed;
