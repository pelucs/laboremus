import { useTranslation } from "react-i18next";

interface EmployeesTypes{
  name: string;
  cargo: string;
  contact: string;
  email: string;
  state: string;
}

export const employees: EmployeesTypes[] = [
  {
    name: "Dayse Felix",
    cargo: "Vendas internas",
    contact: "+55 (83) 98223-7322",
    email: "dayse.felix@laboremus.com.br",
    state: "MA • CE • PE • PI • MG • RN"
  },
  {
    name: "Dean Alves",
    cargo: "Vendas externas",
    contact: "+55 (83) 98224-6538",
    email: "dean.alves@laboremus.com.br",
    state: "PB • RN"
  },
  {
    name: "Mirella Suemy",
    cargo: "Vendas internas",
    contact: "+55 (83) 98832-0887",
    email: "mirella.suemy@laboremus.com.br",
    state: "PB • AL • SE • Demais regiões"
  },
  {
    name: "Marcelo Ribeiro",
    cargo: "Vendas internas",
    contact: "+55 (83) 98654-6821",
    email: "marcelo.ribeiro@laboremus.com.br",
    state: ""
  },
  {
    name: "Patrícia Moreno",
    cargo: "Vendas internas",
    contact: "+55 (83) 98832-6230",
    email: "patricia.moreno@laboremus.com.br",
    state: "BA • ES"
  },
  {
    name: "Germínia Souza",
    cargo: "Fábrica e dúvidas",
    contact: "+55 (83) 99615-5209",
    email: "germinia.santos@laboremus.com.br",
    state: ""
  },
  {
    name: "Paulino Gaia",
    cargo: "Representante",
    contact: "+55 (88) 99991-8891",
    email: "dmrepresentacoesce@gmail.com",
    state: "CE"
  },
  {
    name: "Almir Darley",
    cargo: "Representante",
    contact: "+55 (99) 98246-9336",
    email: "",
    state: "MA"
  },
  {
    name: "Silvio Oliveira",
    cargo: "Representante",
    contact: "+55 (94) 99163-8184",
    email: "",
    state: "PA"
  },
  {
    name: "Wellington Barros",
    cargo: "Representante",
    contact: "+55 (96) 98111-0074",
    email: "wb.repres@gmail.com",
    state: "AP"
  },
  {
    name: "Osvaldo da Silva",
    cargo: "Representante",
    contact: "+55 (92) 99147-3065",
    email: "",
    state: "AM"
  },
  {
    name: "Jouber Lacerda",
    cargo: "Representante",
    contact: "+55 (31) 99642-2388",
    email: "",
    state: "MG"
  },
];