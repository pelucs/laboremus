import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import Menu from '../menu/Menu';
import MenuContent from '../menu/MenuContent';
import Language from '../Language';
import SubHeader from './SubHeader';
import Search from '../Search';

export default () => {

  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  return(
    <>
      <div className="w-full fixed top-0 left-0 z-40">
        <div className="w-full h-16 px-5 md:px-7 bg-black flex items-center 
        justify-between z-40 border-b border-gray-500">
          <Link to="/">
            <img 
              src={logo} 
              alt="Logo Laboremus"
              className="w-[120px] md:w-[150px]"
            />
          </Link>

          <div className="flex items-center gap-4">
            <Search/>
            <Language/>
            <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
          </div>

        </div>

        <SubHeader/>
      </div>

      <MenuContent activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
    </>
  );
}