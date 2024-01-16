"use client";
import { useState } from "react";
import { useForm, SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type FormData = {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
};

export default function FourthSession() {
  const [formDataList, setFormDataList] = useState<FormData[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    try {
      setIsSubmitting(true);

      data.phoneNumber = data.phoneNumber.replace(/\D/g, "");

      data.phoneNumber = data.phoneNumber.replace(
        /(\d{2})(\d{5})(\d{4})/,
        "($1) $2-$3",
      );

      const response = await fetch("api/cadastro-mercado-financeiro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Dados enviados com sucesso!");
        setFormDataList((prevList) => [...prevList, data]);
        reset();

        setTimeout(() => {
          setIsSubmitting(false);
          toast.success("Cadastro realizado com sucesso!");
        }, 1000);
      } else {
        console.error("Falha ao enviar dados!");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  const onError: SubmitErrorHandler<FormData> = (errors) => console.log(errors);

  const formatPhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const inputValue = input.value.replace(/\D/g, "");

    if (inputValue.length <= 11) {
      input.value = inputValue.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else {
      input.value = inputValue
        .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
        .substring(0, 15);
    }
  };

  return (
    <div className="mt-48 flex w-full items-start justify-between max-xl:gap-24 max-md:mt-32 max-md:flex-col max-md:items-center">
      <div className="flex max-w-lg flex-col gap-4 max-xl:max-w-96 max-md:w-full max-md:items-center max-md:text-center">
        <h2 className="text-4xl font-bold max-md:max-w-sm">
          Cadastre-se para receber mais informações.
        </h2>
        <p className="max-w-sm text-lg font-medium">
          Fique ligado no que tem de melhor no Mercado Financeiro.
        </p>
      </div>

      <div className="h-[384] w-[564px] max-w-lg rounded-3xl border border-[#4D5358] bg-[#131516] p-14 max-md:mt-10  max-md:w-full max-md:p-12 max-sm:p-10">
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <input
            {...register("name", {
              required: "Nome e obrigatório",
              minLength: {
                value: 10,
                message: "Nome precisa ter pelo menos 10 caracteres",
              },
            })}
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            className="rounded-md border-2 border-[#4D5358] bg-[#222729] p-2 text-white max-md:p-4"
          />
          {errors?.name && (
            <span className="-mt-4 text-red-500">{errors.name.message}</span>
          )}

          <input
            {...register("email", {
              required: "E-mail e obrigatório",
              minLength: {
                value: 10,
                message: "E-mail precisa ter pelo menos 10 caracteres",
              },
            })}
            type="email"
            name="email"
            id="email"
            placeholder="Seu melhor e-mail"
            className="rounded-md border-2 border-[#4D5358] bg-[#222729] p-2 text-white max-md:p-4"
          />
          {errors?.email && (
            <span className="-mt-4 text-red-500">{errors.email.message}</span>
          )}

          <input
            {...register("phoneNumber", {
              required: "Telefone é obrigatório",
              minLength: {
                value: 10,
                message: "Telefone precisa ter no mínimo 10 números",
              },
              maxLength: {
                value: 15,
                message: "Telefone deve ter no máximo 15 caracteres",
              },
            })}
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Celular"
            className="rounded-md border-2 border-[#4D5358] bg-[#222729] p-2 text-white max-md:p-4"
            onChange={formatPhoneNumber}
          />
          {errors?.phoneNumber && (
            <span className="-mt-4 text-red-500">
              {errors.phoneNumber.message}
            </span>
          )}
          <button
            type="submit"
            className="rounded-md border-2 border-[#FAFAFA] bg-[#19C819] p-4 text-lg font-semibold text-[#131313]  transition-all delay-150 duration-300 ease-in-out hover:bg-transparent hover:text-[#FAFAFA]"
          >
            {isSubmitting
              ? "Finalizando sua inscrição..."
              : "QUERO ME INSCREVER"}
          </button>
        </form>
      </div>
    </div>
  );
}
