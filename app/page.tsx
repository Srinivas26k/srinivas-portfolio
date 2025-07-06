import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Download,
  Calendar,
  Mail,
  Linkedin,
  Github,
  Bot,
  Cog,
  Code,
  ExternalLink,
  Star,
  Quote,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getServices, getFeaturedProjects, getFeaturedTestimonials, getAuthor } from "@/lib/sanity"
import { urlFor } from "@/lib/sanity"

const iconMap = {
  bot: Bot,
  cog: Cog,
  code: Code,
}

export default async function HomePage() {
  const [services, featuredProjects, testimonials, author] = await Promise.all([
    getServices(),
    getFeaturedProjects(),
    getFeaturedTestimonials(),
    getAuthor(),
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-800">{author?.name || "Srinivas Nampalli"}</div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-slate-600 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="/projects" className="text-slate-600 hover:text-blue-600 transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="text-slate-600 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="w-4 h-4 mr-2" />
              Book Consultation
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Badge className="bg-green-100 text-green-800 border-green-300">Available for Projects</Badge>
                <Badge variant="outline">500+ LinkedIn Connections</Badge>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                {author?.title || "Mechanical Engineer"}
                <span className="block text-blue-600">AI Solutions Specialist</span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Bridging Mechanical Engineering Excellence with AI Innovation. I help automotive, aerospace, and
                engineering companies optimize their workflows through intelligent automation and precision design.
              </p>

              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Proven experience at Ford, GE Aerospace, and IIT Ropar</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-8">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-slate-700">AI-powered solutions for mechanical engineering challenges</span>
              </div>

              <div className="flex items-center space-x-2 mb-10">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-slate-700">From concept to deployment - complete engineering solutions</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View My Work
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>

              <div className="flex items-center space-x-6">
                {author?.linkedin && (
                  <Link href={author.linkedin} className="text-slate-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                )}
                {author?.github && (
                  <Link href={author.github} className="text-slate-400 hover:text-blue-600 transition-colors">
                    <Github className="w-6 h-6" />
                  </Link>
                )}
                {author?.email && (
                  <Link
                    href={`mailto:${author.email}`}
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                  </Link>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-slate-100 shadow-2xl">
                {author?.image ? (
                  <Image
                    src={urlFor(author.image).width(500).height(600).url() || "/placeholder.svg"}
                    alt={`${author.name} - Professional Portrait`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <Image
                    src="/placeholder.svg?height=600&width=500"
                    alt="Professional Portrait"
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="text-2xl font-bold text-slate-900">15+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="text-2xl font-bold text-blue-600">5</div>
                <div className="text-slate-600">Industry Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals - Company Logos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-slate-600">Experience working with top-tier organizations</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-lg">FORD</span>
              </div>
              <p className="text-sm text-slate-500">EV Engineering</p>
            </div>
            <div className="text-center">
              <div className="h-16 bg-slate-800 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-lg">GE</span>
              </div>
              <p className="text-sm text-slate-500">Aerospace</p>
            </div>
            <div className="text-center">
              <div className="h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-lg">IIT</span>
              </div>
              <p className="text-sm text-slate-500">Research</p>
            </div>
            <div className="text-center">
              <div className="h-16 bg-green-700 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-lg">DRDO</span>
              </div>
              <p className="text-sm text-slate-500">Defense</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Services & Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive engineering services that bridge traditional mechanical design with cutting-edge AI
              solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service: any, index: number) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Bot
              return (
                <Card
                  key={service._id}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                      <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                    <p className="text-slate-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features?.slice(0, 3).map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href={`/services/${service.slug.current}`}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real-world engineering solutions that demonstrate the power of combining traditional expertise with AI
              innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project: any) => (
              <Card key={project._id} className="overflow-hidden shadow-lg border-0 hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-slate-100">
                  {project.mainImage ? (
                    <Image
                      src={urlFor(project.mainImage).width(400).height(300).url() || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600">{project.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{project.company}</Badge>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <p className="text-slate-600 text-sm">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.slice(0, 3).map((tech: string, idx: number) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button size="sm" variant="outline" className="w-full bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Client Testimonials</h2>
            <p className="text-xl text-slate-600">What industry professionals say about working with me</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial: any) => (
              <Card key={testimonial._id} className="p-8 shadow-lg border-0">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-blue-600 mb-4" />
                  <p className="text-slate-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    {testimonial.image && (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={urlFor(testimonial.image).width(48).height(48).url() || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-slate-500 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Engineering Workflow?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how AI can optimize your mechanical engineering projects and business processes.
            </p>
            <p className="text-blue-100 mb-8">
              <strong>I'll respond within 24 hours</strong> - guaranteed.
            </p>
          </div>

          <Card className="p-8 shadow-2xl border-0">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Project Type</label>
                <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500">
                  <option>Select service type</option>
                  {services.map((service: any) => (
                    <option key={service._id} value={service.slug.current}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Budget Range</label>
                <select className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500">
                  <option>Select budget range</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Project Details *</label>
                <Textarea placeholder="Tell me about your project, timeline, and specific requirements..." rows={4} />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" size="lg" className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
                <Button type="button" size="lg" variant="outline" className="flex-1 bg-transparent">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{author?.name || "Srinivas Nampalli"}</h3>
              <p className="text-slate-300 mb-4">
                {author?.title || "Mechanical Engineer specializing in AI-driven engineering solutions."}
              </p>
              <div className="flex space-x-4">
                {author?.linkedin && (
                  <Link href={author.linkedin} className="text-slate-400 hover:text-white">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                )}
                {author?.github && (
                  <Link href={author.github} className="text-slate-400 hover:text-white">
                    <Github className="w-5 h-5" />
                  </Link>
                )}
                {author?.email && (
                  <Link href={`mailto:${author.email}`} className="text-slate-400 hover:text-white">
                    <Mail className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-300">
                {services.slice(0, 3).map((service: any) => (
                  <li key={service._id}>
                    <Link href={`/services/${service.slug.current}`} className="hover:text-white">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <Link href="/projects" className="hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-300">
                <li>{author?.location || "Hyderabad, India"}</li>
                <li>Available Worldwide</li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 {author?.name || "Srinivas Nampalli"}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
