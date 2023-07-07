import { useEffect } from "react";
import Employees from "./Employees";
import Resale from "./Resale";

export default () => {

  useEffect(() => {
    document.title = "Seja Revendedor - Indústria Laboremus";
  }, []);

  return(
    <div className="mt-20 pb-10 md:pb-20">
      <div className="px-5 md:px-7">
        <div className="mt-20 md:mt-10 flex flex-col md:flex-row">
          <Employees/>
          <Resale/>
        </div>
      </div>
    </div>
  );
}