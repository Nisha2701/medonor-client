import { useState, useEffect } from 'react'
import { Header } from './header'
import { Features } from './features'
import { About } from './about' 
import { Testimonials } from './testimonials'
import JsonData from './data.json'
import SmoothScroll from 'smooth-scroll'
import './wth.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const WTH = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Testimonials data={landingPageData.Testimonials} />
    </div>
  )
}

export default WTH
