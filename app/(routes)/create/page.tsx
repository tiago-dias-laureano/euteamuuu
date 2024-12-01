"use client";
import { useState } from "react";
import Logo from "@/app/components/Logo";
import SpotifySearch from "@/app/components/SpotifySearch";

interface Song {
  id: string;
  name: string;
  artists: { name: string }[];
}

export default function Auth() {
  const [step, setStep] = useState(1);
  const [celebrationType, setCelebrationType] = useState("");
  const [plan, setPlan] = useState("basic");
  const [names, setNames] = useState({ name1: "", name2: "" });
  const [startDate, setStartDate] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleSongSelection = (song: Song) => {
    setSelectedSong(song);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);

      if (plan === "basic" && photos.length + files.length > 5) {
        alert("O plano básico permite até 5 fotos apenas.");
        return;
      }

      setPhotos((prevPhotos) => [...prevPhotos, ...files]);
    }
  };

  const removePhoto = (index: number) => {
    const updatedPhotos = [...photos];
    updatedPhotos.splice(index, 1);
    setPhotos(updatedPhotos);
  };

  return (
    <div className="bg-gradient-to-b h-screen from-[#1E2637] via-[#232A42] to-[#1E2637] p-4 md:p-0 ">
      <div className="flex justify-center pt-4">
        <Logo />
      </div>

      <div className="max-w-xl mx-auto mt-8 bg-[#2A3445] p-6 rounded-lg shadow-lg">
        {/* Barra de Progresso */}
        <div className="flex justify-between mb-10">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                step >= num
                  ? "bg-[#BF2F32] text-white"
                  : "bg-transparent text-[#BF2F32] border-[#BF2F32]"
              }`}
            >
              <span>{num}</span>
            </div>
          ))}
        </div>

        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold text-center">
              Qual é a celebração?
            </h2>
            <div className="flex justify-between mt-4 gap-4">
              <button
                onClick={() => setCelebrationType("relationship")}
                className={`w-1/2 p-4 bg-[#BF2F32] text-white rounded-md ${
                  celebrationType === "relationship"
                    ? "bg-opacity-90"
                    : "bg-opacity-70"
                }`}
              >
                Relacionamento
              </button>
              <button
                onClick={() => setCelebrationType("birthday")}
                className={`w-1/2 p-4 bg-[#BF2F32] text-white rounded-md ${
                  celebrationType === "birthday"
                    ? "bg-opacity-90"
                    : "bg-opacity-70"
                }`}
              >
                Aniversário
              </button>
            </div>
            <div className="mt-4">
              <button
                onClick={handleNextStep}
                className="w-full p-4 bg-[#BF2F32] text-white rounded-md"
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold text-center">
              Escolha o Plano
            </h2>
            <div className="flex justify-between mt-4 gap-4">
              <button
                onClick={() => setPlan("basic")}
                className={`w-1/2 p-4 bg-[#BF2F32] text-white rounded-md ${
                  plan === "basic" ? "bg-opacity-90" : "bg-opacity-70"
                }`}
              >
                Básico (até 5 fotos)
              </button>
              <button
                onClick={() => setPlan("advanced")}
                className={`w-1/2 p-4 bg-[#BF2F32] text-white rounded-md ${
                  plan === "advanced" ? "bg-opacity-90" : "bg-opacity-70"
                }`}
              >
                Avançado (sem limite de fotos)
              </button>
            </div>
            <div className="mt-4">
              <button
                onClick={handleNextStep}
                className="w-full p-4 bg-[#BF2F32] text-white rounded-md"
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold text-center">
              {celebrationType === "relationship"
                ? "Nome do Casal e Data do Início do Relacionamento"
                : "Nome do Aniversariante e Data de Nascimento"}
            </h2>

            {celebrationType === "relationship" ? (
              <>
                <div className="mt-4">
                  <label className="block">Nome do primeiro parceiro:</label>
                  <input
                    type="text"
                    value={names.name1}
                    onChange={(e) =>
                      setNames({ ...names, name1: e.target.value })
                    }
                    className="w-full p-2 mt-2 border border-gray-300 bg-transparent rounded-md"
                  />
                </div>
                <div className="mt-4">
                  <label className="block">Nome do segundo parceiro:</label>
                  <input
                    type="text"
                    value={names.name2}
                    onChange={(e) =>
                      setNames({ ...names, name2: e.target.value })
                    }
                    className="w-full p-2 mt-2 border border-gray-300 bg-transparent rounded-md"
                  />
                </div>
                <div className="mt-4">
                  <label className="block">
                    Data do início do relacionamento:
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full p-2 mt-2 border border-gray-300 bg-transparent rounded-md"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="mt-4">
                  <label className="block">Nome do aniversariante:</label>
                  <input
                    type="text"
                    value={names.name1}
                    onChange={(e) =>
                      setNames({ ...names, name1: e.target.value })
                    }
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mt-4">
                  <label className="block">Data de nascimento:</label>
                  <input
                    type="date"
                    value={birthdayDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setBirthdayDate(e.target.value)
                    }
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                  />
                </div>
              </>
            )}

            <div className="mt-4">
              <button
                onClick={handleNextStep}
                className="w-full p-4 bg-[#BF2F32] text-white rounded-md"
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-xl font-semibold text-center">
              Carregar Fotos
            </h2>
            <div className="mt-4">
              <label className="block">Escolha as fotos</label>
              <input
                type="file"
                multiple={plan === "advanced"}
                onChange={handleFileChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded-md"
              />
              {plan === "basic" && photos.length >= 5 && (
                <div className="text-red-500 mt-2">
                  Você atingiu o limite de 5 fotos para o plano básico.
                </div>
              )}

              <div className="mt-4 grid grid-cols-3 gap-4">
                {photos.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt="preview"
                      className="w-full h-32 object-cover rounded-md"
                    />
                    <button
                      onClick={() => removePhoto(index)}
                      className="absolute top-0 right-0 p-2 text-white bg-red-500 rounded-full"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <button
                onClick={handleNextStep}
                className="w-full p-4 bg-[#BF2F32] text-white rounded-md"
              >
                Próximo
              </button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div>
            <h2 className="text-xl font-semibold text-center">
              Escolha uma música do Spotify
            </h2>
            <SpotifySearch onSelectSong={handleSongSelection} />

            {selectedSong && (
              <div className="mt-4">
                <p>
                  <strong>Música Selecionada:</strong> {selectedSong.name}
                </p>
                <p>
                  <strong>Artista:</strong>{" "}
                  {selectedSong &&
                    selectedSong.artists
                      .map((artist) => artist.name)
                      .join(", ")}
                </p>
              </div>
            )}

            <div className="mt-4">
              <button
                onClick={handleNextStep}
                className="w-full p-4 bg-[#BF2F32] text-white rounded-md"
              >
                Próximo
              </button>
            </div>
          </div>
        )}

        {step === 6 && (
          <div>
            <h2 className="text-xl font-semibold text-center">
              Resumo do Pacote
            </h2>
            <div className="mt-4">
              <p>
                <strong>Celebrando:</strong>{" "}
                {celebrationType === "relationship"
                  ? "Relacionamento"
                  : "Aniversário"}
              </p>
              <p>
                <strong>Plano:</strong>{" "}
                {plan === "basic" ? "Básico - R$ 24,90" : "Avançado - R$ 34,90"}
              </p>
              <p>
                <strong>Nome do Casal:</strong> {names.name1} & {names.name2}
              </p>
              <p>
                <strong>Data de Início (Relacionamento):</strong> {startDate}
              </p>
              <p>
                <strong>Música selecionada: </strong> {selectedSong!.name} -{" "}
                {selectedSong!.artists[0].name}
              </p>
              <p>
                <strong>Fotos Enviadas:</strong> {photos.length}
              </p>
            </div>
            <div className="mt-4">
              <button className="w-full p-4 bg-[#BF2F32] text-white rounded-md">
                Ir para pagamento
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
