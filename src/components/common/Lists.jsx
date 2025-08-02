import Heading from "./Heading"
import "./List.css"
const Lists = ({ListContent,ListKey}) => {
  return (
    <>
      <ul className="ul_wrapper" id={ListKey}>
        <li className="ul_heading"><Heading headingText={ListContent.heading} /></li>
        <li className="ul_li"><a>{ListContent.li1}</a></li>
        <li className="ul_li"><a>{ListContent.li2}</a></li>
        <li className="ul_li"><a>{ListContent.li3}</a></li>
        <li className="ul_li"><a>{ListContent.li4}</a></li>
        <li className="ul_li"><a>{ListContent.li5}</a></li>
      </ul>
    </>
  )
}

export default Lists
