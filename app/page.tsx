"use client";

import { useScroll } from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const data = [
    {
      text: "Plano 1",
      label: "QRCode, 5 fotos e música.",
      value: "simples",
      desc: `Por apenas R$ 19,90, você pode criar uma página exclusiva com até 5 fotos, adicionar uma música especial direto do YouTube e garantir que sua página fique guardada para sempre no nosso site. Tudo isso para eternizar o seu amor de forma única! 💖`,
    },
    {
      text: "Plano 2",
      label:
        "QRCode, Galeria de fotos, música, linha do tempo e descontos na lojinha do amor.",
      value: "avancado",
      desc: `Eleve a experiência do seu amor por apenas R$ 39,90! Tenha acesso a uma página ilimitada de fotos, adicione sua música preferida do YouTube, crie uma linha do tempo personalizada, adicione lembretes de marcos importantes, inclua um vídeo emocionante de declaração e aproveite muitas outras novidades incríveis que estão por vir. Transforme o ordinário em algo extraordinário! 🌟`,
    },
  ];
  return (
    <>
      <div className="bg-gradient-to-b from-[#1E2637] via-[#232A42] to-[#1E2637] md:h-screen">
        <motion.div style={{ scaleX: scrollYProgress }} />
        <div className="container max-w-[1280px] mx-auto px-4">
          <nav className="pt-8">
            <div className="logo flex justify-center">
              <Image src="/logo.svg" alt="euteamuuu logo" width={200} />
            </div>
          </nav>

          <section className="py-14 flex flex-col items-center px-2 md:px-0 text-center">
            <h1 className="md:text-5xl text-3xl font-bold text-[#BF2F32]">
              Uma nova maneira de dizer: Eu te amo! 🥰
            </h1>

            <p className="text-white text-lg max-w-[800px] mt-4">
              Crie uma página exclusiva para celebrar o amor de vocês!
              Cadastre-se agora e tenha acesso a uma página personalizada com
              uma linha do tempo especial e totalmente customizável, um contador
              que registra os dias, meses e anos juntos, lembretes e
              notificações de momentos importantes, além de um QR Code para
              compartilhar essa experiência única com seu parceiro. 💕
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-r from-red-500 to-pink-500 px-8 py-4 mt-10 text-white font-bold rounded-md hover:from-red-400 hover:to-pink-400 transition-all"
            >
              Crie agora o seu <strong>euteamuuu</strong>!
            </motion.button>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl text-center text-[#BF2F32] font-bold mb-8 ">
              Planos disponíveis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative bg-[#232A42] p-6 rounded-lg shadow-[0px_-2px_20px_5px_#BF2F32] border border-[#BF2F32]/20 flex flex-col justify-between h-full"
                >
                  {index === 1 && (
                    <div className="absolute top-0 right-0 bg-[#BF2F32] text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
                      Mais escolhido
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl text-white font-bold">
                      {plan.label}
                    </h3>
                    <p className="text-white text-sm mt-4">{plan.desc}</p>
                  </div>
                  <button
                    type="button"
                    className="bg-[#BF2F32] px-4 py-2 mt-6 text-white rounded-md hover:bg-[#BF2F32]/80 shadow-lg"
                  >
                    Escolher esse!
                  </button>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
