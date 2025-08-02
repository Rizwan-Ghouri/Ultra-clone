import Banner from "../components/Banner/Banner"
import { banner1,banner2, banner3, banner4 } from "../utils/constant/Banner"
import Services from "./Services"

const Home = () => {
  return (
    <>
      <Banner data={banner1} btn="Get Started" theme="dark" imagePosition="right"/>
      <Banner data={banner2} btn="View Case Study" theme="light" imagePosition="left"/>
      <Banner data={banner3} btn="learn More" theme="dark" imagePosition="right"/>
      <Services />
      <Banner data={banner4} btn="Sign Up Now" theme="dark" imagePosition="left"/>
    </>
  )
}

export default Home
