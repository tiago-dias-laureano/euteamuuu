"use client";
import { useRouter } from "next/navigation";

type PlanCardProps = {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
};

export default function PlanCard({
  name,
  price,
  features,
  isPopular,
}: PlanCardProps) {
  const { push } = useRouter();
  function handleClickButton(id: number) {
    push(`/auth/${id}`);
  }
  return (
    <div
      className={`flex flex-col justify-between bg-[#2A3445] p-8 rounded-lg shadow-lg ${
        isPopular ? "border-2 border-red-500" : ""
      } transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-2xl`}
      style={{ minHeight: "400px" }}
    >
      {isPopular && (
        <div className="bg-red-500 text-white text-xs px-3 py-1 rounded-full self-start mb-4">
          Mais Popular
        </div>
      )}
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <div>
          <p className="text-xl text-red-500 font-bold ">{price}</p>
          <p className="text-xs mb-4">pagamento único</p>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-400 text-sm">
              <span className="text-green-400 mr-2">✔</span> {feature}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => {
          const id = isPopular ? 1 : 0;
          handleClickButton(id);
        }}
        className="bg-red-500 text-white mt-6 py-2 px-4 rounded-lg"
      >
        Assine agora
      </button>
    </div>
  );
}
