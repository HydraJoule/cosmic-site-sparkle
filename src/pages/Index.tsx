import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DemoCarousel } from "@/components/DemoCarousel";
import logoImage from "@/assets/cosmicsites-logo.png";
import { Sparkles, Rocket, Palette, Code, Users, Clock, CheckCircle, Star, ArrowRight, Mail, Phone } from "lucide-react";
const Index = () => {
  const orderFormUrl = "https://forms.gle/bG7UYfGypV8EJJis7";
  return <div className="min-h-screen bg-background font-lora">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={logoImage} alt="CosmicSites Logo" className="w-10 h-10" />
            <span className="text-2xl font-poppins font-bold text-foreground">CosmicSites</span>
          </div>
          <Button variant="hero" size="lg" onClick={() => window.open(orderFormUrl, '_blank')}>
            Order Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            ✨ Custom Website Design & Development
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-foreground mb-6 leading-tight">
            Transform Your Vision Into a
            <span className="text-accent"> Stunning Website</span>
          </h1>
          <p className="text-xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional, custom-built websites that capture your brand's essence and convert visitors into customers. 
            Modern design meets powerful functionality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gold" size="lg" className="text-lg px-8 py-4 h-auto" onClick={() => window.open(orderFormUrl, '_blank')}>
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4 h-auto">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-6">
              Why Choose CosmicSites?
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              We're not just developers – we're your digital partners. With years of experience crafting 
              websites that work beautifully and perform flawlessly, we bring your unique vision to life 
              with precision and care.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-soft hover:shadow-cosmic transition-all duration-300">
                <CardHeader>
                  <Sparkles className="w-12 h-12 text-accent mb-4 mx-auto" />
                  <CardTitle className="font-poppins">Custom Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every website is crafted from scratch to match your brand perfectly. No templates, just unique designs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-cosmic transition-all duration-300">
                <CardHeader>
                  <Rocket className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <CardTitle className="font-poppins">Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Modern technology ensures your site loads quickly and runs smoothly on any device.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft hover:shadow-cosmic transition-all duration-300">
                <CardHeader>
                  <Users className="w-12 h-12 text-success mb-4 mx-auto" />
                  <CardTitle className="font-poppins">Full Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    From concept to launch and beyond, we're here to support your digital journey every step of the way.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-6">
              Everything You Need for Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach ensures your website doesn't just look good – it performs exceptionally.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
            icon: Palette,
            title: "Modern Design",
            description: "Clean, contemporary layouts that impress visitors"
          }, {
            icon: Code,
            title: "Clean Code",
            description: "Well-structured, maintainable code for long-term success"
          }, {
            icon: Rocket,
            title: "SEO Optimized",
            description: "Built-in optimization to help you rank higher"
          }, {
            icon: Clock,
            title: "Fast Delivery",
            description: "Quick turnaround without compromising quality"
          }].map((feature, index) => <Card key={index} className="text-center border-0 shadow-soft hover:shadow-cosmic transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <CardTitle className="font-poppins text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Demo Screenshots Carousel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-6">
              See Our Work in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of the stunning websites we've created for our clients across various industries.
            </p>
          </div>
          <DemoCarousel />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-6">
              Simple Process, Amazing Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've streamlined our process to make getting your dream website as easy as 1-2-3.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[{
            step: "01",
            title: "Share Your Vision",
            description: "Fill out our simple form with your requirements, goals, and design preferences. We'll discuss your project in detail."
          }, {
            step: "02",
            title: "We Design & Build",
            description: "Our team creates your custom website using modern technology and best practices. You'll see progress updates along the way."
          }, {
            step: "03",
            title: "Launch & Celebrate",
            description: "After final approval, we launch your website and provide ongoing support. Your new digital presence is ready!"
          }].map((step, index) => <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-cosmic text-white rounded-full flex items-center justify-center text-xl font-bold font-poppins mx-auto mb-6 shadow-cosmic">
                  {step.step}
                </div>
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < 2 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-8"></div>}
              </div>)}
          </div>
        </div>
      </section>

      {/* Pricing & Delivery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-6">
                Investment & Timeline
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transparent pricing and clear timelines so you know exactly what to expect.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-accent/20 shadow-gold relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-accent text-foreground px-4 py-1 text-sm font-semibold">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle className="font-poppins text-2xl">Custom Website</CardTitle>
                  <CardDescription className="text-lg">Perfect for businesses and professionals</CardDescription>
                  <div className="text-3xl font-bold text-foreground">Starting at $2,997</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {["Custom responsive design", "5-10 pages of content", "Contact forms & integrations", "SEO optimization", "2 rounds of revisions", "30 days of support"].map((feature, index) => <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>)}
                  </ul>
                  <Button variant="hero" className="w-full mt-6" onClick={() => window.open(orderFormUrl, '_blank')}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="font-poppins text-2xl">E-commerce Site</CardTitle>
                  <CardDescription className="text-lg">Full online store with shopping cart</CardDescription>
                  <div className="text-3xl font-bold text-foreground">Starting at $4,997</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {["Everything in Custom Website", "Shopping cart & checkout", "Payment processing setup", "Product catalog management", "Inventory tracking", "Order management system"].map((feature, index) => <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>)}
                  </ul>
                  <Button variant="outline" className="w-full mt-6" onClick={() => window.open(orderFormUrl, '_blank')}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Badge variant="secondary" className="text-sm">
                ⚡ Typical delivery: 2-4 weeks
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it – hear from the businesses we've helped transform their online presence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{
            name: "Sarah Mitchell",
            company: "Mitchell Consulting",
            rating: 5,
            text: "CosmicSites delivered exactly what we needed – a professional website that truly represents our brand. The process was smooth and the results exceeded our expectations."
          }, {
            name: "David Rodriguez",
            company: "Rodriguez Photography",
            rating: 5,
            text: "Amazing work! My new portfolio website has already helped me book more clients. The design perfectly showcases my photography and the site loads incredibly fast."
          }, {
            name: "Lisa Chen",
            company: "Chen's Bakery",
            rating: 5,
            text: "The team at CosmicSites created a beautiful e-commerce site for our bakery. Online orders have increased by 300% since launch. Highly recommended!"
          }].map((testimonial, index) => <Card key={index} className="border-0 shadow-soft hover:shadow-cosmic transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-current" />)}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-poppins font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Got questions? We've got answers. Here are the most common questions about our services.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[{
              question: "How long does it take to build a website?",
              answer: "Most custom websites are completed within 2-4 weeks, depending on complexity and your responsiveness with feedback and content. E-commerce sites typically take 4-6 weeks due to additional functionality requirements."
            }, {
              question: "What do I need to provide to get started?",
              answer: "We'll need your branding materials (logo, colors, fonts if you have them), content for your pages, any images you want to use, and details about your goals and target audience. Don't worry if you don't have everything – we can help you develop what's missing."
            }, {
              question: "Will my website work on mobile devices?",
              answer: "Absolutely! Every website we build is fully responsive, meaning it will look and work perfectly on all devices – smartphones, tablets, laptops, and desktop computers. Mobile-first design is part of our standard process."
            }, {
              question: "Can I update the website myself after it's built?",
              answer: "Yes! We build websites with user-friendly content management systems that allow you to easily update text, images, and add new pages. We also provide training and documentation to help you manage your site confidently."
            }, {
              question: "What happens after my website launches?",
              answer: "We provide 30 days of complimentary support after launch to handle any issues or minor adjustments. After that, we offer ongoing maintenance packages to keep your site secure, updated, and performing optimally."
            }, {
              question: "Do you provide hosting for the website?",
              answer: "We can recommend and help set up reliable hosting solutions that fit your budget and performance needs. We'll handle the technical setup and can manage hosting as part of our ongoing maintenance services if desired."
            }].map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="font-poppins font-medium text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-cosmic">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-white mb-6">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have elevated their business with a custom CosmicSites website. 
            Let's bring your vision to life.
          </p>
          <Button variant="gold" size="lg" className="text-lg px-8 py-4 h-auto" onClick={() => window.open(orderFormUrl, '_blank')}>
            Start Your Project Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-white bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logoImage} alt="CosmicSites Logo" className="w-8 h-8" />
                <span className="text-xl font-poppins font-bold">CosmicSites</span>
              </div>
              <p className="text-white/80 mb-4">
                Creating stunning, custom websites that elevate your brand and drive results.
              </p>
            </div>
            
            <div>
              <h3 className="font-poppins font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-poppins font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>hello@cosmicsites.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(555) 123-COSMIC</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 CosmicSites. All rights reserved. Crafted with ❤️ for your success.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;