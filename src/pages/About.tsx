import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, Heart, CheckCircle, Star, TrendingUp, Shield } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Proven expertise in interior and exterior design projects"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled designers and craftsmen dedicated to excellence"
    },
    {
      icon: Target,
      title: "Client-Focused",
      description: "Your vision is our priority, every step of the way"
    },
    {
      icon: Heart,
      title: "Quality Craftsmanship",
      description: "Premium materials and attention to detail in every project"
    }
  ];

  const values = [
    "Personalized design solutions tailored to your lifestyle",
    "Transparent pricing with no hidden costs",
    "On-time project delivery and professional management",
    "Premium quality materials and sustainable practices",
    "Comprehensive after-service support and warranty",
    "Innovative designs that blend aesthetics with functionality"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6">
              About <span className="text-gold">LuxeSpaces</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are passionate designers and craftsmen dedicated to transforming spaces into extraordinary experiences. 
              With over 15 years of expertise, we bring dreams to life through innovative design and meticulous execution.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={aboutImage} 
                alt="Our Team" 
                className="rounded-lg shadow-xl hover-lift"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-playfair mb-4 flex items-center">
                  <Target className="text-gold mr-3" size={32} />
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create exceptional spaces that inspire and elevate everyday living. We believe that great design 
                  has the power to transform not just spaces, but lives, and we're committed to making that transformation 
                  accessible, affordable, and extraordinary.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold font-playfair mb-4 flex items-center">
                  <Star className="text-gold mr-3" size={32} />
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the most trusted name in interior and exterior design, known for our unwavering commitment 
                  to quality, innovation, and client satisfaction. We envision a future where beautiful, functional 
                  design is the standard, not the exception.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Excellence, expertise, and exceptional service in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                    <feature.icon className="text-gold" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold font-playfair mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Our Commitment to You</h2>
              <p className="text-lg text-muted-foreground">
                What sets us apart and keeps our clients coming back
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-gold flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-2 p-8 bg-charcoal text-white">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 bg-gold rounded-full flex items-center justify-center">
                        <span className="text-5xl font-bold text-charcoal">SS</span>
                      </div>
                      <h3 className="text-2xl font-bold font-playfair mb-1">Mr. S. Sathiyaraj</h3>
                      <p className="text-gold mb-4">Founder & Lead Designer</p>
                      <p className="text-sm text-gray-300">Need any help?</p>
                      <a href="tel:+919790184627" className="text-xl font-semibold text-gold hover:text-gold-light transition-colors">
                        +91 97901 84627
                      </a>
                    </div>
                  </div>
                  <div className="md:col-span-3 p-8">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      With over 15 years of experience in interior and exterior design, I founded LuxeSpaces with a 
                      singular vision: to make exceptional design accessible to everyone.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Every project we undertake is a testament to our commitment to excellence, creativity, and 
                      client satisfaction. I personally oversee each design to ensure it meets our exacting standards.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
