import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Button = ({btnClass ,btnText}) => {
  const navigate = useNavigate();

const handleClick = () => {
navigate("/signup");
};
  return (
    <div>
          <button className={btnClass} onClick={handleClick}>{btnText}</button>
      
    </div>
  )
}

export default Button
