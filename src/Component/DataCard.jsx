import axios from "axios";
import { useEffect, useState } from "react";
import DiscussCardDesign from "./DiscussCardDesign";
import { usePortalContext } from "./Context";
import { toast } from "react-toastify";

const DataCard = () => {
  const [postData, setPostData] = useState([]);
  const { setIsLoading, searchQuery, setNoPost, setTotalNews } = usePortalContext();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let apiUrl;
  
      if (!searchQuery || searchQuery === "all") {
        apiUrl = "https://openapi.programming-hero.com/api/retro-forum/posts";
      } else {
        apiUrl = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchQuery}`;
      }
  
      try {
        const response = await axios.get(apiUrl);
        const data = response.data.posts;
        setTotalNews(data.length)
        if (data.length === 0) {
          setNoPost(true);
          setPostData([]);
        } else {
          setNoPost(false);
          setPostData(data);
        }
        load();
      } catch (error) {
        console.error("Error fetching data:", error);
        load();
      }
    };
  
    const load = () => {
      setTimeout(() => {
        setIsLoading(false);
        toast("Successfully fetched",{
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          position: "top-right",
          style: {
            width: "90%",
            maxWidth: "400px", 
          },
        });
      }, 2000);
    };
  
    fetchData();
  }, [searchQuery, setIsLoading, setNoPost, setTotalNews]);
  

  return (
    <div>
      {/* {isLoading ? (
        <Loader />
      ) : (
        postData.map((post) => <DiscussCardDesign key={post.id} value={post} />)
      )} */}

      {postData.map((post, index) => (
        <DiscussCardDesign key={index} value={post} />
      ))}
    </div>
  );
};

export default DataCard;
