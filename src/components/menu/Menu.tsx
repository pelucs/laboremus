import { List, X } from "phosphor-react";

interface MenuProps{
  activeMenu: boolean;
  setActiveMenu: (newState: boolean) => void;
}

export default ({ setActiveMenu, activeMenu }: MenuProps) => {

  const handleActiveMenu = () => {
    document.documentElement.scrollTop = 0;
    setActiveMenu(!activeMenu);
  }

  return(
    <div className="block md:hidden">
      <button             
        title="Pesquisar"
        onClick={handleActiveMenu}
        className="p-1 text-white transition-colors hover:text-gray-200 
        hover:bg-gray-700 focus:bg-gray-700 outline-none rounded"
      >
        {
          activeMenu ? (
            <X
              size={23}
              className="text-orange-500"
            />
          ) :(
            <List
              size={23}
            />
          )
        }
      </button>
    </div>
  );
}