"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import supabase from "../supabase";

export default function QRCode() {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function listFiles() {
      try {
        const { data, error } = await supabase.storage.from("euteamuu").list();
        console.log(data);

        if (error) {
          console.error("Erro ao listar arquivos:", error);
        } else if (data.length > 0) {
          const filePath = data[0].name;
          const { data: response, error: urlError } = await supabase.storage
            .from("euteamuu")
            .createSignedUrl(filePath, 3000);

          if (urlError) {
            console.error("Erro ao gerar URL assinada:", urlError);
          } else {
            setImageUrl(response.signedUrl);
          }
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
          <div className="logo flex justify-center pt-8">
            <Image
              src="/logo.svg"
              alt="euteamuuu logo"
              width={200}
              height={100}
            />
          </div>

          <main className="container max-w-3xl mx-auto mt-4 text-center">
            <div className="text-2xl mb-4 text-[#BF2F32] font-bold">
              João & Maria
            </div>
            <div className="relative mx-auto rounded-lg shadow-lg">
              {imageUrl && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={"/example.jpeg"}
                    alt="Foto de casal"
                    className="rounded-lg hidden md:block mx-auto shadow-md"
                    width={500}
                    height={200}
                    objectFit="cover"
                  />
                  <Image
                    src={"/example.jpeg"}
                    alt="Foto de casal"
                    className="rounded-lg md:hidden mx-auto shadow-md"
                    width={300}
                    height={200}
                    objectFit="cover"
                  />
                </motion.div>
              )}

              <div className="pt-10 font-bold text-xl lg:text-2xl">
                Compartilhando momentos juntos há
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-2 p-4">
                {[
                  { label: "Anos", value: "4" },
                  { label: "Meses", value: "1" },
                  { label: "Dias", value: "25" },
                  { label: "Minutos", value: "25" },
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
            </div>

            <div className="mt-8">
              <p className="text-lg italic text-gray-300">
                &quot;Oi amor, passando pra falar que te amo uma galáxia! Que
                daqui 20, 30 anos possamos voltar aqui e nosso tempo juntos
                continue sendo contado!&quot;
              </p>
              <p className="mt-4 font-bold text-[#BF2F32]">Te amo demais ❤️</p>
            </div>
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
