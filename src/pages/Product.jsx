import Banner from "../components/Banner/Banner"
import { ProductBanner1, ProductBanner2 } from "../utils/constant/Banner"

const Product = () => {
  return (
    <div>
      <Banner data={ProductBanner1} btn={"Shop now"} theme="dark" imagePosition={"right"}/>
      <Banner data={ProductBanner2} btn={"Learn More"} theme="light" imagePosition={"left"}/>
    </div>
  )
}

export default Product
