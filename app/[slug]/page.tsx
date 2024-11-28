"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import supabase from "../supabase";

export default function QRCode() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeElapsed = () => {
      const startDate = new Date("2023-02-26T00:00:00");
      const now = new Date();

      const currentDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      );

      const totalMilliseconds = currentDate.getTime() - startDate.getTime();
      const totalDays = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));
      const totalMonths = Math.floor(totalDays / 30.44);
      const totalYears = Math.floor(totalMonths / 12);

      // Calculando horas, minutos e segundos restantes desde a última meia-noite
      const hoursSinceMidnight = now.getHours();
      const minutesSinceHour = now.getMinutes();
      const secondsSinceMinute = now.getSeconds();

      setTimeElapsed({
        years: totalYears,
        months: totalMonths % 12,
        days: totalDays % 30,
        hours: hoursSinceMidnight,
        minutes: minutesSinceHour,
        seconds: secondsSinceMinute,
      });
    };

    calculateTimeElapsed();

    // Atualizar a cada minuto
    const interval = setInterval(calculateTimeElapsed, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    async function listFiles() {
      try {
        const { data, error } = await supabase.storage.from("euteamuu").list();
        if (error) {
          console.error("Erro ao listar arquivos:", error);
        } else if (data.length > 0) {
          const urls = await Promise.all(
            data.map(async (file) => {
              const { data: response, error: urlError } = await supabase.storage
                .from("euteamuu")
                .createSignedUrl(file.name, 3000);

              if (urlError) {
                console.error("Erro ao gerar URL assinada:", urlError);
                return null;
              }
              return response.signedUrl;
            })
          );

          setImageUrls(urls.filter((url) => url !== null) as string[]);
        }
      } catch (err) {
        console.error("Erro inesperado:", err);
      } finally {
        setIsLoading(false);
      }
    }

    listFiles();
  }, []);

  useEffect(() => {
    const heartContainer = document.getElementById("heart-container")!;

    function createHeart() {
      const emojis = ["🥰", "❤️"];
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = "2s";
      heart.style.fontSize = Math.random() * 3 + "rem";

      heartContainer.appendChild(heart);

      setTimeout(() => heart.remove(), 3000);
    }

    const interval = setInterval(createHeart, 200);
    setTimeout(() => clearInterval(interval), 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        id="heart-container"
        className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-50"
      ></div>

      {isLoading ? (
        <>Carregando...</>
      ) : (
        <div className="bg-gradient-to-b from-[#1E2637] via-[#232A42] to-[#1E2637] min-h-screen text-white">
          <div className="logo flex justify-center pt-4">
            <Image
              src="/logo.svg"
              alt="euteamuuu logo"
              width={200}
              height={100}
            />
          </div>

          <main className="container max-w-3xl mx-auto mt-4 text-center">
            <div className="text-2xl mb-2 text-[#BF2F32] font-bold">
              Tiago & Raiane
            </div>
            <div className=" rounded-xl">
              {imageUrls.length > 0 ? (
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 5000 }}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={1}
                >
                  {imageUrls.map((url, index) => (
                    <SwiperSlide key={index}>
                      <SwiperSlide key={index}>
                        <div className="flex justify-center items-center p-4 md:p-0">
                          <Image
                            src={url}
                            alt={`Foto ${index + 1}`}
                            className="rounded-xl shadow-md"
                            width={400}
                            height={300}
                            objectFit="cover"
                          />
                        </div>
                      </SwiperSlide>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="text-gray-400">Nenhuma imagem disponível</div>
              )}
            </div>

            <div className="pt-6 font-bold text-xl lg:text-2xl">
              Compartilhando momentos juntos há
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mt-2 p-4">
              {[
                { label: "Anos", value: timeElapsed.years },
                { label: "Meses", value: timeElapsed.months },
                { label: "Dias", value: timeElapsed.days },
                { label: "Horas", value: timeElapsed.hours },
                { label: "Minutos", value: timeElapsed.minutes },
                { label: "Segundos", value: timeElapsed.seconds },
              ].map((counter, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-[#1E2637] border shadow-[0px_-2px_8px_1px_#BF2F32] border-[#BF2F32] p-2 rounded-lg "
                >
                  <h3 className="text-2xl font-bold text-[#BF2F32]">
                    {counter.value}
                  </h3>
                  <p className="text-sm">{counter.label}</p>
                </motion.div>
              ))}
            </div>

            <p>
              Eu dedico essa página a pessoa que eu mais amo nesse mundo! A
              Raianinha gameplays. A melhor coisa que me aconteceu no ano de
              2023 foi ter te conhecido no dia 23/02/2023. Eu amo você muitão e
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
