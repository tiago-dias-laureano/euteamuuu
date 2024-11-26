import { IconType } from "react-icons";
import { LuPencil } from "react-icons/lu";

type Props = {
  title: string;
  description: string;
  Icon: IconType
};

export default function Card({ Icon, title, description }: Props) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="icon bg-[#BF2F32] p-4 rounded-full">
        <Icon size={38} />
      </div>
      
      <div className="text-xl font-bold mt-4">{ title }</div>
      <p className="mt-2 text-sm text-gray-300">{ description }</p>
    </div>
  )
}
