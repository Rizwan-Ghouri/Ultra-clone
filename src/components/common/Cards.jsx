import Button from "./Button";
import Heading from "./Heading";
import "./Cards.css"

const Cards = ({ CardContect, CardKey }) => {
  // console.log(CardContect);

  return (
    <>
      <section id={CardKey} className="card_continer">
        <div>
          <img className="card_image" src={CardContect.CardImage} alt="" />
          <Heading headingClass="card_Heading" headingText={CardContect.Cardheading} />
          <Heading headingClass="card_price" headingText={CardContect.Cardprices} />
          <p className="card_subtitle">{CardContect.Cardsubtitle}</p>
        </div>
        <div>
          <p className="card_newuser">{CardContect.Cardnewuser}</p>
          <p className="card_Budget">{CardContect.CardBudget}</p>
          <p className="card_analytics">{CardContect.CardAnalytics}</p>
        </div>
        <div>
          <Button btnClass="card_btn" btnText="Choose Plan" />
        </div>
      </section>
    </>
  );
};

export default Cards;
