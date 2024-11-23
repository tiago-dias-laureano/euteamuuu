"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react"; // Ajuste do import do motion
// import { useParams } from "next/navigation";

import aws from "aws-sdk";

const s3 = new aws.S3({
  endpoint: "https://s3.filebase.com",
  accessKeyId: "28BD0B72547222DA700D",
  secretAccessKey: "MAlJKjEgdFme3yE1GmpYMI5Hsaep1uKWxQXXiWy3",
  s3ForcePathStyle: true,
});

export default function QRCode() {
  // const { slug } = useParams(); // pegar o slug params
  const [imageUrl, setImageUrl] = useState(""); // Estado para guardar o URL da imagem

  useEffect(() => {
    async function getImgs() {
      const params = { Bucket: "euteamuuu" };

      try {
        const response = await s3.listObjectsV2(params).promise();
        console.log("Arquivos no bucket:", response);

        // Pegando o primeiro objeto do bucket como exemplo
        if (response.Contents && response.Contents.length > 0) {
          const fileKey = response.Contents[0].Key;
          const url = s3.getSignedUrl("getObject", {
            Bucket: "euteamuuu",
            Key: fileKey,
            Expires: 3600, // URL válida por 1 hora
          });
          console.log(url);
          setImageUrl(url); // Salvar o URL no estado
        }
      } catch (error) {
        console.error("Erro ao listar arquivos:", error);
      }
    }

    getImgs();
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#1E2637] via-[#232A42] to-[#1E2637] min-h-screen text-white">
      <div className="logo flex justify-center pt-8">
        <img src="/logo.svg" alt="euteamuuu logo" width={200} />
      </div>

      {/* Foto + Contadores */}
      <main className="container max-w-3xl mx-auto mt-10 text-center">
        <div className="text-[#BF2F32] font-bold text-4xl">Tiago & Raiane</div>
        <div className="relative mx-auto rounded-lg shadow-lg p-6">
          {/* Exibir a imagem dinâmica */}
          {imageUrl && (
            <img
              src={imageUrl} // Exibe o placeholder caso o URL ainda não esteja pronto
              alt="Foto de casal"
              className="rounded-lg mx-auto shadow-md"
            />
          )}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
            {/* Card de contadores */}
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
                className="bg-[#1E2637] border shadow-[0px_-2px_8px_1px_#BF2F32] border-[#BF2F32] p-3 rounded-lg "
              >
                <h3 className="text-2xl font-bold text-[#BF2F32]">
                  {counter.value}
                </h3>
                <p className="text-sm">{counter.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mensagem personalizada */}
        <div className="mt-8">
          <p className="text-lg italic text-gray-300">
            "Oi amor, passando pra falar que te amo uma galáxia! Que daqui 20,
            30 anos possamos voltar aqui e nosso tempo juntos continue sendo
            contado!"
          </p>
          <p className="mt-4 font-bold text-[#BF2F32]">Te amo demais ❤️</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-14 text-center">
        <p className="text-sm text-gray-400">
          © 2024 euteamuuu. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
