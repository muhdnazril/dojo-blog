import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    return ( 
      <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
            // inline styling
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '10px'
        }}>New Blog</Link>
      </div>
      <Outlet />
    </nav>
     );
}
 
export default Navbar;