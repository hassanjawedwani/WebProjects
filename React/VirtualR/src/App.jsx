import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Price from "./components/Price"
import Testimonials from "./components/Testimonials"
import { Workflow } from "./components/Workflow"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6" >
        <Hero />
        <Features />
        <Workflow />
        <Price />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App