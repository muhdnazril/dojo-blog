import BlogList from "./BlogList";
import UseFetch from "./UseFetch";

const Home = () => {
    
   const {data, isPending, error} = UseFetch('http://localhost:8000/blogs')
    
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // } 

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>loading...</div>}
            {data && <BlogList blogs ={data} title="ALL BLOGS" />}  
        </div>
     );
}
 
export default Home;