import './App.scss'
import Header from './component/Header/Header'
import Hero from './component/Hero/Hero'
import MySkills from './component/MySkills/MySkills.jsx'
import MyExperience from './component/MyExperience/MyExperience.jsx'
import AboutMe from './component/AboutMe/AboutMe.jsx'
import MyProject from './component/MyProject/MyProject.jsx'
import MyTestimonial from './component/MyTestimonial/MyTestimonial.jsx'
import GetInTouch from './component/GetInTouch/GetInTouch'
import Footer from './component/Footer/Footer'

function App() {

  return (
    <div className='App'>
      <Header/>
      <section id='hero'>
        <Hero/>
      </section>
      <section id='mySkills'>
        <MySkills/>
      </section>
      <section id='myExperience'>
        <MyExperience/>
      </section>
      <section id='aboutMe'>
        <AboutMe/>
      </section>
      <section id='myProject'>
        <MyProject/>
      </section>
      <section id='myTestimonial'>
        <MyTestimonial/>
      </section>
      <section id='getInTouch'>
        <GetInTouch/>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default App
