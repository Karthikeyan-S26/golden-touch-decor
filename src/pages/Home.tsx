import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Paintbrush, Home as HomeIcon, Building2, Sofa, Hammer, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Home = () => {
  const services = [
    { icon: HomeIcon, title: "Interior Design", description: "Transform your indoor spaces" },
    { icon: Building2, title: "Exterior Design", description: "Beautiful outdoor aesthetics" },
    { icon: Sparkles, title: "Renovation", description: "Refresh and modernize" },
    { icon: Paintbrush, title: "Painting", description: "Professional color solutions" },
    { icon: Sofa, title: "Furniture", description: "Custom and curated pieces" },
    { icon: Hammer, title: "False Ceiling", description: "Elegant ceiling designs" },
  ];

  const featuredProjects = [
    { image: project1, title: "Luxury Living Room", category: "Interior" },
    { image: project2, title: "Modern Office Space", category: "Commercial" },
    { image: project3, title: "Elegant Bedroom", category: "Interior" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 animate-fade-in">
            Transform Your Spaces Into <span className="text-gold">Masterpieces</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
            Premium Interior & Exterior Design Solutions
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-semibold text-lg px-8 py-6 animate-fade-in">
              Get in Touch <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive design solutions tailored to your unique vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-cream rounded-full flex items-center justify-center">
                    <service.icon className="text-gold" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold font-playfair mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-charcoal">
                View All Services <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of stunning transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg hover-lift">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <p className="text-gold text-sm font-semibold mb-1">{project.category}</p>
                  <h3 className="text-white text-xl font-bold font-playfair">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-semibold">
                View All Projects <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our expert design team
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-semibold text-lg px-8 py-6">
              Start Your Project Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
