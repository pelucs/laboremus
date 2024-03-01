import { useState } from "react";
import { useTranslation } from "react-i18next";

interface ImageProductProps{
  images: { url: string }[]
}

export default ({ images }: ImageProductProps) => {

  const { t } = useTranslation();
  const [src, setSrc] = useState<string>(images[0].url);

  return(
    <div className="sticky top-40 flex flex-col gap-4">
      <div className="w-full h-[550px] flex items-center justify-center overflow-hidden rounded-md bg-zinc-200">
        <img src={src}/>
      </div>

      <div className="grid grid-cols-5 md:grid-cols-6 gap-2 p-2">
        {images.map(image => (
          <button
            key={image.url}
            onClick={() => setSrc(image.url)}
            className="w-20 h-20 rounded bg-zinc-200 flex items-center justify-center"
          >
            <img src={image.url}/>
          </button>
        ))}
      </div>
    </div>
  );
}