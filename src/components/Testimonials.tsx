const testimonials = [
  "Una vela Candea transforma el ambiente.",
  "Calma, aroma y arte en cada detalle.",
  "Más que una vela, una experiencia.",
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Lo que dicen nuestros clientes
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start mb-4">
                <span className="text-4xl text-primary/30 font-serif leading-none">"</span>
              </div>
              <p className="text-lg font-light italic text-foreground/90 leading-relaxed">
                {testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
