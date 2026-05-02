import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Residencies from '../components/Residencies/Residencies'
import GetStarted from '../components/GetStarted/GetStarted'
import Footer from '../components/Footer/Footer'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Testimonials from '../components/Testimonials/Testimonials'

function Home() {
  return (
    <div className="mine">
      <Header />
      <Hero />
      <Residencies />
      <HowItWorks />
      <Testimonials />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default Home