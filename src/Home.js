import { useState } from "react";
import BlogList from "./BlogList";
 
const Home = () => {

    const [blogs, setBlogs]=useState([
        {
            title: "TypeScript",
            body: "lorem ipsum dolor sit am...",
            author: "Zia Khan",
            id:1
        },
        {
            title: "Next JS",
            body: "lorem ipsum dolor sit am...",
            author: "Daniyan Nagori",
            id:2

        },
        {
            title: "Metaverse",
            body: "lorem ipsum dolor sit am...",
            author:"Ahsan Raza",
            id:3
        }, {
            title: "Web 3.0",
            body: "lorem ipsum dolor sit am...",
            author:"Ahsan Raza",
            id:3
        }
    ]);
   
    const handleDelete=(id)=>{
        const newBlogs=blogs.filter(blog=>blog.id!==id);
        setBlogs(newBlogs);
    
    }

    return ( 
        <div>
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
           
          
        </div>
        </div>
     );
}
 
export default Home;