import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { isTelegramMiniApp } from '../utils/telegramCheck'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const isTelegram = isTelegramMiniApp()

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600">
              CoffeeCode
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a 
              href="#features" 
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('features')
              }}
              className="text-slate-400 hover:text-white transition"
            >
              Возможности
            </a>
            <a 
              href="#how-works" 
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('how-works')
              }}
              className="text-slate-400 hover:text-white transition"
            >
              Как работает
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('pricing')
              }}
              className="text-slate-400 hover:text-white transition"
            >
              Тарифы
            </a>
            {isTelegram && (
              <button className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 px-4 py-2 rounded-full text-slate-950 font-semibold">
                Открыть профиль
              </button>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute left-0 right-0 top-16 bg-slate-900 border-b border-white/10"
          >
            <div className="flex flex-col space-y-2 px-4 py-4">
              <a 
                href="#features" 
                onClick={() => scrollToSection('features')}
                className="text-slate-400 hover:text-white py-2"
              >
                Возможности
              </a>
              <a 
                href="#how-works" 
                onClick={() => scrollToSection('how-works')}
                className="text-slate-400 hover:text-white py-2"
              >
                Как работает
              </a>
              <a 
                href="#pricing" 
                onClick={() => scrollToSection('pricing')}
                className="text-slate-400 hover:text-white py-2"
              >
                Тарифы
              </a>
              {isTelegram && (
                <button className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 px-4 py-2 rounded-full text-slate-950 font-semibold mt-4">
                  Открыть профиль
                </button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navigation