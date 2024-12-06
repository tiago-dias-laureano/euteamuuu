"use client";

import { useEffect } from "react";
import TestimonialsCard from "./TestimonialsCard";

import { feedbacks } from "../utils/feedbacks";

export default function TestimonialsList() {
  return (
    <div className="overflow-hidden py-10 container mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Depoimentos</h2>
        <p className="text-gray-400 text-sm">
          Veja o que nossos usuários estão falando sobre a{" "}
          <strong className="text-[#BF2F32]">euteamuuu</strong>
        </p>
      </div>

      <div className="flex gap-4 animate-scroll-left">
        {feedbacks.slice(0, 4).map((feedback) => (
          <TestimonialsCard
            key={feedback.text}
            name={feedback.name}
            text={feedback.text}
          />
        ))}
      </div>
    </div>
  );
}
