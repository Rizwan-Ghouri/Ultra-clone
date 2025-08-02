import Cards from "../components/common/Cards";
import Heading from "../components/common/Heading";
import { ServicesCard } from "../utils/constant/ServicesCard";
import "./Services.css";
const Services = () => {
  return (
    <>
      <section className="services_continer">
        <Heading headingClass="ser_heading" headingText="Our Services" />
        <div className="ser_card_wrapper">
          {ServicesCard.map((data, index) => {
            return <Cards CardKey={index} CardContect={data} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
