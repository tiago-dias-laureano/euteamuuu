"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Phone from "./Phone";
import { useRouter } from "next/navigation";

export default function Hero() {
  const { push } = useRouter();

  const phrases = ["Eu te amo! 🥰", "Parabéns! 🎁", "Eu te adoro! 💖"];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    let deletingTimeout: NodeJS.Timeout;
    let currentText = "";
    const fullText = phrases[currentPhraseIndex];
    let charIndex = 0;

    const type = () => {
      if (charIndex < fullText.length) {
        currentText += fullText[charIndex];
        setDisplayedText(currentText);
        charIndex++;
        typingTimeout = setTimeout(type, 200);
      } else {
        deletingTimeout = setTimeout(() => deleteText(), 2000);
      }
    };

    const deleteText = () => {
      if (currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        setDisplayedText(currentText);
        deletingTimeout = setTimeout(deleteText, 50);
      } else {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    };

    type();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(deletingTimeout);
    };
  }, [currentPhraseIndex]);

  return (
    <header className="min-h-screen flex flex-col justify-center container mx-auto">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="space-y-8 md:w-[50%]">
          <Logo />

          <h1 className="text text-3xl md:text-4xl text-center md:text-left font-bold text-[#BF2F32]">
            Uma nova maneira de dizer: <span>{displayedText}</span>
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
