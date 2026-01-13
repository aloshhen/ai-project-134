import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'
import { isTelegramMiniApp } from '../utils/telegramCheck'

function Hero() {
  const isTelegram = isTelegramMiniApp()

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-radial-gradient opacity-50 z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600"
        >
          Кофе. Код. Крипто.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 mb-8"
        >
          Революционная система лояльности нового поколения. Зарабатывайте, наслаждаясь кофе и технологиями.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <button className="flex items-center gap-2 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 text-slate-950 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            Начать работу <ArrowRight className="w-5 h-5" />
          </button>
          
          <button className="flex items-center gap-2 border border-white/10 text-white px-6 py-3 rounded-full hover:bg-white/5 transition">
            <BookOpen className="w-5 h-5" /> Документация
          </button>
        </motion.div>

        {isTelegram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-sm text-slate-500"
          >
            Обнаружен Telegram Mini App. Нажмите "Открыть профиль" в навигации.
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Hero