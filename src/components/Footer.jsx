import { Github, Twitter, Instagram } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-slate-900/30 py-16 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600">
            CoffeeCode
          </h4>
          <p className="text-slate-400">
            Инновационная экосистема для кофейного бизнеса с криптотехнологиями.
          </p>
        </div>

        <div>
          <h5 className="font-bold mb-4">Продукт</h5>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#features" className="hover:text-white">Возможности</a></li>
            <li><a href="#pricing" className="hover:text-white">Тарифы</a></li>
            <li><a href="#" className="hover:text-white">Демо</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-4">Компания</h5>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#" className="hover:text-white">О нас</a></li>
            <li><a href="#" className="hover:text-white">Карьера</a></li>
            <li><a href="#" className="hover:text-white">Контакты</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-4">Социальные сети</h5>
          <div className="flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-white"><Github /></a>
            <a href="#" className="text-slate-400 hover:text-white"><Twitter /></a>
            <a href="#" className="text-slate-400 hover:text-white"><Instagram /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-slate-500 mt-8 pt-8 border-t border-white/10">
        © 2024 CoffeeCode. Все права защищены.
      </div>
    </footer>
  )
}

export default Footer