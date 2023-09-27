import { useTranslation } from "react-i18next";
import { employees } from "../../utils/employees";

export default () => {

  const { t } = useTranslation();

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