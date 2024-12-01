"use client";
import Logo from "./Logo";
import Phone from "./Phone";
import { useRouter } from "next/navigation";

export default function Hero() {
  const { push } = useRouter();
  return (
    <header className="min-h-screen flex flex-col justify-center container mx-auto">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="space-y-8 md:w-[50%]">
          <Logo />

          <h1 className="text text-3xl md:text-4xl text-center md:text-left font-bold text-[#BF2F32]">
            Uma nova maneira de dizer: Eu te amo! 🥰
          </h1>

          <div className="description text-center md:text-left text-gray-200 mt-4">
            Crie uma página exclusiva para celebrar o amor de vocês! Personalize
            com uma linha do tempo especial, contador de dias juntos, lembretes
            de momentos importantes e um QR Code para compartilhar com quem você
            ama.
            <br />
            <br />
            Não é só para casais! Crie algo especial para aniversariantes,
            amigos ou qualquer pessoa importante na sua vida. 💝
          </div>

          <div className="mt-6 w-full">
            <button
              onClick={() => push("#prices")}
              className="w-full bg-gradient-to-r from-red-500 to-[#BF2F32] px-8 py-4 rounded-lg text-lg hover:opacity-90 transition-opacity duration-300"
            >
              Crie agora sua página especial ❤️
            </button>
          </div>
        </div>

        <Phone className="md:ml-10 lg:ml-20" />
      </div>
    </header>
  );
}
