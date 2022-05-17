import { Navigate, useNavigate, useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const { data:blog, error, isPending} = UseFetch('http://localhost:8000/blogs/' + id);
    const Navigate = useNavigate();
    const handleCLick = () =>{
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method: 'DELETE'
        }).then(()=>{
            Navigate('/')
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div> Loading </div>}
            {error && <div>{error}</div>}
            { blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <h6>written by {blog.author} </h6>
                    <h3>{blog.body} </h3>
                    <button onClick={handleCLick}>delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;