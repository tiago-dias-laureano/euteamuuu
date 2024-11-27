import { IconType } from "react-icons";

type Props = {
  title: string;
  description: string;
  Icon: IconType;
  className?: string; // Adicionado para receber estilos personalizados
};

export default function Card({ Icon, title, description, className }: Props) {
  return (
    <div className={`flex flex-col items-center text-center bg-[#2A3445] p-8 rounded-lg shadow-md border border-gray-700 hover:shadow-2xl transition-shadow duration-300 ${className}`}>
      <div className="icon bg-[#BF2F32] p-4 rounded-full mb-4">
        <Icon size={38} className="text-white" />
      </div>

      <div className="text-xl font-extrabold text-white mb-2">{title}</div>
      <p className="text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
