import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";
import candlesMarket from "@/assets/candles-market.jpg";

const Ritual = () => {
  return (
    <section id="monta-tu-vela" className="py-24 px-6 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={candlesMarket} 
                alt="Artesana de Candea mostrando velas artesanales hechas a mano en mercado de Valencia"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Monta tu vela
            </h2>
            
            <p className="text-xl text-foreground/80 mb-6 leading-relaxed">
              Elige una vela, enciéndela, respira y crea tu momento.
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Deja que la luz te acompañe en tus instantes de calma, creatividad o celebración.
              Cada llama es una invitación a estar presente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://www.etsy.com/shop/candeacandle" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Compra ahora en Etsy
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-foreground/20 hover:border-primary hover:bg-primary/5 rounded-full px-8"
                asChild
              >
                <a href="https://www.instagram.com/candea_candles/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-5 w-5" />
                  Contáctanos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ritual;
