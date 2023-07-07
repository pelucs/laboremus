import classNames from "classnames";
import { useEffect, useContext } from "react";  
import { ContextNotif } from "../contexts/ContextNotif";

export default () => {

  const { 
    activeNotif, setActiveNotification, 
    text, setText
  } = useContext(ContextNotif);

  useEffect(() => {
    setTimeout(() => {
      setActiveNotification(false);
      setText("");
    }, 3000);
  }, [activeNotif]);

  return(
    <div className={classNames("w-60 fixed right-5 z-50 p-4 bg-white border-l-4 border-orange-500 rounded duration-500 transition-all", {
      "top-5": activeNotif,
      "-top-full": !activeNotif
    })}>
      <strong className="uppercase break-words">
        {text}
      </strong>
    </div>
  );
}