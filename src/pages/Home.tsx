import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Paintbrush, Home as HomeIcon, Building2, Sofa, Hammer, Sparkles, Award, Users, MessageCircle, CheckCircle2, Phone } from "lucide-react";
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

  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin with a one-on-one meeting to understand your vision, preferences, and requirements."
    },
    {
      number: "02",
      title: "Design Planning",
      description: "Selecting materials, layouts, and furnishings, creating detailed 3D renderings for approval."
    },
    {
      number: "03",
      title: "Project Execution",
      description: "With approved designs, we manage and coordinate all aspects of construction and installation."
    },
    {
      number: "04",
      title: "Final Review",
      description: "Thorough walkthrough to ensure every detail meets your expectations before handover."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "LuxeSpaces transformed our apartment into a stylish, functional home. Their attention to detail and creative ideas exceeded our expectations. Highly recommended!",
      rating: 5
    },
    {
      name: "Arjun Patel",
      location: "Bangalore",
      text: "The team handled our office renovation with professionalism and care. The new design has truly elevated our workspace atmosphere.",
      rating: 5
    },
    {
      name: "Meena Reddy",
      location: "Chennai",
      text: "From the first consultation to the final reveal, LuxeSpaces made our dream home a reality. Their personalized approach is unmatched.",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      title: "Tailored Design Solutions",
      description: "We craft custom interiors that capture your personality and suit your lifestyle perfectly."
    },
    {
      title: "Seamless Project Management",
      description: "Our team oversees every phase, ensuring each detail is handled with precision and care."
    },
    {
      title: "Collaborative Partnership",
      description: "Your feedback shapes every step, guaranteeing a finished space that truly feels like yours."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover-lift transition-all"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-gold font-semibold mb-4 animate-fade-in">→ LuxeSpaces Design Studio</p>
          <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 animate-fade-in">
            Crafting Limitless Possibilities for Your <span className="text-gold">Dream Spaces</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
            Bringing your vision to life with tailored solutions that reflect your style and needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-semibold text-lg px-8 py-6">
                Get Free Consultation <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal text-lg px-8 py-6">
                <Phone className="mr-2" size={20} /> Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold font-playfair text-gold mb-2">15+</h3>
              <p className="text-gray-300">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold font-playfair text-gold mb-2">500+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold font-playfair text-gold mb-2">95%</h3>
              <p className="text-gray-300">Positive Feedback</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold font-playfair text-gold mb-2">100%</h3>
              <p className="text-gray-300">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold mb-2">ABOUT US</p>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
                Our passion for design, <span className="text-gold">your vision realized</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our skilled design team partners closely with you to capture your vision and bring it to life with meticulous attention to every detail. Whether it's refreshing a single room or redesigning an entire home.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-gold flex-shrink-0" size={24} />
                  <span className="text-foreground">Creative Expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-gold flex-shrink-0" size={24} />
                  <span className="text-foreground">Client-Focused Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-gold flex-shrink-0" size={24} />
                  <span className="text-foreground">Quality Craftsmanship</span>
                </div>
              </div>
              <Link to="/about">
                <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-charcoal">
                  Read More About Us
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={project1} alt="Design 1" className="rounded-lg hover-lift" />
              <img src={project2} alt="Design 2" className="rounded-lg hover-lift mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold mb-2">WHY CHOOSE US</p>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
              An Inside Look at Our <span className="text-gold">Creative Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Journey with us from initial inspiration to final reveal as we turn your ideas into reality through imaginative design, teamwork, and skilled execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="hover-lift border-border text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                    <div className="text-gold text-2xl font-bold">{String(index + 1).padStart(2, '0')}</div>
                  </div>
                  <h3 className="text-xl font-semibold font-playfair mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold mb-2">OUR SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
              Innovative design services <span className="text-gold">for every need</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Personalized interior and exterior solutions from concept to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift border-border group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mb-4 bg-cream rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
                    <service.icon className="text-gold group-hover:text-charcoal transition-colors" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold font-playfair mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-semibold">
                See All Services <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold mb-2">HOW WE WORK</p>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
              From concept to <span className="text-gold">completion</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our design process guides you seamlessly from initial ideas to final execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold font-playfair text-charcoal">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold font-playfair mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gold/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold mb-2">OUR PROJECTS</p>
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

      {/* Testimonials */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold mb-2">CLIENT TESTIMONIALS</p>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
              Trusted by thousands of <span className="text-gold">people & companies</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/5 border-white/10 hover-lift">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-gold">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                      <span className="text-charcoal font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-charcoal">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our expert design team
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-charcoal hover:bg-charcoal/90 text-white font-semibold text-lg px-8 py-6">
              Start Your Project Today <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
