import Image from "next/image";

import { LuFormInput, LuPencil, LuShare2, LuStar } from "react-icons/lu";

export default function LP() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#1E2637] via-[#232A42] to-[#1E2637] p-4 md:p-0 ">
        <header className="h-screen flex container justify-center mx-auto flex-col">
          <div className="flex md:flex-row flex-col items-center">
            <div className="space-y-8 md:w-[55%]">
              <div className="logo flex justify-center md:justify-start">
                <Image
                  src="/logo.svg"
                  alt="euteamuuu logo"
                  width={200}
                  height={100}
                />
              </div>
              <h1 className="text text-3xl md:text-4xl text-center md:text-left font-bold text-[#BF2F32]">
                Uma nova maneira de dizer: Eu te amo! 🥰
              </h1>
              <div className="description text-center md:text-left">
                Crie uma página exclusiva para celebrar o amor de vocês!
                Cadastre-se agora e tenha acesso a uma página personalizada com
                uma linha do tempo especial e totalmente customizável, um
                contador que registra os dias, meses e anos juntos, lembretes e
                notificações de momentos importantes, além de um QR Code para
                compartilhar essa experiência única com seu parceiro
                <br />
                <br />
                Ah, e não pense que é só para declaração de amor não hein! Aqui
                você pode dedicar aos aniversariantes, amigos e muito mais.
                Temos personalização de tema para cada ocasião especial.
              </div>
            </div>
            <div className="md:w-[45%] w-full">
              <Image
                src="/hero.png"
                alt="image example"
                layout="intrinsic"
                width={2500}
                height={2500}
                objectFit="contain" // Ajusta o tamanho dentro do container
              />
            </div>
          </div>
          <button className="bg-gradient-to-r from-red-500 to-[#BF2F32] p-4 rounded-lg text-lg">
            Crie agora o seu <strong>euteamuuu ❤️</strong>
          </button>
        </header>
        <section className="container mx-auto">
          <div className="mb-6 ">
            <h2 className="text-3xl text-center mb-4 font-bold">
              Como funciona o euteamuuu?
            </h2>
            <p className="text-base text-center mb-6">
              Crie uma página exclusiva para celebrar o amor de vocês!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {/* Etapa 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="icon bg-[#BF2F32] p-4 rounded-full">
                <LuPencil size={38} />
              </div>
              <div className="text-xl font-bold mt-4">1. Registre-se</div>
              <p className="mt-2 text-sm text-gray-300">
                Crie sua conta para começar a personalizar sua página especial.
                É simples e rápido.
              </p>
            </div>

            {/* Etapa 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="icon bg-[#BF2F32] p-4 rounded-full">
                <LuStar size={38} />
              </div>
              <div className="text-xl font-bold mt-4">2. Escolha seu plano</div>
              <p className="mt-2 text-sm text-gray-300">
                Opte pelo plano que mais combina com você: básico (QRCode, 5
                fotos e uma música) ou avançado (QRCode, Galeria de fotos,
                música/playlist, linha do tempo, mapa das estrelas e descontos
                na lojinha do amor.), cheio de funcionalidades incríveis.
              </p>
            </div>

            {/* Etapa 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="icon bg-[#BF2F32] p-4 rounded-full">
                <LuFormInput size={38} />
              </div>
              <div className="text-xl font-bold mt-4">
                3. Personalize sua página
              </div>
              <p className="mt-2 text-sm text-gray-300">
                Insira as informações desejadas, como fotos, mensagens, músicas,
                linha do tempo, datas especiais e muito mais, em poucos passos
                simples.
              </p>
            </div>

            {/* Etapa 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="icon bg-[#BF2F32] p-4 rounded-full">
                <LuShare2 size={38} />
              </div>
              <div className="text-xl font-bold mt-4">
                4. Compartilhe o amor
              </div>
              <p className="mt-2 text-sm text-gray-300">
                Espalhe o amor! Envie o link da sua página para a pessoa amada
                ou amigos ou compartilhe o QR Code personalizado com quem você
                ama.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
