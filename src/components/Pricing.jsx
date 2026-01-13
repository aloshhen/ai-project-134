import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function PricingCard({ title, price, features, isMostPopular = false }) {
  const { ref, controls, variants } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`relative glass-morphism rounded-2xl p-8 border ${
        isMostPopular 
          ? 'border-transparent ring-2 ring-gradient-to-r from-orange-400 via-amber-500 to-yellow-600' 
          : 'border-white/10'
      }`}
    >
      {isMostPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 text-slate-950 px-4 py-1 rounded-full text-sm font-semibold">
          Самый популярный
        </div>
      )}

      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600">
        {price}
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-slate-400">{feature}</span>
          </li>
        ))}
      </ul>

      <button className="w-full bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 text-slate-950 px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
        Выбрать тариф
      </button>
    </motion.div>
  )
}

function Pricing() {
  const plans = [
    {
      title: "Lite",
      price: "0 ₽",
      features: [
        "Базовый функционал",
        "1 кофейня",
        "До 50 заказов/мес"
      ]
    },
    {
      title: "Pro",
      price: "2,990 ₽/мес",
      features: [
        "Расширенная аналитика",
        "До 5 кофеен",
        "Неограниченные заказы",
        "NFT-программа лояльности"
      ],
      isMostPopular: true
    },
    {
      title: "Enterprise",
      price: "Индивидуально",
      features: [
        "Полный функционал",
        "Неограниченное число кофеен",
        "Корпоративные интеграции",
        "Персональный менеджер"
      ]
    }
  ]

  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600">
          Тарифы
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              isMostPopular={plan.isMostPopular}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing