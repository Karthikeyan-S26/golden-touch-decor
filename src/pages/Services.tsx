import { Card, CardContent } from "@/components/ui/card";
import { Home, Building2, Hammer, Paintbrush, Sofa, Sparkles, Grid3x3, ChefHat } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Interior Design",
      description: "Transform your indoor spaces with our comprehensive interior design services. From concept to completion, we create personalized environments that reflect your style and enhance your lifestyle.",
      features: ["Space Planning", "Color Consultation", "Custom Furnishings", "Lighting Design"]
    },
    {
      icon: Building2,
      title: "Exterior Design",
      description: "Elevate your property's curb appeal with stunning exterior design solutions. We blend aesthetics with functionality to create impressive outdoor spaces.",
      features: ["Facade Design", "Landscaping", "Outdoor Lighting", "Material Selection"]
    },
    {
      icon: Hammer,
      title: "False Ceiling",
      description: "Add elegance and sophistication to your spaces with our custom false ceiling designs. Modern patterns, concealed lighting, and premium finishes.",
      features: ["Gypsum Ceilings", "POP Designs", "Wooden Panels", "LED Integration"]
    },
    {
      icon: ChefHat,
      title: "Modular Kitchen",
      description: "Design the kitchen of your dreams with our modular solutions. Functional layouts, premium materials, and smart storage systems.",
      features: ["Custom Cabinets", "Smart Storage", "Premium Hardware", "Appliance Integration"]
    },
    {
      icon: Paintbrush,
      title: "Painting Services",
      description: "Professional painting services that bring life to your walls. Expert color consultation and flawless application for lasting beauty.",
      features: ["Interior Painting", "Exterior Painting", "Texture Finishes", "Color Consultation"]
    },
    {
      icon: Sofa,
      title: "Furniture Solutions",
      description: "Custom and curated furniture pieces that perfectly complement your space. From modern to classic, we offer comprehensive furniture solutions.",
      features: ["Custom Furniture", "Space Optimization", "Material Selection", "Installation"]
    },
    {
      icon: Sparkles,
      title: "Renovation",
      description: "Complete renovation services to breathe new life into your existing spaces. Modern upgrades while preserving character.",
      features: ["Full Renovations", "Partial Updates", "Structural Changes", "Modern Upgrades"]
    },
    {
      icon: Grid3x3,
      title: "Flooring & Tiling",
      description: "Premium flooring and tiling solutions that combine durability with style. Expert installation and wide material selection.",
      features: ["Tile Installation", "Hardwood Flooring", "Marble & Granite", "Vinyl & Laminate"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6">
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive design and renovation solutions tailored to transform your vision into reality
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift border-border overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-14 h-14 bg-cream rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="text-gold" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-playfair mb-2">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to get started? Contact us today for a free consultation
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-gold hover:bg-gold-dark text-charcoal font-semibold text-lg px-8 py-4 rounded-md transition-colors"
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
