import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, CheckCircle, Calendar, ArrowRight, Zap, Target, Users, Code, Database, Brain } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AISystemsPage() {
  const features = [
    "Custom AI Model Development",
    "Predictive Analysis Systems",
    "Workflow Automation",
    "Intelligent Data Processing",
    "Machine Learning Integration",
    "Process Optimization",
    "Real-time Monitoring",
    "Automated Reporting",
  ]

  const technologies = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "OpenAI API",
    "Google Cloud AI",
    "Pandas",
    "NumPy",
  ]

  const caseStudies = [
    {
      title: "Ford EV Battery Analysis",
      description: "AI-powered system for analyzing battery capacity data and optimizing PID controller performance",
      results: ["40% improvement in analysis speed", "Enhanced prediction accuracy", "Automated reporting system"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "IIT Ropar Lab Automation",
      description: "Intelligent automation pipeline for streamlining lab operations and faculty coordination",
      results: ["60% reduction in manual tasks", "Improved communication flow", "Real-time progress tracking"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const pricingTiers = [
    {
      name: "Starter",
      price: "$2,500",
      description: "Perfect for small automation projects",
      features: [
        "Basic AI model development",
        "Data analysis & visualization",
        "Simple automation workflows",
        "2 weeks delivery",
        "Email support",
      ],
    },
    {
      name: "Professional",
      price: "$7,500",
      description: "Comprehensive AI solutions for businesses",
      features: [
        "Advanced AI model development",
        "Predictive analytics system",
        "Complex workflow automation",
        "API integration",
        "4-6 weeks delivery",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Large-scale AI transformation projects",
      features: [
        "Multi-model AI systems",
        "Real-time processing",
        "Custom integrations",
        "Training & documentation",
        "Ongoing support",
        "Dedicated project manager",
      ],
    },
  ]

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
              <Link href="/services" className="text-blue-600 hover:text-blue-700 transition-colors">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-blue-600" />
                </div>
                <Badge className="bg-blue-600">AI Systems</Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">AI Systems & Intelligent Agents</h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Transform your engineering workflows with custom AI agents and intelligent automation systems. I develop
                AI solutions that integrate seamlessly with your existing processes, delivering measurable improvements
                in efficiency and accuracy.
              </p>

              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  <span className="text-slate-700">Fast Implementation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Proven Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">Ongoing Support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline">
                  View Case Studies
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="AI Systems Development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What's Included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 text-center border-0 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <p className="font-medium text-slate-900">{feature}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Technologies & Tools</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">TensorFlow</Badge>
                  <Badge variant="outline">PyTorch</Badge>
                  <Badge variant="outline">Scikit-learn</Badge>
                </div>
              </Card>

              <Card className="p-6 text-center">
                <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Data Processing</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Pandas</Badge>
                  <Badge variant="outline">NumPy</Badge>
                  <Badge variant="outline">Python</Badge>
                </div>
              </Card>

              <Card className="p-6 text-center">
                <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">AI Services</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">OpenAI API</Badge>
                  <Badge variant="outline">Google Cloud AI</Badge>
                  <Badge variant="outline">Custom Models</Badge>
                </div>
              </Card>
            </div>
          </section>

          {/* Case Studies */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Case Studies</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden shadow-lg border-0">
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-slate-100">
                    <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <p className="text-slate-600">{study.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-slate-900 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-slate-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Pricing Packages</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <Card
                  key={index}
                  className={`p-8 ${tier.popular ? "ring-2 ring-blue-600 shadow-xl" : "shadow-lg"} border-0 relative`}
                >
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{tier.price}</div>
                    <p className="text-slate-600">{tier.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${tier.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-600 hover:bg-slate-700"}`}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how AI can solve your specific engineering challenges and optimize your processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                View All Services
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
