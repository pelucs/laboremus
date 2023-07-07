import { useEffect } from "react";
import Employees from "../work/Employees";
import Client from "./Client";

export default () => {

  useEffect(() => {
    document.title = "Onde comprar - Indústria Laboremus";
  }, []);

  return(
    <div className="mt-20 pb-10 md:pb-20">
      <div className="px-5 md:px-7">
        <div className="mt-20 md:mt-10 flex flex-col md:flex-row">
          <Employees/>
          <Client/>
        </div>
      </div>
    </div>
  );
}