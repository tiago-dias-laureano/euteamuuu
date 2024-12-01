"use client";
import React from "react";
import Header from "../components/Header";
import HeartAnimation from "../components/HeartAnimation";
import TimeElapsed from "../components/TimeElapsed";
import SwiperGallery from "../components/SwiperGallery";
import { useTimeElapsed } from "../hooks/useTimeElapsed";
import { useImageUrls } from "../hooks/useImageUrls";

export default function QRCode() {
  const timeElapsed = useTimeElapsed("2023-02-26T00:00:00");
  const { imageUrls, isLoading } = useImageUrls("euteamuu");

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen text-white">
          Carregando...
        </div>
      ) : (
        <div className="bg-gradient-to-b from-[#1E2637] via-[#232A42] to-[#1E2637] min-h-screen text-white">
          <HeartAnimation />
          <Header />
          <main className="container max-w-3xl mx-auto mt-4 text-center">
            <h1 className="text-2xl mb-2 text-[#BF2F32] font-bold">
              Tiago & Raiane
            </h1>
            <SwiperGallery imageUrls={imageUrls} />
            <TimeElapsed timeElapsed={timeElapsed} />
            <p className="pt-4 px-4">
              Eu dedico essa página à pessoa que eu mais amo nesse mundo! A
              Raianinha gameplays. A melhor coisa que me aconteceu no ano de
              2023 foi ter te conhecido no dia 26/02/2023. Eu amo você muitão e
              não tenho nem como expressar tamanho sentimento. Espero que
              possamos ser felizes juntos. Te amo!
            </p>
          </main>
          <footer className="mt-14 text-center">
            <p className="text-sm text-gray-400">
              © 2024 euteamuuu. Todos os direitos reservados.
            </p>
          </footer>
        </div>
      )}
    </>
  );
}
