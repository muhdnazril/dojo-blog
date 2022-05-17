
import { Link } from "react-router-dom";
const BlogList = ({blogs, title}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`./blogs/${blog.id}`}>
                    <h1>{blog.title}</h1>
                    {/* <h3>{blog.body} </h3> */}
                    <h6>written by {blog.author} </h6>
                    </Link>
                </div>
            ))}
        </div>
        
     );
}
 
export default BlogList;