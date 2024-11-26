"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import Image from "next/image";
import supabase from "./supabase";

export default function Home() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já está logado
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        // Se a sessão existir, redireciona para o dashboard
        setIsAuthenticated(true);
        router.push("/dashboard"); // Redireciona para o dashboard
      }
    };

    checkSession(); // Chama a função ao carregar a página
  }, [router]);

  const handleLoginClick = () => {
    // Abre o modal para login/registro
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // Fecha o modal
    setIsModalOpen(false);
  };

  const handleLogin = async (email, password) => {
    // Tente fazer o login aqui
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Erro ao fazer login:", error.message);
    } else {
      console.log("Usuário logado com sucesso:", data);
      // Após o login, redireciona para o dashboard
      router.push("/dashboard");
    }
  };

  const handleRegister = async (email, password) => {
    // Tente fazer o registro aqui
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.error("Erro ao registrar usuário:", error.message);
    } else {
      console.log("Usuário registrado com sucesso:", data);
      // Após o registro, redireciona para o dashboard
      router.push("/dashboard");
    }
  };

  const data = [
    {
      text: "Plano 1",
      label: "QRCode, 5 fotos e música.",
      value: "simples",
      desc: `Por apenas R$ 24,90, você pode criar uma página exclusiva com até 5 fotos, adicionar uma música especial direto do YouTube e garantir que sua página fique guardada para sempre no nosso site. Tudo isso para eternizar o seu amor de forma única! 💖`,
    },
    {
      text: "Plano 2",
      label:
        "QRCode, Galeria de fotos, música, linha do tempo e descontos na lojinha do amor.",
      value: "avancado",
      desc: `Eleve a experiência do seu amor por apenas R$ 34,90! Tenha acesso a uma página ilimitada de fotos, adicione sua música preferida do YouTube, crie uma linha do tempo personalizada, adicione lembretes de marcos importantes, inclua um vídeo emocionante de declaração e aproveite muitas outras novidades incríveis que estão por vir. Transforme o ordinário em algo extraordinário! 🌟`,
    },
  ];

  return (
    <>
      <div id="heart-container"></div>
      <div className="bg-gradient-to-b from-[#1E2637] via-[#232A42] to-[#1E2637] md:h-screen">
        <div className="container max-w-[1280px] mx-auto px-4">
          <nav className="pt-8">
            <div className="logo flex justify-center">
              <Image
                src="/logo.svg"
                alt="euteamuuu logo"
                width={200}
                height={100}
              />
            </div>
          </nav>

          <section className="py-14 flex flex-col items-center px-2 md:px-0 text-center">
            <h1 className="md:text-6xl text-3xl font-bold text-[#BF2F32]">
              Uma nova maneira de dizer: Eu te amo! 🥰
            </h1>

            <p className="text-white text-lg md:text-xl max-w-[800px] mt-4 md:mt-10">
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
              className="bg-gradient-to-r from-red-500 to-pink-500 px-8 md:px-20 py-4 md:py-6 mt-10 text-white font-bold rounded-md hover:from-red-400 hover:to-pink-400 transition-all"
              onClick={handleLoginClick} // Ao clicar, abre o modal de login
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
                  className="relative bg-[#232A42] p-6 rounded-lg shadow-[0px_-2px_20px_2px_#BF2F32] border border-[#BF2F32]/20 flex flex-col justify-between h-full"
                >
                  {index === 1 && (
                    <div className="absolute top-0 right-0 bg-[#BF2F32] text-white text-xs font-bold py-1 px-4 rounded-bl-lg">
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
                    onClick={handleLoginClick} // Abre o modal de login
                  >
                    Escolher esse!
                  </button>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Modal de Login/Registro */}
      {isModalOpen && (
        <div className="modal fixed top-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 bg-white z-50">
          <div className="modal-content flex items-center justify-center">
            <button onClick={handleCloseModal}>Fechar</button>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin(e.target.email.value, e.target.password.value);
              }}
            >
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="password"
                placeholder="Senha"
                required
              />
              <button type="submit">Entrar</button>
            </form>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRegister(e.target.email.value, e.target.password.value);
              }}
            >
              <button type="submit">Registrar</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
