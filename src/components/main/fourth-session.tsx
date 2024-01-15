"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

export default function FourthSession() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("../../api/enviar-dados", formData);
      console.log("Resposta do servidor:", response.data);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }

    // Limpar o formulário após o envio
    setFormData({
      nome: "",
      email: "",
      telefone: "",
    });
  };

  return (
    <div className="mt-48 flex w-full items-start justify-between max-xl:gap-24 max-md:mt-32 max-md:flex-col max-md:items-center">
      <div className="flex max-w-lg flex-col gap-4 max-xl:max-w-96 max-md:w-full max-md:items-center max-md:text-center">
        <h2 className="text-4xl font-semibold max-md:max-w-sm">
          Cadastre-se para receber mais informações.
        </h2>
        <p className="max-w-sm text-lg font-medium">
          Fique ligado no que tem de melhor no Mercado Financeiro.
        </p>
      </div>
      <div className="h-[384] w-[564px] max-w-lg rounded-3xl border border-[#4D5358] bg-[#131516] p-14 max-md:mt-10  max-md:w-full max-md:p-12 max-sm:p-10">
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="nome"
            id="name"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome"
            className="rounded-md border-2 border-[#4D5358] bg-[#222729] p-2 text-white max-md:p-4"
          />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Seu melhor e-mail"
            value={formData.email}
            onChange={handleChange}
            className="rounded-md border-2 border-[#4D5358] bg-[#222729] p-2 text-white max-md:p-4"
          />

          <input
            type="tel"
            name="telefone"
            id="telefone"
            placeholder="Celular"
            value={formData.telefone}
            onChange={handleChange}
            className="rounded-md border-2 border-[#4D5358] bg-[#222729] p-2 text-white max-md:p-4"
          />

          <button
            type="submit"
            className="rounded-md border border-[#FAFAFA] bg-[#19C819] p-4 text-lg font-semibold text-[#131313] hover:opacity-80"
          >
            QUERO ME INSCREVER
          </button>
        </form>
      </div>
    </div>
  );
}
