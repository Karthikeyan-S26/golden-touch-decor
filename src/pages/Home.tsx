import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Paintbrush, Home as HomeIcon, Building2, Sofa, Hammer, Sparkles, Award, Users, MessageCircle, CheckCircle2, Phone, Zap, Clock, ShieldCheck, Palette, Layout, Lightbulb } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Home = () => {
  const services = [
    { 
      icon: HomeIcon, 
      title: "Residential Interior", 
      description: "Personalized living spaces that reflect your unique style and comfort",
      features: ["Space Planning", "Color Schemes", "Furniture Selection"]
    },
    { 
      icon: Building2, 
      title: "Commercial Design", 
      description: "Professional environments that enhance productivity and brand identity",
      features: ["Office Layouts", "Retail Spaces", "Hospitality"]
    },
    { 
      icon: Palette, 
      title: "Renovation & Remodeling", 
      description: "Transform existing spaces with modern upgrades and fresh perspectives",
      features: ["Kitchen Remodels", "Bathroom Updates", "Full Home Renovations"]
    },
    { 
      icon: Paintbrush, 
      title: "Premium Painting", 
      description: "Expert color consultation and flawless application techniques",
      features: ["Texture Finishes", "Accent Walls", "Exterior Painting"]
    },
    { 
      icon: Layout, 
      title: "Custom Furniture", 
      description: "Bespoke furniture pieces designed to fit your space perfectly",
      features: ["Built-in Storage", "Designer Pieces", "Space Optimization"]
    },
    { 
      icon: Hammer, 
      title: "Ceiling Design", 
      description: "Sophisticated false ceiling solutions with integrated lighting",
      features: ["Gypsum Ceilings", "POP Designs", "LED Integration"]
    },
  ];

  const featuredProjects = [
    { 
      image: project1, 
      title: "Modern Luxury Villa", 
      category: "Residential Interior",
      location: "Mumbai",
      area: "3500 sq ft"
    },
    { 
      image: project2, 
      title: "Corporate Office", 
      category: "Commercial Design",
      location: "Bangalore",
      area: "5000 sq ft"
    },
    { 
      image: project3, 
      title: "Boutique Hotel Suite", 
      category: "Hospitality Design",
      location: "Goa",
      area: "1200 sq ft"
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation & Brief",
      description: "In-depth discussion to understand your vision, lifestyle, and specific requirements",
      icon: MessageCircle
    },
    {
      number: "02",
      title: "Design Development",
      description: "Creating detailed 3D renderings, material boards, and comprehensive design proposals",
      icon: Lightbulb
    },
    {
      number: "03",
      title: "Execution & Build",
      description: "Expert project management with quality craftsmanship and timely delivery",
      icon: Hammer
    },
    {
      number: "04",
      title: "Handover & Support",
      description: "Final walkthrough, adjustments, and ongoing after-service support",
      icon: ShieldCheck
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      project: "Luxury Apartment",
      text: "The team transformed our 3BHK into a stunning modern masterpiece. Every detail was meticulously planned and executed. Their 3D renderings helped us visualize the final outcome perfectly.",
      rating: 5
    },
    {
      name: "Arjun Mehta",
      location: "Bangalore",
      project: "Tech Office",
      text: "Outstanding commercial design services! They created a collaborative workspace that boosted our team's productivity by 40%. Professional, on-time, and within budget.",
      rating: 5
    },
    {
      name: "Meena & Rajesh",
      location: "Chennai",
      project: "Villa Renovation",
      text: "From initial consultation to final handover, the experience was seamless. They listened to our needs and delivered beyond expectations. Highly recommend for luxury renovations!",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "15+ Years Expertise",
      description: "Proven track record with 500+ successful projects across residential and commercial sectors"
    },
    {
      icon: Award,
      title: "Award-Winning Designs",
      description: "Recognized for innovative solutions and exceptional craftsmanship in interior design"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "99% project completion rate within agreed timelines using advanced project management"
    },
    {
      icon: ShieldCheck,
      title: "Quality Guarantee",
      description: "Premium materials, certified professionals, and comprehensive warranty on all work"
    },
    {
      icon: Users,
      title: "Client-First Approach",
      description: "Personalized service with dedicated project managers for seamless communication"
    },
    {
      icon: Palette,
      title: "Turnkey Solutions",
      description: "End-to-end services from concept to completion, including permits and approvals"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover-lift transition-all animate-float gold-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 pattern-grid opacity-20" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-gold/30 rounded-full animate-float" />
        <div className="absolute bottom-32 right-20 w-32 h-32 border-2 border-gold/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="mb-6 animate-slide-up">
            <span className="inline-block px-6 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full text-gold font-semibold text-sm tracking-wider">
              ★ PREMIUM INTERIOR & EXTERIOR DESIGN STUDIO
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold font-playfair mb-8 animate-slide-up leading-tight">
            Crafting <span className="text-gradient">Limitless</span> Possibilities for Your Dream Spaces
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto animate-slide-up leading-relaxed">
            Award-winning design solutions combining innovation, elegance, and functionality. Transform your vision into extraordinary reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-bold text-lg px-10 py-7 shine-effect rounded-lg group">
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
              </Button>
            </Link>
            <Link to="/projects">
              <Button size="lg" variant="outline" className="glass-effect text-white border-white/30 hover:bg-white/10 text-lg px-10 py-7 rounded-lg backdrop-blur-md">
                View Portfolio
              </Button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-gold rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-20 gradient-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="mb-4 inline-block">
                <div className="w-20 h-20 mx-auto bg-gold/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="text-gold" size={36} />
                </div>
              </div>
              <h3 className="text-6xl font-bold font-playfair text-gold mb-2">15+</h3>
              <p className="text-gray-300 font-medium">Years of Excellence</p>
            </div>
            <div className="text-center group">
              <div className="mb-4 inline-block">
                <div className="w-20 h-20 mx-auto bg-gold/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="text-gold" size={36} />
                </div>
              </div>
              <h3 className="text-6xl font-bold font-playfair text-gold mb-2">500+</h3>
              <p className="text-gray-300 font-medium">Projects Delivered</p>
            </div>
            <div className="text-center group">
              <div className="mb-4 inline-block">
                <div className="w-20 h-20 mx-auto bg-gold/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="text-gold" size={36} />
                </div>
              </div>
              <h3 className="text-6xl font-bold font-playfair text-gold mb-2">95%</h3>
              <p className="text-gray-300 font-medium">Client Satisfaction</p>
            </div>
            <div className="text-center group">
              <div className="mb-4 inline-block">
                <div className="w-20 h-20 mx-auto bg-gold/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="text-gold" size={36} />
                </div>
              </div>
              <h3 className="text-6xl font-bold font-playfair text-gold mb-2">99%</h3>
              <p className="text-gray-300 font-medium">On-Time Completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Premium Design */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cream/30 rounded-l-[100px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm tracking-wider uppercase">WHY CHOOSE LUXESPACES</span>
            <h2 className="text-5xl md:text-6xl font-bold font-playfair mt-4 mb-6">
              Excellence in Every <span className="text-gradient">Detail</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Combining technical expertise with creative vision to deliver exceptional spaces that inspire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="hover-lift border-2 border-transparent hover:border-gold/30 transition-all shine-effect group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <item.icon className="text-charcoal" size={32} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold font-playfair mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Advanced Grid */}
      <section className="section-padding bg-cream relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm tracking-wider uppercase">COMPREHENSIVE SERVICES</span>
            <h2 className="text-5xl md:text-6xl font-bold font-playfair mt-4 mb-6">
              Premium Design <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Full-spectrum design services tailored to residential and commercial excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative bg-charcoal p-8 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16" />
                    <div className="relative z-10">
                      <service.icon className="text-gold mb-4 group-hover:scale-110 transition-transform" size={40} />
                      <h3 className="text-2xl font-bold font-playfair text-white mb-2">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-8 bg-white">
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle2 className="text-gold flex-shrink-0" size={18} />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/services">
              <Button size="lg" className="bg-charcoal hover:bg-charcoal/90 text-white font-bold text-lg px-10 py-7 rounded-lg shine-effect">
                Explore All Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Timeline - Professional */}
      <section className="section-padding gradient-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm tracking-wider uppercase">OUR PROCESS</span>
            <h2 className="text-5xl md:text-6xl font-bold font-playfair mt-4 mb-6">
              From Vision to <span className="text-gold">Reality</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A streamlined, transparent process ensuring excellence at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-gold via-gold/50 to-gold" style={{ width: '75%' }} />
            
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center group">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 mx-auto bg-gold rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all shadow-2xl gold-glow">
                      <step.icon className="text-charcoal" size={36} />
                    </div>
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-charcoal border-4 border-gold rounded-full flex items-center justify-center font-bold text-gold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold font-playfair mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Premium Gallery */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm tracking-wider uppercase">PORTFOLIO SHOWCASE</span>
            <h2 className="text-5xl md:text-6xl font-bold font-playfair mt-4 mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our award-winning transformations across luxury residences and commercial spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl hover-lift shadow-xl">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-4 py-1 bg-gold text-charcoal text-xs font-bold rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold font-playfair mb-2">{project.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-white/80">
                    <span>📍 {project.location}</span>
                    <span>📐 {project.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/projects">
              <Button size="lg" variant="outline" className="border-2 border-gold text-gold hover:bg-gold hover:text-charcoal font-bold text-lg px-10 py-7 rounded-lg">
                View Complete Portfolio
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Cards */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-bold text-sm tracking-wider uppercase">CLIENT SUCCESS STORIES</span>
            <h2 className="text-5xl md:text-6xl font-bold font-playfair mt-4 mb-6">
              What Our Clients <span className="text-gradient">Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real experiences from homeowners and businesses we've transformed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift border-0 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16" />
                <CardContent className="p-8 relative">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-gold text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-8 italic leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-charcoal font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gold font-semibold">{testimonial.project}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="section-padding gradient-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-6 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full text-gold font-semibold text-sm tracking-wider mb-8">
            START YOUR TRANSFORMATION TODAY
          </span>
          <h2 className="text-5xl md:text-7xl font-bold font-playfair mb-8 leading-tight">
            Ready to Create Your <br/><span className="text-gold">Dream Space?</span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's transform your vision into a stunning reality with our award-winning design expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-bold text-xl px-12 py-8 shine-effect rounded-lg shadow-2xl">
                Get Free Consultation
                <ArrowRight className="ml-3" size={24} />
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button size="lg" variant="outline" className="glass-effect text-white border-2 border-white/30 hover:bg-white/10 font-bold text-xl px-12 py-8 rounded-lg backdrop-blur-md">
                <Phone className="mr-3" size={24} /> Call Us Now
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <ShieldCheck className="text-gold mx-auto mb-2" size={32} />
              <p className="text-sm text-gray-300">Licensed & Insured</p>
            </div>
            <div className="text-center">
              <Award className="text-gold mx-auto mb-2" size={32} />
              <p className="text-sm text-gray-300">Award-Winning</p>
            </div>
            <div className="text-center">
              <Clock className="text-gold mx-auto mb-2" size={32} />
              <p className="text-sm text-gray-300">24/7 Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
