import './App.css';
import {MyLatestProjects} from "./portfolio/components/myLatestProjects/MyLatestProjects";
import {MySkills} from "./portfolio/components/mySkills/MySkills";
import {CallToAction} from "./portfolio/components/callToAction/CallToAction";
import {Contacts} from "./portfolio/components/contacts/Contacts";
import {Footer} from "./portfolio/components/footer/Footer";
import {AboutMe} from "./portfolio/components/aboutMe/AboutMe";
import {Home} from "./portfolio/components/home/Home";
import {Header} from "./portfolio/components/header/Header"

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <AboutMe/>
      <MySkills/>
      <MyLatestProjects/>
      <CallToAction/>
      <Contacts/>
      <Footer/>
    </div>
  );
}
