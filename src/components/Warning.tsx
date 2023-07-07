import { useTranslation } from "react-i18next";

export default () => {

  const { t } = useTranslation();

  return(
    <div className="px-5 md:px-20 flex items-center justify-center mt-20 border-t border-gray-200/50">
      <strong className="flex-1 py-4 text-gray-300 text-center font-normal italic text-xs">
        *{t("sujeitas-a-mudanca")}
      </strong>
    </div>
  );
}