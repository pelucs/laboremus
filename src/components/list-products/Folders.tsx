import { useGetFoldersQuery } from "../../graphql/generated";
import { File } from "phosphor-react";
import { useEffect, useState } from "react";

interface FoldersProps{
  category: string;
}

export default ({ category }: FoldersProps) => {

  const { data } = useGetFoldersQuery();
  const [folder, setFolder] = useState<string>();

  useEffect(() => {
    const checkFolder = async () => {
      if (data && data.folders) {
        for (const currentFolder of data.folders) {
          if (currentFolder.category === category) {
            setFolder(currentFolder.folder?.url);
            return; 
          }
        }
      }
    };

    checkFolder();
  }, [data, category]);


  return(
    <div>
      <a 
        target="_blank"
        href={folder} 
        className="py-1 px-3 border flex items-center gap-2 text-white border-orange-500 bg-black"
      >
        <File className="w-4 h-4 text-orange-500 relative -top-[1px]"/>

        Folder
      </a>    
    </div> 
  )
}