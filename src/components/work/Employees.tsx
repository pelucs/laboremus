import { useTranslation } from "react-i18next";

interface EmployeesTypes{
  name: string;
  cargo: string;
  contact: string;
  email: string;
  state: string;
}

export default () => {

  const { t } = useTranslation();

  const employees: EmployeesTypes[] = [
    {
      name: "Dayse Felix",
      cargo: t("vendas-internas"),
      contact: "+55 (83) 98223-7322",
      email: "dayse.felix@laboremus.com.br",
      state: "MA • CE • PE • PI • MG • RN"
    },
    {
      name: "Dean Alves",
      cargo: t("vendas-externas"),
      contact: "+55 (83) 98224-6538",
      email: "dean.alves@laboremus.com.br",
      state: "PB • RN"
    },
    {
      name: "Mirella Suemy",
      cargo: t("vendas-internas"),
      contact: "+55 (83) 98832-0887",
      email: "mirella.suemy@laboremus.com.br",
      state: `PB • AL • SE • ${t("demais-regioes")}`
    },
    {
      name: "Marcelo Ribeiro",
      cargo: t("vendas-internas"),
      contact: "+55 (83) 98654-6821",
      email: "marcelo.ribeiro@laboremus.com.br",
      state: ""
    },
    {
      name: "Patrícia Moreno",
      cargo: t("vendas-internas"),
      contact: "+55 (83) 98832-6230",
      email: "patricia.moreno@laboremus.com.br",
      state: "BA • ES"
    },
    {
      name: "Germínia Souza",
      cargo: t("fabrica-duvidas"),
      contact: "+55 (83) 99615-5209",
      email: "germinia.santos@laboremus.com.br",
      state: ""
    }
  ];

  return(
    <div className="w-full md:w-[460px] p-5 flex flex-col items-center md:items-start md:border-r 
    border-gray-200 border-opacity-50">
      <strong className="text-2xl md:text-4xl text-bold uppercase">
        {t("entre-em-contato")}
      </strong>

      <div className="mt-5 md:mt-10 flex flex-col gap-10">
        {employees.map(item => (
          <div key={item.name} className="flex flex-col items-center md:items-start gap-2">
            <strong className="text-lg md:text-xl font-bold">
              {item.name}
            </strong>

            <div className="text-base md:text-lg"> 
              {item.cargo}
            </div>

            <div className="text-base md:text-lg"> 
              {item.contact}
            </div>

            <div className="text-base md:text-lg">
              {item.email}
            </div>

            <div className="text-base md:text-lg">
              {item.state}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}