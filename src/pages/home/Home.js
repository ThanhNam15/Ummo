import "../../css/base.css";
import "./home.css";

import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import Option from "../../components/option/Option";
import Outstanding from "../../components/outstanding/Outstanding";
import Collection from "../../components/collection/Collection";
import Banner from "../../components/banner/Banner";
import Green from "../../components/green/Green";
import Deal from "../../components/deal/Deal";
import News from "../../components/news/News";
import Explore from "../../components/explore/Explore";
import Email from "../../components/email/Email";
import Footer from "../../components/footer/Footer";
import Scroll from "../../components/scroll/scroll";

export default function Home() {
  return (
    <div>
      <Header/>
      <Slider/>
      <Option/>
      <Scroll/>
      <Outstanding/>
      <Collection/>
      <Banner/>
      <Green/>
      <Deal/>
      <News/>
      <Explore/>
      <Email/>
      <Footer/>
    </div>
  )
}
