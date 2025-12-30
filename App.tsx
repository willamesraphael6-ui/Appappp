
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  ShoppingBag, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Star, 
  ChefHat, 
  MousePointerClick,
  Lock
} from 'lucide-react';

// --- Components ---

const CTA_LINK = "https://pay.cakto.com.br/37kmen4_704444";
const LOGO_URL = "https://i.ibb.co/qFC6N0zq/generated-image-e57b1af6-abb9-4d38-9b33-d69c5416e750.png";

const Button: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  onClick?: () => void;
  primary?: boolean;
}> = ({ children, className = "", primary = true }) => (
  <a
    href={CTA_LINK}
    className={`inline-flex items-center justify-center px-8 py-4 text-lg font-extrabold rounded-full transition-all transform active:scale-95 shadow-lg hover:shadow-xl ${
      primary 
        ? "bg-green-500 hover:bg-green-400 text-white" 
        : "bg-white text-green-600 hover:bg-gray-100"
    } ${className}`}
  >
    {children}
  </a>
);

const SectionTitle: React.FC<{ children: React.ReactNode; dark?: boolean }> = ({ children, dark = false }) => (
  <h2 className={`text-3xl md:text-4xl font-extrabold text-center mb-10 ${dark ? "text-white" : "text-gray-900"}`}>
    {children}
  </h2>
);

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start space-x-3 mb-4">
    <CheckCircle className="text-green-500 flex-shrink-0 w-6 h-6" />
    <span className="text-lg text-gray-700 font-medium">{text}</span>
  </div>
);

const Step: React.FC<{ number: number; text: string; icon: React.ReactNode }> = ({ number, text, icon }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
      {icon}
    </div>
    <div className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-500">Passo {number}</div>
    <p className="text-gray-800 font-semibold leading-tight">{text}</p>
  </div>
);

const App: React.FC = () => {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. HERO SECTION */}
      <header className="bg-brand-gradient text-white pt-12 pb-20 px-6 overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <img 
              src={LOGO_URL}
              alt="Logo Receitas Secretas" 
              className="w-32 h-32 md:w-44 md:h-44 rounded-[2rem] shadow-2xl border-4 border-white/20 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/400/400?random=food';
              }}
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Receitas que o <span className="text-green-400">Google</span> não mostra
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-blue-50 leading-relaxed opacity-90 max-w-2xl mx-auto">
            Receitas simples, antigas e novas, feitas para quem gosta de comida de verdade.
          </p>
          
          <div className="space-y-4">
            <Button className="w-full md:w-auto px-12 py-5">
              COMPRAR AGORA – R$ 10,90
            </Button>
            <p className="text-sm font-medium text-blue-100 flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-yellow-300" /> Acesso imediato liberado após a compra
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
      </header>

      {/* 2. O QUE VOCÊ VAI ENCONTRAR */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>O que você vai encontrar</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            <FeatureItem text="Receitas caseiras exclusivas" />
            <FeatureItem text="Receitas antigas de família" />
            <FeatureItem text="Receitas novas criadas" />
            <FeatureItem text="Pratos simples, baratos e fáceis" />
            <FeatureItem text="Conteúdo direto, sem enrolação" />
            <FeatureItem text="Acesso imediato após a compra" />
          </div>
        </div>
      </section>

      {/* 3. COMO FUNCIONA */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Como funciona</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Step number={1} text="Clique em comprar" icon={<MousePointerClick />} />
            <Step number={2} text="Faça o pagamento" icon={<ShoppingBag />} />
            <Step number={3} text="Receba o acesso automaticamente" icon={<Zap />} />
            <Step number={4} text="Comece a usar na hora" icon={<ChefHat />} />
          </div>
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-bold text-lg md:text-xl">
              <Lock className="w-5 h-5 flex-shrink-0" />
              <span>Sem login, sem senha, sem complicação.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PARA QUEM É */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Para quem é?</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Para quem cansou das mesmas receitas da internet",
              "Para quem gosta de comida simples e gostosa",
              "Para quem quer praticidade no dia a dia",
              "Para quem quer pagar pouco e receber muito"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <Star className="w-8 h-8 text-yellow-500 mr-4 flex-shrink-0" />
                <p className="text-lg font-semibold text-gray-800 leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VALOR */}
      <section className="py-24 px-6 bg-brand-gradient text-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-xl md:text-2xl font-medium mb-4 opacity-90 uppercase tracking-widest">Acesso completo por apenas</p>
          <div className="flex items-baseline justify-center mb-10">
            <span className="text-3xl md:text-4xl font-bold mr-2">R$</span>
            <span className="text-7xl md:text-9xl font-black">10,90</span>
          </div>
          <Button className="w-full md:w-auto px-16 py-6 text-2xl shadow-2xl bg-white text-brand hover:bg-gray-100">
            COMPRAR AGORA
          </Button>
          <p className="mt-8 text-blue-200 font-medium">Pagamento único. Sem mensalidades.</p>
        </div>
        {/* Background svg pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-3/4">
            <path fill="#FFF" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.6,-31.3,86.9,-15.7,85.2,-0.9C83.6,13.8,77.1,27.7,68.4,39.9C59.8,52.2,49,62.8,36.4,70.5C23.7,78.2,9.2,83,1,81.3C-7.2,79.5,-23.7,71.2,-36.4,62.4C-49,53.5,-57.8,44.1,-65.4,33.2C-73,22.3,-79.3,9.8,-79.5,-2.9C-79.6,-15.6,-73.6,-28.4,-64.8,-39.3C-56,-50.2,-44.4,-59.1,-32.4,-67.2C-20.4,-75.3,-8.1,-82.6,6,-92.9C20.1,-103.2,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
      </section>

      {/* 6. GARANTIA / CONFIANÇA */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="font-bold text-xl mb-1">Pagamento Seguro</h3>
              <p className="text-gray-500">Ambiente 100% criptografado e seguro.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="font-bold text-xl mb-1">Acesso Imediato</h3>
              <p className="text-gray-500">O conteúdo é liberado na mesma hora.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="font-bold text-xl mb-1">Produto Digital</h3>
              <p className="text-gray-500">Sem frete, sem espera. Direto no seu celular.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RODAPÉ */}
      <footer className="bg-gray-950 text-gray-500 py-12 px-6 text-center border-t border-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center opacity-30 grayscale hover:grayscale-0 transition-all cursor-default">
            <img src={LOGO_URL} alt="Mini Logo" className="w-10 h-10 rounded-lg" />
          </div>
          <p className="font-bold text-gray-300 mb-2 text-lg">Receitas Secretas</p>
          <p className="mb-4 text-sm">Conteúdo digital para uso pessoal. Proibida a revenda.</p>
          <div className="h-px bg-gray-800 w-24 mx-auto mb-8"></div>
          <p className="text-xs opacity-50 uppercase tracking-widest">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Sticky Bottom CTA for Mobile */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md shadow-[0_-8px_30px_rgba(0,0,0,0.12)] transition-transform duration-500 transform md:hidden z-50 ${showStickyCta ? 'translate-y-0' : 'translate-y-full'}`}>
        <a 
          href={CTA_LINK}
          className="flex items-center justify-between w-full bg-green-500 text-white px-6 py-4 rounded-2xl font-black text-lg active:scale-95 transition-transform"
        >
          <span>COMPRAR AGORA</span>
          <span className="bg-black/10 px-3 py-1 rounded-lg text-sm">R$ 10,90</span>
        </a>
      </div>
    </div>
  );
};

export default App;
