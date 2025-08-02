import { listing } from "../../utils/constant/lists";
import List from "../../common/list";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="Email_wrapper">
        <p className="para_email">
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className="para_email">You can unsubscribe at any time.</p>
        <div className="input_wrapper">
          <input className="email_input" type="text" placeholder="Your Email" />
          <button className="email_btn">Subscribe</button>
        </div>
      </div>
      <div className="footer_wrapper">
        {listing.map((data, index) => {
          return <List istKey={index} ListContent={data} />;
        })}
      </div>
      <footer className="footer">
        <div className="logo_wrapper">
          <img
            className="logoimg"
            src="https://static.thenounproject.com/png/ultra-ball-icon-616571-512.png"
            alt=""
          />
          <h1 className="logo">ULTRA</h1>
        </div>
          <p className="">ULTRA @copy 2020</p>
      </footer>
    </>
  );
};

export default Footer;
