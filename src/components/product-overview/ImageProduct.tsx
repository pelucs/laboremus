import classNames from "classnames";
import { FilePdf, ImageSquare } from "phosphor-react";
import { useEffect, useState } from "react";
import { IProducts } from "../../types";
import { useTranslation } from "react-i18next";

interface ImageProductProps{
  product: IProducts
}

export default ({ product }: ImageProductProps) => {

  const { t } = useTranslation();
  const [index, setIndex] = useState<number>(0);
  const [src, setSrc] = useState<string>(product.image[0].url);

  useEffect(() => {
    setSrc(product.image[0].url);
  }, [product]);

  return(
    <div className="w-full h-fit flex flex-col items-center justify-between overflow-hidden">
      <div className="w-64 md:w-96 h-[600px] md:h-[650px] bg-zinc-300 rounded-bl-full rounded-br-full
      absolute left-1/2 -top-16 -translate-x-1/2 -z-10"/>

      <div className="mt-40 md:mt-0 w-full flex flex-col items-center justify-center relative">
        <img src={src} className="w-full scale-150 md:scale-100 md:w-3/4" loading="lazy"/>

        <div className="grid grid-cols-4 gap-3 absolute -bottom-28 md:-bottom-10 z-20">
          {product.image.slice(0, 4).map((image, i) => (
            <button 
              key={i} 
              onClick={() => {
                setSrc(image.url);
                setIndex(i);
              }}
              className={classNames("z-10 w-6 h-6 bg-black flex items-center justify-center rounded-full relative after:content-[''] after:block after:w-3 after:h-3 after:rounded-full after:-translate-x-1/2 after:-translate-y-1/2 after:absolute after:top-1/2 after:left-1/2 after:z-50", {
                "after:bg-orange-500": index === i,
                "after:bg-transparent": index !== i
              })}
            />
          ))}
        </div>
      </div>

      <div className="mt-52 md:mt-0 w-full flex items-center justify-between px-5 md:px-7">
        {product.manual ? (
          <a 
            target="_blank" 
            className="button"
            href={product.manual.url} 
          >
            <FilePdf size={24} className="text-orange-500"/>
            
            {t("baixar-manual")}
          </a>
        ) : (
          <></>
        )}

        {product.folder ? (
          product.folder.length > 0 ? (
            <a 
              target="_blank" 
              className="button"
              href={product.folder[0]?.url} 
            >
              <ImageSquare size={24} className="text-orange-500"/>
              
              {t("baixar-folheto")}
            </a>
          ) : (
            <div/>
          )
        ) : (
          <div/>
        )}
      </div>
    </div>
  );
}