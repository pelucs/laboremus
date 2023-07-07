import { ApolloProvider } from "@apollo/client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { client } from "./lib/apollo";

import Routes from "./Routes";

export default () => {

  const { i18n } = useTranslation();

  //IDIOMA
  useEffect(() => {

    let availableLanguages = ["ptBR", "en", "es"]; //IDIOMAS DISPONÍVEIS

    let userLang = navigator.language, //CHECAR IDIOMA DO USUÁRIO
        formatUserLang = userLang === "pt-BR" ? "ptBR" : userLang, //FORMATAR IDIOMA CASO SEJA PORTUGUÊS
        langLocalStorage = localStorage.getItem("lang"); //CASO O USUÁRIO TENHA SETADO UM IDIOMA

    let checkAvailableLang = availableLanguages.includes(formatUserLang);

    if(langLocalStorage){
      i18n.changeLanguage(langLocalStorage); //CASO TENHA UM IDIOMA PRE SETADO
    } else{
      if(checkAvailableLang){ //CHECAR SE O IDIOMA DO USUÁRIO ESTÁ DISPONÍVEL
        localStorage.setItem("lang", formatUserLang); 
        i18n.changeLanguage(formatUserLang);
      } else{ //CASO NÃO ESTEJA DISPONÍVEL, IRÁ SETAR O IDIOMA PADRÃO (pt-BR)
        localStorage.setItem("lang", "ptBR");
        i18n.changeLanguage("ptBR");
      }
    }
  }, []);

  return(
    <ApolloProvider client={client}>
      <Routes/>
    </ApolloProvider>
  );
}