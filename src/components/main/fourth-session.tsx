"use client"
import React, { useState, ChangeEvent, FormEvent } from "react"
import axios from "axios"

export default function FourthSession() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const response = await axios.post("../../api/enviar-dados", formData)
      console.log("Resposta do servidor:", response.data)
    } catch (error) {
      console.error("Erro ao enviar dados:", error)
    }

    // Limpar o formulário após o envio
    setFormData({
      nome: "",
      email: "",
      telefone: "",
    })
  }

  return (
    <div className="w-full flex items-start justify-between mt-48 max-lg:flex-col max-md:items-center">
      <div className="flex flex-col gap-4 max-w-lg max-md:w-full max-md:items-center max-md:text-center">
        <h2 className="font-semibold text-4xl max-md:max-w-sm">
          Cadastre-se para receber mais informações.
        </h2>
        <p className="font-medium text-lg max-w-sm">
          Fique ligado no que tem de melhor no Mercado Financeiro.
        </p>
      </div>
      <div className="w-[564px] h-[384] border rounded-3xl border-[#4D5358] bg-[#131516] p-14 max-xl:max-w-xl max-lg: max-w-lg max-md:max-w-md max-md:mt-10">
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="nome"
            id="name"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome"
            className="border-2 border-[#4D5358] bg-[#222729] rounded-md p-2 max-md:p-4 text-white"
          />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Seu melhor e-mail"
            value={formData.email}
            onChange={handleChange}
            className="border-2 border-[#4D5358] bg-[#222729] rounded-md p-2 max-md:p-4 text-white"
          />

          <input
            type="tel"
            name="telefone"
            id="telefone"
            placeholder="Celular"
            value={formData.telefone}
            onChange={handleChange}
            className="border-2 border-[#4D5358] bg-[#222729] rounded-md p-2 max-md:p-4 text-white"
          />

          <button
            type="submit"
            className="bg-[#19C819] border border-[#FAFAFA] p-4 rounded-md text-lg font-semibold text-[#131313] hover:opacity-80"
          >
            QUERO ME INSCREVER
          </button>
        </form>
      </div>
    </div>
  )
}
