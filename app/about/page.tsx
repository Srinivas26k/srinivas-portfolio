import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { GraduationCap, Briefcase, Award, MapPin, Calendar, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const skills = [
    { name: "Mechanical Engineering", level: 95, category: "Core" },
    { name: "AI & Machine Learning", level: 88, category: "AI" },
    { name: "CAD/CAM Design", level: 92, category: "Design" },
    { name: "Python Programming", level: 85, category: "Programming" },
    { name: "Frontend Development", level: 80, category: "Programming" },
    { name: "Data Analysis", level: 87, category: "AI" },
    { name: "Project Management", level: 83, category: "Management" },
    { name: "Technical Writing", level: 90, category: "Communication" },
  ]

  const experience = [
    {
      title: "Freelance Consultant",
      company: "Self-Employed",
      period: "Jan 2024 - Present",
      location: "Remote",
      description:
        "Providing AI systems development, CAD/CAM design, and frontend development services to automotive, aerospace, and technology sectors.",
      achievements: [
        "Delivered 15+ successful projects",
        "Maintained 100% client satisfaction rate",
        "Specialized in AI-powered engineering solutions",
      ],
    },
    {
      title: "Executive Assistant | Prof. Dhananjay Lab",
      company: "Indian Institute of Technology, Ropar",
      period: "Mar 2025 - May 2025",
      location: "Rupnagar, Punjab, India",
      description:
        "Developed automation pipelines and web applications for national-level education design initiative.",
      achievements: [
        "Built lightweight automation pipeline",
        "Created internal web applications",
        "Integrated AI-based reporting tools",
      ],
    },
    {
      title: "Project Intern",
      company: "Ford Motor Company",
      period: "Apr 2024 - May 2024",
      location: "Remote",
      description: "Contributed to EV engineering project focused on battery technology and control systems.",
      achievements: [
        "Analyzed battery chemistry data",
        "Optimized PID controller performance",
        "Delivered data visualization solutions",
      ],
    },
    {
      title: "Intern",
      company: "GE Aerospace",
      period: "Oct 2023 - Nov 2023",
      location: "Remote",
      description:
        "Conducted comparative analysis of alternative energy sources for next-generation aerospace propulsion systems.",
      achievements: [
        "Researched propulsion system alternatives",
        "Analyzed bypass and compression ratios",
        "Delivered technical presentation",
      ],
    },
  ]

  const education = [
    {
      degree: "Associate's Degree in Artificial Intelligence",
      institution: "Indian Institute of Technology, Ropar",
      period: "2024 - 2025",
      status: "Current",
      description: "Specializing in AI applications for engineering and automation systems.",
    },
    {
      degree: "Professional Diploma in Mechanical Engineering",
      institution: "European Open University",
      period: "2023",
      status: "Completed",
      description: "Advanced mechanical engineering principles and applications.",
    },
    {
      degree: "Mechanical Engineering",
      institution: "TKR College of Engineering and Technology",
      period: "2020 - 2023",
      status: "Completed",
      description: "Foundation in mechanical engineering with focus on design and manufacturing.",
    },
  ]

  const certifications = [
    "Code Vipassana Season 10 - AI Agents (GDG Cloud Kochi)",
    "Ford's EV Engineering Certification",
    "GE Aerospace - Explore Engineering",
    "SOLIDWORKS Professional Certification",
    "AutoCAD Mechanical Certification",
    "MATLAB Onramp Certification",
    "Machine Learning and Python Course (Verzeo)",
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
              <Link href="/about" className="text-blue-600 font-medium">
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

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-5 h-5 text-slate-500" />
                <span className="text-slate-600">Hyderabad, Telangana, India</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">About Me</h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                My engineering journey began in the tangible world of engines and airframes, with hands-on experience at
                industry leaders like Ford Motor Company, GE Aerospace, and the Defence Research and Development
                Laboratory (DRDL).
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At IIT Ropar, I discovered my passion for bridging brilliant engineering concepts with intelligent,
                automated execution. Today, I channel that passion into helping businesses innovate through AI-driven
                solutions that solve real-world engineering challenges.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge className="bg-blue-100 text-blue-800">Mechanical Engineer</Badge>
                <Badge className="bg-green-100 text-green-800">AI Specialist</Badge>
                <Badge className="bg-purple-100 text-purple-800">Freelance Consultant</Badge>
                <Badge className="bg-orange-100 text-orange-800">IIT Ropar</Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <Button variant="outline">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View LinkedIn Profile
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-slate-100 shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Srinivas Nampalli - Professional Portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Professional Story */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Professional Story</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="p-6 border-l-4 border-l-blue-500">
                <CardContent className="pt-0">
                  <h3 className="text-xl font-semibold mb-3">The Foundation</h3>
                  <p className="text-slate-600">
                    Started with traditional mechanical engineering, gaining hands-on experience in automotive and
                    aerospace industries through internships at Ford, GE Aerospace, and DRDO.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 border-l-4 border-l-green-500">
                <CardContent className="pt-0">
                  <h3 className="text-xl font-semibold mb-3">The Pivot</h3>
                  <p className="text-slate-600">
                    Discovered the power of AI at IIT Ropar, where I developed automation pipelines and realized the
                    potential of combining traditional engineering with intelligent systems.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 border-l-4 border-l-purple-500">
                <CardContent className="pt-0">
                  <h3 className="text-xl font-semibold mb-3">The Mission</h3>
                  <p className="text-slate-600">
                    Now helping businesses bridge the gap between mechanical engineering excellence and AI innovation,
                    delivering solutions that optimize workflows and drive results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Experience Timeline */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Experience Timeline</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500 shadow-lg">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <p className="text-blue-600 font-medium mt-1">{exp.company}</p>
                      </div>
                      <div className="text-right mt-2 lg:mt-0">
                        <Badge variant="outline">{exp.period}</Badge>
                        <p className="text-sm text-slate-500 mt-1">{exp.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{exp.description}</p>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            <span className="text-slate-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {skill.category}
                      </Badge>
                    </div>
                    <span className="text-slate-500 font-medium">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <p className="text-green-600 font-medium mt-1">{edu.institution}</p>
                        <p className="text-slate-600 mt-2">{edu.description}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={edu.status === "Current" ? "default" : "secondary"}>{edu.status}</Badge>
                        <p className="text-sm text-slate-500 mt-1">{edu.period}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Certifications & Achievements</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700">{cert}</span>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Values & Approach */}
          <section className="bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">My Approach & Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Problem-Solving First</h3>
                <p className="text-slate-600">
                  I focus on understanding the core engineering challenge before proposing AI-driven solutions. Every
                  project starts with deep problem analysis.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
                <p className="text-slate-600">
                  Staying current with both traditional engineering practices and cutting-edge AI technologies through
                  continuous education and research.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Delivery</h3>
                <p className="text-slate-600">
                  Delivering robust, scalable solutions that meet both technical requirements and business goals, with
                  ongoing support and optimization.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
