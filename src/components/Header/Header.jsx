import { NavLink } from "react-router-dom";
import Button from "../common/Button";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header className="Header_wrapper">
        <div className="logo_wrapper">
          <img className="logoimg" src="https://static.thenounproject.com/png/ultra-ball-icon-616571-512.png" alt="" />
          <h1 className="logo">ULTRA</h1>
        </div>
        <div className="list_wrapper">
          <ul className="ulist">
            <li className="list"><NavLink className={"link"} to="/">Home</NavLink></li>
            <li className="list"><NavLink className={"link"} to="/services">Services</NavLink></li>
            <li className="list"><NavLink className={"link"} to="/product">Product</NavLink></li>
          </ul>
        </div>
        <div>
          <NavLink to={"/signup"}>
            {
            <Button btnClass={`btn`} btnText={`Sign Up`} />
            }
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
