import CardsSection from "../components/CardsSection";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Phone from "../components/Phone";

export default function LP() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#1E2637] via-[#232A42] to-[#1E2637] p-4 md:p-0 ">
        <header className="md:h-screen flex container justify-center mx-auto flex-col md:mb-100">
          <div className="flex md:flex-row flex-col items-center">
            <div className="space-y-8 md:w-[55%]">
              <Logo />

              <h1 className="text text-3xl md:text-4xl text-center md:text-left font-bold text-[#BF2F32]">
                Uma nova maneira de dizer: Eu te amo! 🥰
              </h1>
              <div className="description text-center md:text-left text-gray-200 mt-4">
                Crie uma página exclusiva para celebrar o amor de vocês!
                Cadastre-se agora e tenha acesso a uma página personalizada com
                uma linha do tempo especial e totalmente customizável, um
                contador que registra os dias, meses e anos juntos, lembretes e
                notificações de momentos importantes, além de um QR Code para
                compartilhar essa experiência única com seu parceiro.
                <br />
                <br />
                Ah, e não pense que é só para declaração de amor não, hein! Aqui
                você pode dedicar aos aniversariantes, amigos e muito mais.
                Temos personalização de tema para cada ocasião especial.
              </div>
            </div>

            <Phone />
          </div>

          <button className="bg-gradient-to-r from-red-500 to-[#BF2F32] p-4 rounded-lg text-lg mt-8 hover:opacity-90 transition-opacity duration-300">
            Crie agora o seu <strong>euteamuuu ❤️</strong>
          </button>
        </header>

        <CardsSection />
        <Footer />
      </div>
    </>
  );
}
