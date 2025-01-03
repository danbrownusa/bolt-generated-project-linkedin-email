import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">AICompany</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="hover:text-secondary">How It Works</a>
            <a href="#features" className="hover:text-secondary">Features</a>
            <a href="#pricing" className="hover:text-secondary">Pricing</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#how-it-works" className="hover:text-secondary">How It Works</a>
              <a href="#features" className="hover:text-secondary">Features</a>
              <a href="#pricing" className="hover:text-secondary">Pricing</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
