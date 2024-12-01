"use client";

import { useEffect } from "react";
import TestimonialsCard from "./TestimonialsCard";

export default function TestimonialsList() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".animate-scroll-left, .animate-scroll-right"
    );

    // Alterando o tipo do evento para MouseEvent
    const pauseAnimation = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      target.style.animationPlayState = "paused";
    };

    const resumeAnimation = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      target.style.animationPlayState = "running";
    };

    // Usar addEventListener diretamente
    elements.forEach((el) => {
      // Quando você usa addEventListener diretamente, tipagem do tipo de evento deve ser 'Event'
      el.addEventListener("mouseenter", (event) =>
        pauseAnimation(event as MouseEvent)
      );
      el.addEventListener("mouseleave", (event) =>
        resumeAnimation(event as MouseEvent)
      );
    });

    // Cleanup da remoção de eventos
    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", (event) =>
          pauseAnimation(event as MouseEvent)
        );
        el.removeEventListener("mouseleave", (event) =>
          resumeAnimation(event as MouseEvent)
        );
      });
    };
  }, []);

  const data = [
    {
      text: "Criar uma página com momentos únicos do nosso relacionamento foi incrível! Ele não esperava por algo tão significativo e especial.",
      name: "Tiago e Raiane",
    },
    {
      text: "Amei cada detalhe! Adicionei nossas músicas favoritas e uma mensagem carinhosa. Ele ficou emocionado ao ver como me esforcei por nós.",
      name: "Larissa e João",
    },
    {
      text: "Foi tão fácil e divertido personalizar a página com nossas melhores lembranças! O resultado ficou lindo e cheio de amor.",
      name: "Ana e Pedro",
    },
    {
      text: "Surpreendi a Marina com uma página cheia de fotos e mensagens que representam nosso amor. Ver o sorriso dela valeu a pena!",
      name: "Lucas e Marina",
    },
    {
      text: "Usei a plataforma para o aniversário de namoro, e a reação dele foi mágica. Disse que nunca recebeu algo tão especial.",
      name: "Beatriz e Henrique",
    },
    {
      text: "Com a Euteamuuu, criei um presente personalizado que deixou o Gabriel encantado. Foi perfeito para comemorar nosso aniversário.",
      name: "Gabriela e Gabriel",
    },
    {
      text: "Reuni nossos momentos mais especiais em uma página única. A reação dela me mostrou que cada segundo dedicado valeu muito!",
      name: "Ricardo e Sofia",
    },
    {
      text: "A experiência foi tão boa que já recomendei para meus amigos! É uma forma criativa e emocionante de mostrar o quanto alguém é importante para você.",
      name: "Carla e Bruno",
    },
    {
      text: "Transformei nossa história de amor em uma página cheia de memórias. Ele disse que foi o melhor presente que já recebeu.",
      name: "Amanda e Felipe",
    },
    {
      text: "A página ficou linda! Adorei poder colocar detalhes como datas importantes e músicas que marcaram nossa jornada.",
      name: "Letícia e Rodrigo",
    },
    {
      text: "Foi emocionante reviver tantos momentos lindos ao montar a página. Ele ficou sem palavras quando viu!",
      name: "Juliana e Gustavo",
    },
    {
      text: "Personalizar cada detalhe da nossa página foi uma forma de reviver nosso amor. Adoramos o resultado!",
      name: "Isabela e Thiago",
    },
    {
      text: "Criei a página para minha mãe como forma de agradecimento. Ela se emocionou muito com a surpresa. Super recomendo!",
      name: "Lucas e Dona Maria",
    },
    {
      text: "Minha namorada ficou tão feliz com a página personalizada. É algo que vamos guardar para sempre!",
      name: "Rafael e Luana",
    },
    {
      text: "Com Euteamuuu, consegui expressar meu amor de um jeito único. Adorei poder personalizar tudo com carinho.",
      name: "Fernanda e Diego",
    },
    {
      text: "A plataforma tornou fácil e especial criar algo único para meu parceiro. Ele disse que nunca imaginou algo tão pessoal.",
      name: "Camila e André",
    },
    {
      text: "Não sabia o que dar de presente de 3 anos para a minha namorada... Logo vi um anúncio no Instagram, cliquei, acessei e tcham! Tinha um presente incrivel para a Renata",
      name: "Renata e Francisco",
    },
    {
      text: "Nunca fui criativo com presentes, mas a euteamuuu me ajudou muito com o site personalizado e os items da lojinha do amor.",
      name: "Julio",
    },
  ];

  return (
    <div className="overflow-hidden py-10 container mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Depoimentos</h2>
        <p className="text-gray-400 text-sm">
          Veja o que nossos usuários estão falando sobre a{" "}
          <strong className="text-[#BF2F32]">euteamuuu</strong>
        </p>
      </div>
      <div className="flex gap-4 animate-scroll-left">
        {data.splice(0, 9).map((data) => (
          <TestimonialsCard key={data.text} name={data.name} text={data.text} />
        ))}
      </div>

      <div className="flex gap-4 mt-6 animate-scroll-right">
        {data.map((data) => (
          <TestimonialsCard key={data.text} name={data.name} text={data.text} />
        ))}
      </div>
    </div>
  );
}
