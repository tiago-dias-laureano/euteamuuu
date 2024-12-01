"use client";

import { useState } from "react";
import Logo from "../components/Logo";
import supabase from "../supabase";

export default function AuthForm() {
  const [isRegister, setIsRegister] = useState(false); // Alternar entre registro e login
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      if (isRegister) {
        const { data: user, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        });

        if (signUpError) throw signUpError;

        const { error: profileError } = await supabase
          .from("profiles")
          .insert([{ id: user?.user?.id, name }]);

        if (profileError) throw profileError;

        setSuccess(
          "Conta criada com sucesso! Verifique seu e-mail para confirmar."
        );
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInError) throw signInError;
        setSuccess("Login realizado com sucesso!");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message || "Algo deu errado.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1E2637] via-[#232A42] to-[#1E2637] p-4">
      <div className="max-w-md w-full bg-[#2A3445] p-6 rounded-lg shadow-lg">
        <div className=" flex justify-center py-4">
          <Logo size="s" />
        </div>
        <h2 className="text-xl font-semibold text-center text-white">
          {isRegister ? "Registrar" : "Entrar"}
        </h2>
        <form onSubmit={handleSubmit} className="mt-6">
          {isRegister && (
            <div className="mb-4">
              <label className="block text-white">Nome</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 mt-2 bg-transparent border border-gray-300 rounded-md text-white"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-white">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 mt-2 bg-transparent border border-gray-300 rounded-md text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 mt-2 bg-transparent border border-gray-300 rounded-md text-white"
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {success && <p className="text-green-500 text-sm mt-2">{success}</p>}
          <button
            type="submit"
            className={`w-full p-3 mt-4 text-white bg-[#BF2F32] rounded-md ${
              loading ? "opacity-70" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Processando..." : isRegister ? "Registrar" : "Entrar"}
          </button>
        </form>
        <div className="mt-4 text-center text-white">
          {isRegister ? (
            <>
              Já possui uma conta?{" "}
              <button
                type="button"
                onClick={() => setIsRegister(false)}
                className="text-[#BF2F32] underline"
              >
                Entre
              </button>
            </>
          ) : (
            <>
              Não possui uma conta?{" "}
              <button
                type="button"
                onClick={() => setIsRegister(true)}
                className="text-[#BF2F32] underline"
              >
                Registre-se
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
