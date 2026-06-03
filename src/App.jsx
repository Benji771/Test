import Header from './components/Header'
import Hero from './components/Hero'
import UploadIntro from './components/UploadIntro'
import UploadFlow from './components/UploadFlow'
import Problem from './components/Problem'
import Solution from './components/Solution'
import WhatWeCheck from './components/WhatWeCheck'
import Process from './components/Process'
import ForWhom from './components/ForWhom'
import Pricing from './components/Pricing'
import Security from './components/Security'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <UploadIntro />
        <UploadFlow />
        <Problem />
        <Solution />
        <WhatWeCheck />
        <Process />
        <ForWhom />
        <Pricing />
        <Security />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
