import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Calendar, Linkedin, Github, Clock, MessageSquare, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Get in touch via email",
      value: "srinivas@example.com",
      action: "Send Email",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Call for urgent inquiries",
      value: "+91 XXXXX XXXXX",
      action: "Call Now",
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a consultation call",
      value: "Available Mon-Fri, 9 AM - 6 PM IST",
      action: "Book Call",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "#",
      description: "Professional network",
    },
    {
      icon: Github,
      name: "GitHub",
      url: "#",
      description: "Code repositories",
    },
    {
      icon: MessageSquare,
      name: "WhatsApp",
      url: "#",
      description: "Quick messaging",
    },
  ]

  const services = [
    "AI Systems Development",
    "CAD/CAM Design",
    "Frontend Development",
    "Technical Consulting",
    "Project Management",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-800">Srinivas Nampalli</div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-slate-600 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="/about" className="text-slate-600 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="/services" className="text-slate-600 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="/projects" className="text-slate-600 hover:text-blue-600 transition-colors">
                Projects
              </a>
              <a href="/blog" className="text-slate-600 hover:text-blue-600 transition-colors">
                Blog
              </a>
              <a href="/contact" className="text-blue-600 font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Let's Work Together</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Ready to transform your engineering challenges into intelligent solutions? I'm here to help bridge the gap
              between traditional mechanical design and cutting-edge AI technology.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5 text-slate-500" />
              <span className="text-slate-600">Based in Hyderabad, India • Available Worldwide</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Send className="w-6 h-6 text-blue-600" />
                  <span>Send a Message</span>
                </CardTitle>
                <p className="text-slate-600">Fill out the form below and I'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company/Organization</label>
                  <Input placeholder="Your company name" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Service Interested In</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <Badge
                        key={service}
                        variant="outline"
                        className="cursor-pointer hover:bg-blue-50 hover:border-blue-300"
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Project Budget Range</label>
                  <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Select budget range</option>
                    <option>$1,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Project Details *</label>
                  <Textarea placeholder="Tell me about your project, timeline, and specific requirements..." rows={5} />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-slate-500 text-center">
                  By submitting this form, you agree to receive communications from me regarding your inquiry.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <method.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 mb-1">{method.title}</h3>
                        <p className="text-slate-600 text-sm mb-2">{method.description}</p>
                        <p className="text-slate-800 font-medium mb-3">{method.value}</p>
                        <Button size="sm" variant="outline">
                          {method.action}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Availability */}
              <Card className="p-6 bg-green-50 border-green-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-green-800">Currently Available</span>
                </div>
                <div className="space-y-2 text-sm text-green-700">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Response time: Within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Accepting new projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Next availability: Immediate</span>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Connect on Social Media</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <social.icon className="w-5 h-5 text-slate-600" />
                      <div>
                        <div className="font-medium text-slate-900">{social.name}</div>
                        <div className="text-sm text-slate-500">{social.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Calendly Integration */}
              <Card className="p-6 bg-blue-50 border-blue-200">
                <h3 className="font-semibold text-slate-900 mb-3">Schedule a Consultation</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Book a free 30-minute consultation to discuss your project requirements and how I can help.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6">
                <h3 className="font-semibold text-slate-900 mb-3">What's your typical project timeline?</h3>
                <p className="text-slate-600 text-sm">
                  Project timelines vary based on complexity. Simple CAD designs take 1-2 weeks, while complex AI
                  systems may require 4-8 weeks. I provide detailed timelines during consultation.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-slate-900 mb-3">Do you work with international clients?</h3>
                <p className="text-slate-600 text-sm">
                  Yes! I work with clients worldwide and am comfortable with different time zones. Most communication
                  happens via email, video calls, and project management tools.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-slate-900 mb-3">What's included in your AI consulting?</h3>
                <p className="text-slate-600 text-sm">
                  AI consulting includes problem analysis, solution design, model development, testing, deployment
                  guidance, and documentation. I also provide training if needed.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-slate-900 mb-3">How do you handle project payments?</h3>
                <p className="text-slate-600 text-sm">
                  I typically work with 50% upfront and 50% on completion for smaller projects. Larger projects are
                  broken into milestones with payments tied to deliverables.
                </p>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
