import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container max-w-4xl text-center relative z-10">
        <div className="mb-8 animate-in fade-in duration-1000">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Velas artesanales que iluminan
            <span className="block text-primary font-normal mt-2">con propósito</span>
          </h1>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in duration-1000 delay-300">
          Desde Valencia, con calma. Sostenibles, naturales y hechas con amor.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in duration-1000 delay-500">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://www.etsy.com/shop/candeacandle" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Comprar en Etsy
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-foreground/20 hover:border-primary hover:bg-primary/5 rounded-full px-8 py-6 text-base font-medium transition-all duration-300"
            asChild
          >
            <a href="https://www.instagram.com/candea_candles/" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Ver en Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
