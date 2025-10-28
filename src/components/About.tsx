import { Leaf, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const About = () => {
  return (
    <section id="sobre-candea" className="py-24 px-6 bg-card">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Sobre Candea</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="prose prose-lg max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg leading-relaxed text-foreground/80 mb-6">
            Candea nació del deseo de crear luz y calma.
          </p>
          <p className="text-lg leading-relaxed text-foreground/80 mb-6">
            Hechas a mano con cera de alta calidad, cada vela combina diseño modular, colorido y elegancia atemporal.
            Perfectas como regalo original o como una pieza artística para el hogar.
          </p>
          <p className="text-lg leading-relaxed text-foreground/80 mb-6">
            Su combustión limpia y uniforme transforma cada instante en una experiencia sensorial.
          </p>
          <p className="text-lg leading-relaxed text-foreground/80 font-medium">
            En Candea creemos que encender una vela es más que un gesto: es un ritual.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 rounded-2xl bg-background hover:shadow-lg transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
              <Leaf className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">Sostenibles</h3>
            <p className="text-muted-foreground">Respetamos el planeta en cada paso del proceso</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-background hover:shadow-lg transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Naturales</h3>
            <p className="text-muted-foreground">Cera de alta calidad y combustión limpia</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-background hover:shadow-lg transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/40 rounded-full mb-4">
              <Heart className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">Hechas con amor</h3>
            <p className="text-muted-foreground">Cada vela es única, creada con dedicación</p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">
            🌿 Sostenibles | Naturales | Hechas con amor<br />
            📍 Desde Valencia, con calma.
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://www.etsy.com/shop/candeacandle" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Descubre nuestras velas en Etsy
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
