import nopost from "../assets/images/nopost.svg"



const NoPost = () => {
  return (
    <div className="w-full mx-auto mt-10 md:mt-0 lg:mt-0">
      <div className="w-full h-[300px] flex flex-col justify-center items-center">
        <img className="w--[300px] h-full" src={nopost} alt="" />
        <h2 className="text-3xl mulish text-red-600 font-black text-center">
          <span className="text-[#4A72FF]">Sorry,</span> No posts found ! <span className="text-[#4A72FF]">!</span> !
        </h2>
      </div>
    </div>
  );
};

export default NoPost;
