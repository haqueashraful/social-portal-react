import { usePortalContext } from "./Context";
import DataCard from "./DataCard";
import NoPost from "./NoPost";
import ReadCard from "./ReadCard";
import Loader from "./Loader";

const DiscussSection = () => {
  const { isLoading, noPost, newsRef } = usePortalContext();
  return (
    <div id="news" ref={newsRef} className=" my-16">
      <div className="text-center mb-4 lg:mb-12  space-y-10">
        <h2 className="mulish font-black text-black text-4xl mb-6">
          Let’s Discuss
        </h2>
        <p className="inter font-normal text-base md:text-lg lg:text-xl">
          Yes, you can run unit tests and view the results directly within the
          app. The <br />
          integrated testing features allow for a streamlined.
        </p>
      </div>
      <div className={`${isLoading ? "block" : "hidden"} text-center`}>
        <Loader/>
      </div>
      <div className={`${isLoading ? "hidden": "block"}`}>
        {noPost ? (
          <div className="block">
            <NoPost />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 w-full md:gap-2 lg:gap-6">
            <div className="lg:col-span-5 md:col-span-4 text-center">
              <DataCard />
            </div>
            <div
              className={`lg:col-span-3 md:col-span-2 space-y-5 ${
                isLoading ? "hidden" : "block"
              }`}
            >
              <ReadCard />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscussSection;
