import classNames from "classnames";

import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import banner from '/aviso.png';

export default () => {

  const [activeModal, setActiveModal] = useState<boolean>(false);

  return(
    <div className={classNames("w-full h-screen fixed inset-0 z-50 transition-all", {
      "visible opacity-1 duration-100": activeModal,
      "invisible opacity-0 delay-700 duration-500": !activeModal
    })}>
      <div 
        onClick={() => setActiveModal(false)}
        className="w-full h-screen bg-black/50 fixed inset-0"
      />

      <div className={classNames("rounded w-full md:w-3/4 bg-white z-50 absolute transition-all delay-700 duration-500", {
        "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-1 delay-700 duration-500": activeModal,
        "top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 duration-500": !activeModal
      })}>
        <button 
          onClick={() => setActiveModal(false)}
          className="p-1 rounded text-orange-500 bg-black absolute top-3 right-3"
        >
          <X
            size={20}
            weight="bold"
          />
        </button>

        <Link 
          to="/linha-agricola" 
          onClick={() => setActiveModal(false)} 
        >
          <img src={banner} className="w-full h-full rounded-md"/>
        </Link>
      </div>
    </div>
  );
}