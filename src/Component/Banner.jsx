import img from "../assets/images/bgbanner.png";
import { usePortalContext } from "./Context";

const Banner = () => {
  
  const bgStyle = {
    backgroundImage: `url(${img})`,
  };

  const { setSearchQuery, query, setQuery, setNoPost, readCount, totalNews, latestNews } = usePortalContext();

  const handleSearch = () => {
    if(query === ""){
      setNoPost(true)
      setSearchQuery("")
      setQuery("")
    }else{
      setNoPost(false)
      setSearchQuery(query.toLowerCase());
      setQuery("")
    }
    // setSearchQuery(query);
  };
  const handleChange = (e) =>{
    let value = e.target.value;
    setQuery(value)
  }
  // (e) => setQuery(e.target.value.toLocaleLowerCase())
  return (
    <section>
      <div
        className="bg-[#161621]  bg-cover lg:bg-contain bg-no-repeat w-full bg-bottom p-3 md:p-10 lg:p-20 rounded-xl lg:rounded-[32px] md:rounded-3xl lg:flex md:flex justify-center gap-20 items-center"
        style={bgStyle}
      >
        <div className="space-y-2 lg:space-y-8 lg:w-1/2 w-full">
          <h2 className="mulish text-4xl lg:text-6xl font-extrabold lg:font-black text-white lg:leading-[86px]">
            Welcome to the <br />
            <span className="bg-gradient-to-r from-40% from-[#797DFC] to-[#494c7e96] to-80% text-transparent bg-clip-text">
              React
            </span>
            Portal
          </h2>
          <p className="text-[#FFFFFFCC] mulish text-xl font-medium">
            Share your favorite opinion and win and wp forum coffee mug! On the
            search field you can search By &#34;all / ALL&#34; also.
          </p>
          <label className="input input-bordered h-auto flex items-center lg:gap-2 rounded-full">
            <input
              value={query}
              onChange={handleChange}
              id="inputField"
              type="text"
              className="grow lg:py-5 lg:pl-2"
              placeholder="Search by category"
            />
            <button
              id="searchBtn"
              onClick={handleSearch}
              className="btn lg:px-8 md:px-4 md:py-0 rounded-3xl bg-[#797DFC] flex justify-center items-center md:text-lg lg:text-xl text-white hover:bg-white hover:text-[#797DFC]"
            >
              Search
            </button>
          </label>
        </div>
        <div className="bg-white p-5 lg:p-11 w-full lg:w-1/2 rounded-xl md:rounded-3xl lg:rounded-3xl space-y-2 mt-5 lg:mt-0">
          <li className="list-none flex justify-between items-center">
            <p className="mulish font-semibold text-black text-2xl">
              Total News
            </p>
            <p className="mulish font-semibold text-black text-2xl">{totalNews}</p>
          </li>
          <li className="list-none flex justify-between items-center">
            <p className="mulish font-semibold text-black text-2xl">Category</p>
            <p className="mulish font-semibold text-black text-2xl">{3}</p>
          </li>
          <li className="list-none flex justify-between items-center">
            <p className="mulish font-semibold text-black text-2xl">Readed</p>
            <p className="mulish font-semibold text-black text-2xl">{readCount}</p>
          </li>
          <li className="list-none flex justify-between items-center">
            <p className="mulish font-semibold text-black text-2xl">
            Latest
            </p>
            <p className="mulish font-semibold text-black text-2xl">{latestNews}</p>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Banner;
