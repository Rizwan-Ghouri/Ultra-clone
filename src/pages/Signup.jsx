import Banner from "../components/Banner/Banner"
import { SignupBanner } from "../utils/constant/Banner"

const Signup = () => {
  return (
    <>
     <Banner data={SignupBanner} btn="Sign Up" theme="light" imagePosition="right" /> 

    </>
  )
}

export default Signup
