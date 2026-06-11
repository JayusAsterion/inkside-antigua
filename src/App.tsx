import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { SmoothScroll } from './components/layout/SmoothScroll'
import { AboutSection } from './sections/AboutSection'
import { ArtistsSection } from './sections/ArtistsSection'
import { ContactSection } from './sections/ContactSection'
import { GallerySection } from './sections/GallerySection'
import { HeroSection } from './sections/HeroSection'
import { ProcessSection } from './sections/ProcessSection'
import { ServicesSection } from './sections/ServicesSection'

function App() {
  return (
    <SmoothScroll>
      <div className="texture-grain min-h-screen overflow-x-hidden bg-ink-950 text-bone-50">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ArtistsSection />
          <GallerySection />
          <ProcessSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
