import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import UploadIntro from './components/UploadIntro'
import UploadFlow from './components/UploadFlow'
import Problem from './components/Problem'
import Solution from './components/Solution'
import WhatWeCheck from './components/WhatWeCheck'
import Process from './components/Process'
import ForWhom from './components/ForWhom'
import Pilot from './components/Pilot'
import Fees from './components/Fees'
import FAQ from './components/FAQ'
import Security from './components/Security'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import KontaktPage from './pages/Kontakt'

function HomePage() {
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
        <Pilot />
        <Fees />
        <FAQ />
        <Security />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function LegalPageWrapper({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/impressum"
          element={
            <LegalPageWrapper>
              <Impressum />
            </LegalPageWrapper>
          }
        />
        <Route
          path="/datenschutz"
          element={
            <LegalPageWrapper>
              <Datenschutz />
            </LegalPageWrapper>
          }
        />
        <Route
          path="/kontakt"
          element={
            <LegalPageWrapper>
              <KontaktPage />
            </LegalPageWrapper>
          }
        />
      </Routes>
    </Router>
  )
}
