import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { CaretRight, Spinner } from "phosphor-react";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateConsultResaleMutation } from "../../graphql/generated";

import classNames from "classnames";

//SCHEMA DO FORMULÁRIO 
const formSchema = z.object({
  name: z.string().nonempty("*Informe seu nome"),
  email: z.string().nonempty("*Informe seu email")
  .email("*Informe o email corretamente"),
  contact: z.string().nonempty("*Informe seu contato"),
  message: z.string(),
  cep: z.string().nonempty("*Informe o seu CEP")
});

type FormTypes = z.infer<typeof formSchema>;

export default () => {

  const [createResale, { loading }] = useCreateConsultResaleMutation();

  const { t } = useTranslation();
  const [address, setAddress] = useState<string>("");

  const { register, handleSubmit, formState: { errors } } = useForm<FormTypes>({
    resolver: zodResolver(formSchema)
  });

  //ENVIANDO  A MENSAGEM
  const handleSubmitForm = async (data: FormTypes) => {
    await createResale({
      variables: {
        name: data.name,
        email: data.email,
        address: address,
        contact: data.contact,
        message: data.message
      }
    })
    .then(() => {
      let text = encodeURIComponent(`Olá, tudo bem?
    
*Mensagem*: ${data.message}

*Nome*: ${data.name}
*Email*: ${data.email}
*Telefone*: ${data.contact}
*Endereço*: ${address}`);
      
      window.open(`https://wa.me/5583998270016?text=${text}`, "_blank");

      window.location.reload();
    })
  }

  //PEGANDO O ENDEREÇ DO USUÁRIO
  const getAddressByCep = async (value: string) => {
    if(value.length >= 8){
      let valueF = value.replace("-", "");

      await fetch(`https://viacep.com.br/ws/${valueF}/json/`)
      .then(res => res.json())
      .then(res => {
        setAddress(`${res.logradouro}, ${res.bairro} - ${res.localidade}`);
      })
    }
  }

  return(
    <div className="mt-5 md:mt-0 flex-1">
      <div className="py-3 md:px-5 border-opacity-50 flex flex-col items-center md:items-start">
        <strong className="text-2xl font-bold uppercase">
          TRABALHE CONOSCO
        </strong>

        <p className="text-gray-300 text-center">
          Preencha o formulário e em breve entraremos em contato com você com todo o direcionamento necessário.
        </p>
      </div>

      <form onSubmit={handleSubmit(handleSubmitForm)} className="w-full mt-5 md:px-5 pb-5 flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">{t("nome")}</label>
            
            <input 
              id="name"
              placeholder="Insira seu nome"
              className="input" 
              {...register("name")}
            />

            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">{t("email")}</label>
            
            <input 
              id="email"
              placeholder="Insira seu email"
              className="input" 
              {...register("email")}
            />

            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact">{t("contato")}</label>
            
            <input 
              id="contact"
              placeholder="Insira seu contato"
              className="input" 
              {...register("contact")}
            />

            {errors.contact && (
              <span className="text-red-500 text-sm">
                {errors.contact.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="cep">CEP</label>
            
            <input 
              id="cep"
              maxLength={9}
              placeholder="Insira seu CEP"
              className="input appearance-none" 
              {...register("cep")}
              onBlur={e => getAddressByCep(e.currentTarget.value)}
            />

            {errors.cep && (
              <span className="text-red-500 text-sm">
                {errors.cep.message}
              </span>
            )}

            {address && (
              <span className="w-full max-w-sm text-ellipsis whitespace-nowrap overflow-hidden text-zinc-500">
                {address}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message">{t("mensagem")}</label>

          <textarea 
            id="message"
            placeholder="Escreva uma mensagem"
            className="w-full h-40 bg-gray-100 p-5 outline-none border border-transparent 
            focus:border-black transition-all resize-none"
            {...register("message")}
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className={classNames("button", {
            "opacity-50": loading,
            "opacity-100": !loading
          })}
        >
          {loading ? (
            <>
              <Spinner size={18} className="animate-spin"/>

              Carregando
            </>
          ) : (
            <>
              Enviar formulário

              <CaretRight size={24} className="text-orange-500"/>
            </>
          )}
        </button>
      </form>
    </div>
  );
}