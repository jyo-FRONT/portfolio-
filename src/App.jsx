import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Archive from './components/Archive'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-bg min-h-screen">
      <Nav />
      <main>
        <Hero onWorkClick={scrollToWork} />
        <Work />
        <Archive />
        <About />
      </main>
      <Footer />
    </div>
  )
}
