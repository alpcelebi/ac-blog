import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      ad: "Lorem, ipsum dolor.",
      aciklama: "Lorem ipsum dolor sit.",
      yazar: "Yagız Alp",
      id: 1,
    },
    {
      ad: "Lorem, ipsum dolor.",
      aciklama: "Lorem ipsum dolor sit.",
      yazar: "Tugce",
      id: 2,
    },
    {
      ad: "Lorem, ipsum dolor.",
      aciklama: "Lorem ipsum dolor sit.",
      yazar: "Alp Eren",
      id: 3,
    },
    {
      ad: "Lorem, ipsum dolor.",
      aciklama: "Lorem ipsum dolor sit.",
      yazar: "Kerem",
      id: 4,
    },
  ]);

  

  const handleClick = (id)=>{
        const newBlogs=blogs.filter(blog=>blog.id!==id);
        setBlogs(newBlogs);
  }

  return (
    <div className="home">
      <BlogList bloglar={blogs} baslik="BÜTÜN YAZILAR" handleClick={handleClick} />
    </div>
  );
};

export default Home;
