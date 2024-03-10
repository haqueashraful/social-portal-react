// Context.js
import { createContext, useContext, useRef, useState } from "react";

const PortalContext = createContext();

// eslint-disable-next-line react/prop-types
export const MyPortalProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [view, setView] = useState("");
  const [totalNews, setTotalNews] = useState(0)
  const [latestNews, setLatestNews] = useState(0)
  const [readCount, setReadCount] = useState(0);
  const [readData, setReadData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [noPost, setNoPost] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("");
  const [id, setId] = useState(0)
  const homeRef = useRef(null);
  const newsRef = useRef(null);
  const usersRef = useRef(null);
  const criteriaRef = useRef(null);


  const deleteReadItem = (index) => {
    setReadCount(prevCount => prevCount - 1);
    // setReadData((prevData) => {
    //   const index = prevData.findIndex((item) => item.id === id); 
    //   if (index !== -1) {
    //     const updatedData = [...prevData];
    //     updatedData.splice(index, 1); 
    //     return updatedData;
    //   }
    //   return prevData; 
    // });

    setReadData((prevData) =>{
      const UpdatedData = [...prevData]
      UpdatedData.splice(index, 1);
      
      return UpdatedData;
    })
  };
  

  return (
    <PortalContext.Provider
      value={{
        title,
        setTitle,
        view,
        setView,
        readCount,
        setReadCount,
        readData,
        setReadData,
        isLoading,
        setIsLoading,
        searchQuery,
        setSearchQuery,
        setQuery,
        query,
        noPost,
        setNoPost,
        homeRef,
        newsRef,
        criteriaRef,
        usersRef,
        deleteReadItem,
        id,
        setId,
        totalNews,
        setTotalNews,
        latestNews,
        setLatestNews,

      }}
    >
      {children}
    </PortalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePortalContext = () => useContext(PortalContext);
