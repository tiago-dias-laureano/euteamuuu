"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

import Image from "next/image";
import supabase from "../supabase";

export default function QRCode() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    async function listFiles() {
      const { data, error } = await supabase.storage.from("euteamuu").list();

      if (error) {
        console.error("Erro ao listar arquivos:", error);
      } else {
        if (data.length > 0) {
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
      }
    }

    listFiles();
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#1E2637] via-[#232A42] to-[#1E2637] min-h-screen text-white">
      <div className="logo flex justify-center pt-8">
        <Image src="/logo.svg" alt="euteamuuu logo" width={200} height={100} />
      </div>

      <main className="container max-w-3xl mx-auto mt-10 text-center">
        <div className="text-[#BF2F32] font-bold text-4xl">Tiago & Raiane</div>
        <div className="relative mx-auto rounded-lg shadow-lg p-6">
          {imageUrl && (
            <>
              <Image
                src={imageUrl}
                alt="Foto de casal"
                className="rounded-lg hidden md:block mx-auto shadow-md"
                width={300}
                height={200}
                objectFit="cover"
              />
              <Image
                src={imageUrl}
                alt="Foto de casal"
                className="rounded-lg md:hidden mx-auto shadow-md"
                width={200}
                height={200}
                objectFit="cover"
              />
            </>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
            {[
              { label: "Anos", value: "4" },
              { label: "Meses", value: "1" },
              { label: "Dias", value: "25" },
              { label: "Minutos", value: "25" },
              { label: "Segundos", value: "25" },
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
            &quot;Oi amor, passando pra falar que te amo uma galáxia! Que daqui
            20, 30 anos possamos voltar aqui e nosso tempo juntos continue sendo
            contado!&quot;
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
  );
}
