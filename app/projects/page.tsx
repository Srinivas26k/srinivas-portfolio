import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ExternalLink, Github, Calendar, Filter, Search, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getProjects, getFeaturedProjects } from "@/lib/sanity"
import { urlFor } from "@/lib/sanity"

export default async function ProjectsPage() {
  const [allProjects, featuredProjects] = await Promise.all([getProjects(), getFeaturedProjects()])

  const regularProjects = allProjects.filter((project: any) => !project.featured)
  const categories = ["All", "AI Systems", "CAD Design", "Web Development"]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "ai-systems":
        return "bg-blue-600"
      case "cad-design":
        return "bg-green-600"
      case "web-development":
        return "bg-purple-600"
      default:
        return "bg-slate-600"
    }
  }

  const formatCategory = (category: string) => {
    switch (category) {
      case "ai-systems":
        return "AI Systems"
      case "cad-design":
        return "CAD Design"
      case "web-development":
        return "Web Development"
      default:
        return category
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
              <Link href="/services" className="text-slate-600 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="/projects" className="text-blue-600 font-medium">
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
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Project Portfolio</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Real-world engineering solutions that demonstrate the power of combining traditional mechanical expertise
              with modern AI and web technologies.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input placeholder="Search projects..." className="pl-10 py-3" />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 px-8">Search</Button>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="flex items-center space-x-2"
                >
                  <Filter className="w-4 h-4" />
                  <span>{category}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <section className="mb-20">
              <div className="flex items-center space-x-2 mb-8">
                <Star className="w-6 h-6 text-yellow-500" />
                <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {featuredProjects.map((project: any) => (
                  <Card
                    key={project._id}
                    className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-shadow"
                  >
                    <div className="relative h-64 bg-gradient-to-br from-blue-100 to-slate-100">
                      {project.mainImage ? (
                        <Image
                          src={urlFor(project.mainImage).width(500).height(300).url() || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <Image
                          src="/placeholder.svg?height=300&width=500"
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      )}
                      <div className="absolute top-4 left-4">
                        <Badge className={getCategoryColor(project.category)}>{formatCategory(project.category)}</Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant={project.status === "completed" ? "default" : "secondary"}>
                          {project.status === "completed" ? "Completed" : "In Progress"}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-yellow-500">Featured</Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                          <div className="flex items-center space-x-4 text-sm text-slate-500">
                            <span>{project.company}</span>
                            <span>•</span>
                            <span>{project.year}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-slate-600 mb-4">{project.description}</p>

                      {project.results && project.results.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-slate-900 mb-2">Key Results:</h4>
                          <ul className="text-sm text-slate-600 space-y-1">
                            {project.results.slice(0, 3).map((result: string, idx: number) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies?.slice(0, 4).map((tech: string, idx: number) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        {project.githubUrl && (
                          <Button size="sm" variant="outline" asChild>
                            <Link href={project.githubUrl}>
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* All Projects Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">All Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularProjects.map((project: any) => (
                <Card
                  key={project._id}
                  className="overflow-hidden shadow-lg border-0 hover:shadow-xl transition-shadow"
                >
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
                      <Badge className={getCategoryColor(project.category)}>{formatCategory(project.category)}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant={project.status === "completed" ? "default" : "secondary"}>
                        {project.status === "completed" ? "Completed" : "In Progress"}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                          <span>{project.company}</span>
                          <span>•</span>
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-slate-600 mb-4 text-sm line-clamp-3">{project.description}</p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies?.slice(0, 3).map((tech: string, idx: number) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies && project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.githubUrl}>
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{allProjects.length}+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">5</div>
                <div className="text-slate-600">Industry Partners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-slate-600">Technology Domains</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-slate-600">Client Satisfaction</div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your engineering vision to life with the perfect blend of traditional expertise
              and modern technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
                <Calendar className="w-5 h-5 mr-2" />
                Discuss Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
