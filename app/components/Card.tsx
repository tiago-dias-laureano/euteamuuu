import { IconType } from "react-icons";

type Props = {
  title: string;
  description: string;
  Icon: IconType
};

export default function Card({ Icon, title, description }: Props) {
  return (
<div className="flex flex-col items-center text-center bg-[#2A3445] p-8 rounded-lg shadow-[0_4px_10px_#BF2F32]">
  <div className="icon bg-[#BF2F32] p-4 rounded-full mb-4">
    <Icon size={38} className="text-white" />
  </div>

  <div className="text-xl font-extrabold text-white mb-2">{title}</div>
  <p className="text-sm text-gray-400 leading-relaxed">
    {description}
  </p>
</div>


  )
}
