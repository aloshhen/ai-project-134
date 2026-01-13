import { motion } from 'framer-motion'
import { UserCheck, QrCode, Coffee } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function HowItWorks() {
  const { ref, controls, variants } = useScrollAnimation()

  const steps = [
    {
      icon: UserCheck,
      title: "Регистрация",
      description: "Создайте аккаунт через Telegram или почту"
    },
    {
      icon: QrCode,
      title: "Сканирование",
      description: "Получите уникальный QR для заказов"
    },
    {
      icon: Coffee,
      title: "Вознаграждение",
      description: "Зарабатывайте криптобонусы с каждым заказом"
    }
  ]

  return (
    <section id="how-works" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600">
          Как это работает
        </h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative text-center glass-morphism rounded-2xl p-8 border border-white/10"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 p-3 rounded-full">
                  <step.icon className="w-8 h-8 text-slate-950" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 h-0.5 w-16 bg-white/10 hidden md:block"></div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks