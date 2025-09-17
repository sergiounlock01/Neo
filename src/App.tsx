import React from 'react';
import { FileText, DollarSign, MessageCircle, Zap } from 'lucide-react';

function App() {
  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/558386391852?text=Atendimento.', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-xl">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Soluções de Energia
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sua energia em
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> boas mãos</span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-8">
            Atendimento Energisa especializado
          </h3>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Oferecemos soluções completas para suas necessidades energéticas com suporte personalizado.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Como podemos ajudar?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Selecione o serviço que você precisa e fale conosco diretamente pelo WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 2° Via de Fatura */}
            <div className="group">
              <div 
                onClick={handleWhatsAppRedirect}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-200 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="h-12 w-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    2° Via de Fatura
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Obtenha rapidamente a segunda via da sua fatura de energia elétrica
                  </p>
                  <div className="bg-blue-50 text-blue-700 px-6 py-2 rounded-full font-semibold group-hover:bg-blue-100 transition-colors">
                    Solicitar agora
                  </div>
                </div>
              </div>
            </div>

            {/* Negociações de Dívidas */}
            <div className="group">
              <div 
                onClick={handleWhatsAppRedirect}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-green-200 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="h-12 w-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Negociações de Dívidas
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Negocie suas pendências com condições especiais e facilidades de pagamento
                  </p>
                  <div className="bg-green-50 text-green-700 px-6 py-2 rounded-full font-semibold group-hover:bg-green-100 transition-colors">
                    Negociar agora
                  </div>
                </div>
              </div>
            </div>

            {/* Falar com Atendente */}
            <div className="group">
              <div 
                onClick={handleWhatsAppRedirect}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-200 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="h-12 w-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Falar com Atendente
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Converse diretamente com nosso atendimento especializado
                  </p>
                  <div className="bg-purple-50 text-purple-700 px-6 py-2 rounded-full font-semibold group-hover:bg-purple-100 transition-colors">
                    Falar agora
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Atendimento rápido e eficiente
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para te atender no WhatsApp. Resposta rápida e soluções personalizadas para você!
          </p>
          <button
            onClick={handleWhatsAppRedirect}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Falar no WhatsApp
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-xl">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Soluções de Energia</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © 2024 Soluções de Energia. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 mt-1">
                Atendimento especializado via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
