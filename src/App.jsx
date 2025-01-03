import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SocialProof } from './components/SocialProof'
import { Features } from './components/Features'
import { Premium } from './components/Premium'
import { Benefits } from './components/Benefits'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Premium />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
