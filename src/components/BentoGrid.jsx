import { motion } from 'framer-motion'
import { Coffee, Wallet, Trophy, BarChart3 } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function BentoGridCard({ icon: Icon, title, description, className = '' }) {
  const { ref, controls, variants } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`glass-morphism rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 ${className}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 p-3 rounded-full">
          <Icon className="w-6 h-6 text-slate-950" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-slate-400">{description}</p>
    </motion.div>
  )
}

function BentoGrid() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600">
          Наши преимущества
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BentoGridCard
            icon={Coffee}
            title="Smart Order"
            description="Предзаказ кофе с интеллектуальными рекомендациями и персонализацией"
            className="md:col-span-1"
          />
          
          <BentoGridCard
            icon={Wallet}
            title="Crypto Payments"
            description="Поддержка TON и Stars. Криптовалютные транзакции без комиссий"
            className="md:col-span-2"
          />
          
          <BentoGridCard
            icon={Trophy}
            title="NFT Loyalty"
            description="Уникальные бонусы и привилегии через NFT-токены лояльности"
            className="md:col-span-2"
          />
          
          <BentoGridCard
            icon={BarChart3}
            title="Live Analytics"
            description="Real-time аналитика для владельцев бизнеса с детальной статистикой"
            className="md:col-span-1"
          />
        </div>
      </div>
    </section>
  )
}

export default BentoGrid