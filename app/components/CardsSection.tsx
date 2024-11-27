import { LuFormInput, LuPencil, LuShare2, LuStar } from "react-icons/lu";
import { chooseYourPlan, customizeYourPage, register, shareTheLove } from "../utils/descriptionCards";
import Card from "./Card";

export default function CardsSection() {
  return (
    <section className="container mx-auto">
      <div className="mb-6">
        <h2 className="text-3xl text-center mb-4 font-bold text-white">
          Como funciona o euteamuuu?
        </h2>
        <p className="text-base text-center mb-6 text-gray-400">
          Crie uma página exclusiva para celebrar o amor de vocês!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        {/* Etapa 1 */}
        <Card
          Icon={LuPencil}
          title="1. Registre-se"
          description={register}
          className="rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
        />

        {/* Etapa 2 */}
        <Card
          Icon={LuStar}
          title="2. Escolha seu plano"
          description={chooseYourPlan}
          className="rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
        />

        {/* Etapa 3 */}
        <Card
          Icon={LuFormInput}
          title="3. Personalize sua página"
          description={customizeYourPage}
          className="rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
        />

        {/* Etapa 4 */}
        <Card
          Icon={LuShare2}
          title="4. Compartilhe o amor"
          description={shareTheLove}
          className="rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
        />
      </div>
    </section>
  );
}
