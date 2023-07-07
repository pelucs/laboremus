interface VideoSettingsProps{
  videoId: string;
}

export default ({ videoId }: VideoSettingsProps) => {
  return(
    <div className="w-full h-full max-w-[560px] max-h-[315px] mt-10 flex items-center justify-center">
      <iframe 
        className="w-full h-[200px] md:h-[315px]"
        src={`https://www.youtube.com/embed/${videoId}`} 
        title="YouTube video player"
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}