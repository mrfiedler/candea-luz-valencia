import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import candlesDisplay from "@/assets/candles-display.jpg";
import candleStack from "@/assets/candle-stack.jpg";
import candleStrawberry from "@/assets/candle-strawberry.jpg";
import candlesLit from "@/assets/candles-lit.jpg";

const products = [
  {
    image: candlesDisplay,
    alt: "Velas artesanales decorativas con formas modulares coloridas",
    caption: "Cada aroma cuenta una historia.",
  },
  {
    image: candleStack,
    alt: "Vela artesanal apilable hecha a mano con diseño geométrico",
    caption: "El arte de la calma, en una vela.",
  },
  {
    image: candleStrawberry,
    alt: "Vela decorativa sostenible con forma de fresa",
    caption: "Diseño único y sostenible.",
  },
  {
    image: candlesLit,
    alt: "Velas naturales encendidas con formas florales",
    caption: "Momentos que merecen luz.",
  },
];

const Gallery = () => {
  return (
    <section id="coleccion" className="py-24 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Nuestra Colección</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada vela es una pieza única, creada artesanalmente con dedicación y amor por el detalle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center bg-gradient-to-t from-card to-transparent">
                <p className="text-lg font-light italic text-foreground/90">
                  {product.caption}
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4 border-primary/30 hover:border-primary hover:bg-primary/5 rounded-full"
                  asChild
                >
                  <a href="https://www.etsy.com/shop/candeacandle" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver en Etsy
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
