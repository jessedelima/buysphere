import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Smartphone,
  ShoppingCart,
  CreditCard,
  Truck,
  Music,
  Video,
  Plane,
  UtensilsCrossed,
  Pill,
  GraduationCap,
  BookOpen,
  Building,
  Gamepad2,
  MessageCircle,
  Users,
  MapPin,
  Download,
  Star,
  ArrowRight
} from 'lucide-react'
import buySphereLogo from './assets/buysphere_logo.png'
import './App.css'

function App() {
  const [selectedApp, setSelectedApp] = useState(null)

  const apps = [
    {
      id: 'buyconnect',
      name: 'BuyConnect',
      description: 'Rede social completa com perfil profissional, fotos e chat integrado',
      icon: Users,
      color: 'bg-blue-500',
      features: ['Rede Social', 'Perfil Profissional', 'Galeria de Fotos', 'Chat Integrado']
    },
    {
      id: 'buydrive',
      name: 'BuyDrive',
      description: 'Transporte de pessoas e pequenas entregas com mapa interativo',
      icon: MapPin,
      color: 'bg-green-500',
      features: ['Transporte de Pessoas', 'Pequenas Entregas', 'Mapa Móvel', 'Rastreamento']
    },
    {
      id: 'buybank',
      name: 'BuyBank',
      description: 'Serviços bancários completos e modernos',
      icon: CreditCard,
      color: 'bg-purple-500',
      features: ['Conta Corrente', 'Poupança', 'Investimentos', 'Transferências']
    },
    {
      id: 'buyexpress',
      name: 'BuyExpress',
      description: 'Grandes entregas e produtos da BuyShop via carreta',
      icon: Truck,
      color: 'bg-orange-500',
      features: ['Grandes Entregas', 'Produtos BuyShop', 'Transporte por Carreta', 'Rastreamento']
    },
    {
      id: 'buymusic',
      name: 'BuyMusic',
      description: 'Streaming de música com artistas conhecidos e novos talentos',
      icon: Music,
      color: 'bg-pink-500',
      features: ['Músicas Conhecidas', 'Novos Artistas', 'Playlists', 'Cadastro de Cantores']
    },
    {
      id: 'buyvideo',
      name: 'BuyVideo',
      description: 'Streaming completo com filmes, séries, podcasts e canal próprio',
      icon: Video,
      color: 'bg-red-500',
      features: ['Filmes e Séries', 'Conteúdo Original', 'Podcasts', 'Canal Bela', 'BuyNews']
    },
    {
      id: 'buytravel',
      name: 'BuyTravel',
      description: 'Viagens e hospedagens com preços exclusivos para usuários BuySphere',
      icon: Plane,
      color: 'bg-cyan-500',
      features: ['Comparação de Preços', 'Descontos Exclusivos', 'Hotéis Cadastrados', 'Viagens']
    },
    {
      id: 'buyfood',
      name: 'BuyFood',
      description: 'Entrega de todo tipo de alimento, incluindo bolos e salgados',
      icon: UtensilsCrossed,
      color: 'bg-yellow-500',
      features: ['Todos os Alimentos', 'Bolos de Festa', 'Salgados', 'Entrega Rápida']
    },
    {
      id: 'buyfarma',
      name: 'BuyFarma',
      description: 'Entrega de medicamentos com os melhores preços',
      icon: Pill,
      color: 'bg-teal-500',
      features: ['Medicamentos', 'Melhores Preços', 'Entrega Rápida', 'Receitas']
    },
    {
      id: 'buyshop',
      name: 'BuyShop',
      description: 'E-commerce com promoções, lives e moedas de desconto',
      icon: ShoppingCart,
      color: 'bg-indigo-500',
      features: ['Promoções', 'Lives', 'Moedas de Desconto', 'Produtos Variados']
    },
    {
      id: 'buycourse',
      name: 'BuyCourse',
      description: 'Cursos profissionalizantes online, incluindo programação e TI',
      icon: BookOpen,
      color: 'bg-emerald-500',
      features: ['Cursos Profissionalizantes', 'Programação', 'TI', 'Certificados']
    },
    {
      id: 'buyuniversit',
      name: 'BuyUniversit',
      description: 'Cursos superiores EAD com foco em TI',
      icon: GraduationCap,
      color: 'bg-violet-500',
      features: ['Cursos Superiores', 'EAD', 'Área de TI', 'Diplomas Reconhecidos']
    },
    {
      id: 'buycity',
      name: 'BuyCity',
      description: 'Cidade virtual com lojas e realidade aumentada',
      icon: Building,
      color: 'bg-slate-500',
      features: ['Cidade Virtual', 'Lojas Virtuais', 'Realidade Aumentada', 'Aluguel de Espaços']
    },
    {
      id: 'buygame',
      name: 'BuyGame',
      description: 'Games em general executados na nuvem',
      icon: Gamepad2,
      color: 'bg-rose-500',
      features: ['Games Variados', 'Execução na Nuvem', 'Sem Download', 'Multiplayer']
    },
    {
      id: 'buymessage',
      name: 'BuyMessage',
      description: 'Mensagens instantâneas no estilo WhatsApp',
      icon: MessageCircle,
      color: 'bg-lime-500',
      features: ['Mensagens de Texto', 'Áudio e Vídeo', 'Grupos', 'Status']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-3">
              <img src={buySphereLogo} alt="BuySphere Logo" className="h-16 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-primary">BuySphere</h1>
                <p className="text-xs text-muted-foreground">Superapp da BuyCorp</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button>
                Entrar
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Tudo que você precisa em
            <span className="text-primary block">um só lugar</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            O BuySphere é o superapp que revoluciona sua experiência digital. 
            Acesse 15 aplicativos integrados com uma única conta e desfrute de 
            funcionalidades exclusivas e preços especiais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              <Smartphone className="w-5 h-5 mr-2" />
              Baixar para Android
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              <Smartphone className="w-5 h-5 mr-2" />
              Baixar para iOS
            </Button>
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos Aplicativos
            </h3>
            <p className="text-lg text-gray-600">
              Descubra todos os serviços disponíveis no BuySphere
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {apps.map((app) => {
              const IconComponent = app.icon
              return (
                <Card 
                  key={app.id} 
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  onClick={() => setSelectedApp(selectedApp === app.id ? null : app.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${app.color}`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{app.name}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3">
                      {app.description}
                    </CardDescription>
                    {selectedApp === app.id && (
                      <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                        <h4 className="font-semibold text-sm">Funcionalidades:</h4>
                        <div className="flex flex-wrap gap-1">
                          {app.features.map((feature, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-8">
            Por que escolher o BuySphere?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Star className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold">Tudo Integrado</h4>
              <p className="text-white/90">
                Uma única conta para acessar todos os serviços. Sem complicações, sem múltiplos logins.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <CreditCard className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold">Preços Exclusivos</h4>
              <p className="text-white/90">
                Descontos especiais e preços diferenciados para usuários do BuySphere.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <Smartphone className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold">Experiência Única</h4>
              <p className="text-white/90">
                Interface moderna e intuitiva, desenvolvida para facilitar sua vida digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Pronto para começar?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Baixe o BuySphere agora e tenha acesso a todos os nossos serviços em um só lugar.
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            Baixar BuySphere
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src={buySphereLogo} alt="BuySphere Logo" className="h-16 w-auto" />
                <span className="text-xl font-bold">BuySphere</span>
              </div>
              <p className="text-gray-400">
                O superapp que revoluciona sua experiência digital.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Aplicativos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>BuyConnect</li>
                <li>BuyDrive</li>
                <li>BuyBank</li>
                <li>BuyShop</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre nós</li>
                <li>Carreiras</li>
                <li>Contato</li>
                <li>Imprensa</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Central de Ajuda</li>
                <li>Termos de Uso</li>
                <li>Privacidade</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BuyCorp. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App