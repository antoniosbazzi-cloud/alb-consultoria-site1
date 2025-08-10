import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Shield, Star, Users, Building } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function ALBConsultoriaLanding() {
  const whatsappNumber = "5511977367924" // Número real da ALB Consultoria
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os planos de seguro saúde."

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 relative overflow-hidden">
      {/* Elementos animados de fundo */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-green-300/20 rounded-full blur-3xl animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-purple-300/25 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-300/30 rounded-full blur-xl animate-bounce" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-yellow-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-28 h-28 bg-indigo-300/25 rounded-full blur-xl animate-bounce" style={{animationDuration: '5s'}}></div>
        
        {/* Formas geométricas flutuantes */}
        <div className="absolute top-1/3 left-1/2 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-green-400/20 rotate-45 animate-spin" style={{animationDuration: '10s'}}></div>
        <div className="absolute bottom-1/2 right-1/2 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-ping" style={{animationDuration: '6s'}}></div>
      </div>

      {/* Menu de Navegação no Topo */}
      <nav className="py-6 px-4 relative z-10 bg-white/20 backdrop-blur-sm border-b border-white/30">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#parceiros" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/50">
              Parceiros
            </a>
            <a href="#relatos" className="text-lg font-semibold text-gray-700 hover:text-green-600 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/50">
              Relatos
            </a>
            <a href="#servicos" className="text-lg font-semibold text-gray-700 hover:text-purple-600 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/50">
              Serviços
            </a>
            <a href="#contato" className="text-lg font-semibold text-gray-700 hover:text-orange-600 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/50">
              Contato
            </a>
          </div>
        </div>
      </nav>

      {/* Seção Principal */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto text-center max-w-4xl">
          
          {/* Logo/Nome */}
          <div className="flex items-center justify-center space-x-3 mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-xl shadow-lg animate-pulse">
              <Shield className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              ALB Consultoria
            </h1>
          </div>

          {/* Título Principal */}
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Sua Saúde Merece o <br />
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Melhor Cuidado
            </span>
          </h2>

          {/* Descrição elaborada */}
          <div className="mb-12 max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Na <strong>ALB Consultoria</strong>, transformamos a busca pelo plano de saúde ideal em uma experiência simples e personalizada. 
              Com mais de 10 anos de experiência no mercado, conectamos você às principais operadoras do Brasil.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              <span className="font-semibold text-blue-600">✓ Análise gratuita do seu perfil</span> • 
              <span className="font-semibold text-green-600 ml-2">✓ Comparação de preços</span> • 
              <span className="font-semibold text-purple-600 ml-2">✓ Suporte completo</span>
            </p>
          </div>

          {/* Botão WhatsApp Principal */}
          <div className="mb-16" id="contato">
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-2xl px-16 py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-0 animate-pulse"
              >
                <MessageCircle className="h-8 w-8 mr-4" />
                Solicitar Cotação Grátis
              </Button>
            </Link>
            <p className="text-sm text-gray-500 mt-4">✓ Gratuito ✓ Sem compromisso ✓ Resposta rápida</p>
          </div>

          {/* Operadoras com logos oficiais */}
          <div className="mb-12" id="parceiros">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Parceiros de Confiança</h3>
            <p className="text-lg text-gray-600 mb-8">Trabalhamos exclusivamente com as operadoras mais respeitadas do mercado brasileiro:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Image
                  src="/images/bradesco-logo.png"
                  alt="Bradesco Saúde"
                  width={100}
                  height={50}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Image
                  src="/images/sulamerica-logo.png"
                  alt="SulAmérica"
                  width={100}
                  height={50}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Image
                  src="/images/porto-logo.png"
                  alt="Porto Seguro"
                  width={100}
                  height={50}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Image
                  src="/images/amil-logo.png"
                  alt="Amil"
                  width={100}
                  height={50}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Image
                  src="/images/notredame-logo.png"
                  alt="NotreDame"
                  width={100}
                  height={50}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Image
                  src="/images/prevent-logo.png"
                  alt="Prevent Senior"
                  width={100}
                  height={50}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Avaliações Expandidas */}
          <div className="mb-12" id="relatos">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">O que nossos clientes dizem:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 font-medium">
                    "Encontrei o plano perfeito para minha empresa!"
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      M
                    </div>
                    <p className="font-semibold text-gray-900">Maria Silva</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 font-medium">
                    "Atendimento excelente e preços justos!"
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      J
                    </div>
                    <p className="font-semibold text-gray-900">João Santos</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 font-medium">
                    "Consegui um desconto incrível no meu plano!"
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      A
                    </div>
                    <p className="font-semibold text-gray-900">Ana Costa</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 font-medium">
                    "Processo super rápido e sem burocracia!"
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      C
                    </div>
                    <p className="font-semibold text-gray-900">Carlos Lima</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 font-medium">
                    "Melhor consultoria de seguros que já usei!"
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      L
                    </div>
                    <p className="font-semibold text-gray-900">Lucia Ferreira</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 font-medium">
                    "Economizei muito com a ajuda da ALB!"
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      R
                    </div>
                    <p className="font-semibold text-gray-900">Roberto Silva</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Texto de credibilidade */}
          <div className="mb-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-bold text-blue-600">Mais de 1.500 famílias</span> já encontraram o plano ideal conosco. 
              Nossa equipe especializada analisa seu perfil e necessidades para oferecer as melhores opções do mercado.
            </p>
            <p className="text-base text-gray-600">
              <strong>Atendimento humanizado</strong> • <strong>Sem taxas ocultas</strong> • <strong>Processo 100% digital</strong>
            </p>
          </div>

          {/* Tipos de Atendimento */}
          <div className="mb-12" id="servicos">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Atendemos Todos os Perfis</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Individual</h4>
                <p className="text-gray-600">
                  Planos personalizados para você que busca proteção individual com as melhores coberturas do mercado.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Familiar</h4>
                <p className="text-gray-600">
                  Soluções completas para proteger toda sua família com planos que cabem no seu orçamento.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Empresarial</h4>
                <p className="text-gray-600">
                  Planos corporativos com condições especiais para cuidar da saúde dos seus colaboradores.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-sm border-t border-gray-200 py-8 mt-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2025 ALB Consultoria de Benefícios. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 mt-2">
            CNPJ: 47.368.612/0001-03
          </p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="lg"
          className="rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 animate-bounce border-0 w-16 h-16"
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
      </Link>
    </div>
  )
}
