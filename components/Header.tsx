import Image from "next/image";

const Header = () => {
  return (
    <div className=" h-[60px]  bg-purple px-4 lg:h-[80px] lg:px-0 border-b-4 border-">
      <div className=" flex items-center justify-center h-full ">
        
          <a href="/">
            <h1 className="text-4xl font-bold ">LeSearch</h1>
          </a>
        </div>
      </div>
   
  );
};

export default Header;
