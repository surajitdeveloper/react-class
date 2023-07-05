import { Link } from "react-router-dom"
// import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <div className="App">
       <Link to="/">Home</Link>  
       <Link to="/login">Login</Link>
    </div>
  );
}

export default Header;