import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Cog, Code, ArrowRight, CheckCircle, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"
import { getServices } from "@/lib/sanity"

export default async function ServicesPage() {
  const services = await getServices()

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Bot":
        return Bot
      case "Cog":
        return Cog
      case "Code":
        return Code
      default:
        return Bot // Default icon
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-slate-800">
              Srinivas Nampalli
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-blue-600 font-medium">
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

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Services & Solutions</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive engineering services that bridge traditional mechanical design with cutting-edge AI
              solutions. From concept to deployment.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = getIconComponent(service.icon)
              return (
                <Card key={index} className="overflow-hidden shadow-xl border-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <CardHeader className="p-12 bg-white">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                          <div className="flex items-center space-x-4 mt-2">
                            <Badge variant="outline">{service.pricing}</Badge>
                            <Badge variant="secondary">{service.timeline}</Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-6 text-lg">{service.longDescription}</p>

                      <div className="mb-8">
                        <h4 className="font-semibold text-slate-900 mb-4">What's Included:</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {service.features.map((feature: string, idx: number) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                              <span className="text-slate-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
                          <Link href={`/services/${service.slug.current}`}>
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                        <Button variant="outline" className="flex-1 bg-transparent">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Call
                        </Button>
                      </div>
                    </CardHeader>

                    <CardContent className="p-12 bg-slate-50">
                      <h4 className="font-semibold text-slate-900 mb-6">Technologies & Tools:</h4>
                      <div className="flex flex-wrap gap-3 mb-8">
                        {service.technologies.map((tech: string, idx: number) => (
                          <Badge key={idx} variant="outline" className="bg-white px-3 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg">
                          <h5 className="font-semibold text-slate-900 mb-3">Process Overview</h5>
                          <div className="space-y-3">
                            {service.process.map((step: string, idx: number) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                  {idx + 1}
                                </div>
                                <span className="text-slate-600">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* CTA Section */}
          <section className="mt-20 bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and how I can help bring your engineering vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Portfolio
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
