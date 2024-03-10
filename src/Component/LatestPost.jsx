import axios from "axios";
import { useEffect, useState } from "react";
import LatestCard from "./LatestCard";
import LatestLoader from "./LatestLoader";
import { usePortalContext } from "./Context";

const LatestPost = () => {
  const [latestData, setLatestData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {criteriaRef, setLatestNews} = usePortalContext()
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
      );
      const data = res.data;
      setLatestNews(data.length)
      setLatestData(data);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchPost();
  }, []);
  return (
    <div id="criteria" ref={criteriaRef} className="my-12">
      <div className="text-center mb-4 lg:mb-12">
        <h2 className="mulish font-black text-black text-4xl mb-6">
          Latest Posts
        </h2>
        <p className="inter font-normal text-base md:text-lg lg:text-xl">
          Yes, you can run unit tests and view the results directly within the
          app. The <br />
          integrated testing features allow for a streamlined .
        </p>
      </div>
      {loading ? (
        <LatestLoader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
          {latestData.map((post, index) => (
            <LatestCard post={post} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestPost;
