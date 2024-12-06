export default function TestimonialsCard({
  text,
  name,
}: {
  text: string;
  name: string;
}) {
  return (
    <div className="bg-[#2A3445] text-white p-6 rounded-lg shadow-md min-w-[400px] max-w-[400px]">
      <div>{text}</div>
      <div>
        <div className="font-bold mt-4">{name}</div>
        <p className="text-sm">Juntos há: 2 anos</p>
      </div>
    </div>
  );
}
