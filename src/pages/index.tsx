import { useState } from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import CategorySection from '../components/CategorySection'
import PromoBanner from '../components/PromoBanner'
import FeaturesSection from '../components/FeaturesSection'
import TestemonialsSection from '../components/TestemonialsSection'
import Footer from '../components/Footer'
import ChatWidget from '../components/chat/ChatWidget'


function Index() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen flex flex-col">
    <NavBar />
      <main className='flex-grow'>
        <HeroSection />
        <CategorySection />
        <PromoBanner />
        <FeaturesSection />
        <TestemonialsSection />
      </main>
    <Footer />
    <ChatWidget />
    </div>
    </>
  )
}

export default Index
