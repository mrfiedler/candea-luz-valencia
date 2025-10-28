import { Instagram, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="py-16 px-6 bg-card border-t border-border/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-light mb-4 font-serif">Candea</h3>
          <p className="text-lg text-muted-foreground font-light italic">
            Hechas a mano con calma, desde el corazón.
          </p>
        </div>
        
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://www.instagram.com/candea_candles/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300 text-lg"
            aria-label="Visitar Instagram de Candea"
          >
            <Instagram className="w-6 h-6" />
            <span>Instagram</span>
          </a>
          
          <a 
            href="https://www.etsy.com/shop/candeacandle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300 text-lg"
            aria-label="Visitar tienda de Candea en Etsy"
          >
            <ExternalLink className="w-6 h-6" />
            <span>Etsy</span>
          </a>
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-2">📍 Valencia, España</p>
          <p>© {new Date().getFullYear()} Candea. Velas artesanales hechas con amor.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
