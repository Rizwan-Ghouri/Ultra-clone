import Button from "../common/Button";
import Heading from "../common/Heading";
import "./Banner.css";
const Banner = ({ data, btn, theme, imagePosition }) => {
  return (
    <>
      <section
        className={`banner_wrapper ${theme === "dark" ? "dark_theme" : "light_theme"}`}>
        <div className={`banner_content ${imagePosition === "left" ? "reverse" : ""}`}>
          <div className="banner_text">
            <p className="ban_title">{data.subTitle}</p>
            <Heading headingClass="ban_heading"  headingText={data.heading} />
            <p className="ban_para">{data.discription}</p>
            {data.isbtn ? <Button btnClass={`ban_btn `} btnText={btn}  /> : null}
          </div>
          <div className="banner_img_wrapper">
            <img className="ban_image" src={data.image} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
