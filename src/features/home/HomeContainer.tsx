import PhVideo from "../../components/video/PhVideo"
import AccreditationContainer from "./components/accreditations/AccreditationContainer"
import OurServices from "./components/our-services/OurServices"
import RecentArticles from "./components/recent-articles/RecentArticles"

const HomeContainer = () => {
  return (
    <>
      <PhVideo />
      <OurServices />
      <RecentArticles />
      <AccreditationContainer />
    </>
  )
}

export default HomeContainer