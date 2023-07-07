import loading from '../assets/loading.png';

export default () => {
  return(
    <div className="w-screen h-screen flex items-center justify-center">
      <img src={loading} className="animate-pulse w-[100px] duration-75"/>
    </div>
  );
}