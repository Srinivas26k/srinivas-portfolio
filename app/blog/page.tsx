import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, ArrowRight, Search, User, Tag } from "lucide-react"
import Image from "next/image"
import { getPosts, getFeaturedPosts, urlFor } from "@/lib/sanity"

export default async function BlogPage() {
  const allBlogPosts = await getPosts()
  const featuredBlogPosts = await getFeaturedPosts()

  const featuredPost = featuredBlogPosts[0] // Assuming only one featured post for simplicity
  const regularPosts = allBlogPosts.filter((post) => post._id !== featuredPost?._id)

  const categories = [
    "All",
    "AI & Engineering",
    "Engineering Tools",
    "Career Insights",
    "AI Development",
    "Aerospace",
    "Business",
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
              <a href="/blog" className="text-blue-600 font-medium">
                Blog
              </a>
              <a href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">
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
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Engineering Insights & AI Perspectives
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Exploring the intersection of mechanical engineering, artificial intelligence, and modern technology.
              Sharing insights from industry experience and academic research.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input placeholder="Search articles..." className="pl-10 py-3" />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 px-8">Search</Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="flex items-center space-x-2"
              >
                <Tag className="w-4 h-4" />
                <span>{category}</span>
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <section className="mb-16">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-blue-600 font-semibold">Featured Article</span>
              </div>

              <Card className="overflow-hidden shadow-xl border-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full bg-gradient-to-br from-blue-100 to-slate-100">
                    <Image
                      src={urlFor(featuredPost.mainImage).url() || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600">{featuredPost.categories?.[0]?.title || "Uncategorized"}</Badge>
                    </div>
                  </div>

                  <CardHeader className="p-8">
                    <CardTitle className="text-2xl lg:text-3xl mb-4">{featuredPost.title}</CardTitle>
                    <p className="text-slate-600 mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>

                    <div className="flex items-center space-x-6 text-sm text-slate-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author?.name || "Srinivas Nampalli"}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags?.map((tag: string, idx: number) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardHeader>
                </div>
              </Card>
            </section>
          )}

          {/* Regular Posts Grid */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post._id} className="overflow-hidden shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-slate-100">
                    <Image src={urlFor(post.mainImage).url() || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white text-slate-700">{post.categories?.[0]?.title || "Uncategorized"}</Badge>
                    </div>
                  </div>

                  <CardHeader className="p-6">
                    <CardTitle className="text-lg mb-3 line-clamp-2">{post.title}</CardTitle>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags?.slice(0, 3).map((tag: string, idx: number) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to get the latest insights on engineering, AI, and technology trends delivered directly to your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="bg-white text-slate-900 border-0" />
              <Button className="bg-white text-blue-600 hover:bg-slate-100 whitespace-nowrap">Subscribe</Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              No spam, unsubscribe at any time. Join 500+ engineers and AI enthusiasts.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
