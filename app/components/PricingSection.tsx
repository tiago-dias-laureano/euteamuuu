import PlanCard from "./PlanCard";

export default function PricingSection() {
  const plans = [
    {
      name: "Básico",
      price: "R$ 24,90/mês",
      features: [
        "QRCode exclusivo",
        "Até 5 fotos na sua página",
        "Adicione uma música especial via YouTube",
        "Página armazenada para sempre no site",
        "Eternize seu amor de forma única! 💖",
      ],
    },
    {
      name: "Avançado",
      price: "R$ 34,90/mês",
      features: [
        "QRCode exclusivo",
        "Galeria ilimitada de fotos",
        "Adicione músicas do YouTube",
        "Linha do tempo personalizada",
        "Lembretes de datas importantes",
        "Vídeo de declaração emocionante",
        "Descontos na lojinha do amor",
        "Novidades incríveis em breve! 🌟",
      ],
      isPopular: true,
    },
  ];

  return (
    <section className="container mx-auto my-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Escolha o plano ideal para você</h2>
        <p className="text-gray-400 text-sm">
          Selecione o plano que melhor atende às suas necessidades e comece agora mesmo a celebrar o amor!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            name={plan.name}
            price={plan.price}
            features={plan.features}
            isPopular={plan.isPopular}
          />
        ))}
      </div>
    </section>
  );
}
