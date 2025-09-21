"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code,
  Database,
  Globe,
  Server,
  Smartphone,
  Coffee,
  BookOpen,
  Award,
  Calendar,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    programming: [
      { name: "Java", icon: Coffee, level: 90 },
      { name: "C", icon: Code, level: 70 },
      { name: "JavaScript", icon: Globe, level: 85 },
      { name: "TypeScript", icon: Globe, level: 75 }, // ✅ Added
    ],
    development: [
      { name: "HTML-5/CSS", icon: Globe, level: 90 },
      { name: "React.js", icon: Globe, level: 85 },
      { name: "Next.js", icon: Globe, level: 40 },
      { name: "Node.js", icon: Server, level: 75 },
      { name: "Express.js", icon: Server, level: 75 },
      { name: "Spring Boot", icon: Coffee, level: 60 },
      { name: "Tailwind CSS", icon: Globe, level: 90 },
    ],
    databases: [
      { name: "MySQL", icon: Database, level: 80 },
      { name: "MongoDB", icon: Database, level: 75 },
      { name: "PostgreSQL", icon: Database, level: 80 },
      { name: "Supabase", icon: Database, level: 70 }, // ✅ Added
    ],
    tools: [
      { name: "VS Code", icon: Code, level: 95 },
      { name: "Postman", icon: Globe, level: 85 },
      { name: "GitHub", icon: Github, level: 90 },
      { name: "Vercel", icon: Globe, level: 85 }, // ✅ Added
      { name: "Render", icon: Globe, level: 80 }, // ✅ Added
      { name: "Netlify", icon: Globe, level: 75 }, // ✅ Added
    ],
  };

  const projects = [
    {
      title: "Swiggy Clone App",
      description:
        "A comprehensive food delivery platform with dynamic restaurant listings, filtering options, and order management features.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript"],
      links: [
        { label: "Live Demo", url: "https://swiggy-neon-gamma.vercel.app/" },
        { label: "GitHub", url: "https://github.com/Karthikeyadevarakonda" },
      ],
      date: "Mar 2025",
      featured: true,
    },
    {
      title: "Food Delivery App",
      description:
        "Dynamic and responsive web application with cart management, real-time price updates, and item quantity control.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS"],
      links: [
        {
          label: "Live Demo",
          url: "https://symphonious-bavarois-85ac3a.netlify.app",
        },
        { label: "GitHub", url: "https://github.com/Karthikeyadevarakonda" },
      ],
      date: "June 2024",
      featured: true,
    },
    {
      title: "SalaryGen",
      description:
        "An automated payroll system for managing faculty details, salary rules, deductions, and acquittance reports with role-based access and effective date tracking.",
      technologies: ["PostgreSQL", "SpringBoot", "React.js", "Tailwind CSS"],
      links: [
        { label: "Live Demo", url: "https://salarygen-seven.vercel.app/" },
        {
          label: "GitHub",
          url: "https://github.com/Karthikeyadevarakonda/SalaryGen",
        },
      ],
      date: "Aug 2025",
      featured: true,
    },
    {
      title: "MEDITRACK - Hospital Locator",
      description:
        "Location-based healthcare platform for discovering hospitals and scheduling appointments with intelligent filtering.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      links: [
        {
          label: "Live Demo",
          url: "https://my-hospital-management.netlify.app/",
        },
        {
          label: "GitHub",
          url: "https://github.com/Karthikeyadevarakonda/HospitalManagementAPP",
        },
      ],
      date: "May 2024",
      featured: true,
    },
    {
      title: "Shopify Data Ingestion & Insights Service",
      description:
        "A multi-tenant service that integrates with Shopify APIs to ingest and analyze store data (customers, orders, products), providing a dashboard with key business insights and metrics.",
      technologies: ["Spring Boot", "React.js", "PostgreSQL", "Tailwind CSS"],
      links: [
        { label: "Live Demo", url: "https://xeno-dusky.vercel.app" },
        {
          label: "GitHub",
          url: "https://github.com/Karthikeyadevarakonda/shopify",
        },
      ],
      date: "Sep 2025",
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Karthikeya
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                "home",
                "about",
                "education",
                "experience",
                "projects",
                "skills",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-200 hover:text-blue-600 ${
                    activeSection === section
                      ? "text-blue-600 font-semibold"
                      : "text-slate-600"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-200">
              <div className="flex flex-col space-y-2 pt-4">
                {[
                  "home",
                  "about",
                  "education",
                  "experience",
                  "projects",
                  "skills",
                  "contact",
                ].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-left py-2 px-4 rounded-lg transition-all duration-200 ${
                      activeSection === section
                        ? "bg-blue-100 text-blue-600 font-semibold"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in-up max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                KD
              </div>
            </div>

            <h1 className="text-3xl md:text-7xl font-bold text-slate-800 mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Karthikeya Devarakonda
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Trainer | Developer | Learner
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>

            <div className="animate-bounce">
              <ChevronDown
                size={32}
                className="mx-auto text-slate-400 cursor-pointer"
                onClick={() => scrollToSection("about")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              About Me
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A passionate developer and trainer with expertise in full-stack
              development and a commitment to continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                I'm a dedicated software developer currently pursuing my B.Tech
                in Computer Science Engineering. With hands-on experience in
                Java development and full-stack web technologies, I enjoy
                creating innovative solutions that make a real impact.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed">
                My journey in technology has been driven by curiosity and a
                desire to solve complex problems. I've worked on various
                projects ranging from food delivery platforms to healthcare
                management systems, always striving to deliver high-quality,
                scalable solutions.
              </p>

              <div className="flex flex-wrap gap-3">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  Problem Solver
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                  Team Player
                </Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                  Quick Learner
                </Badge>
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                  Innovative
                </Badge>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-slate-700">
                    Nellore, Andhra Pradesh
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-purple-600" size={20} />
                  <span className="text-slate-700">
                    B.Tech CSE Student (2022-26)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="text-green-600" size={20} />
                  <span className="text-slate-700">
                    Java Developer Intern Experience
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="text-orange-600" size={20} />
                  <span className="text-slate-700">Full-Stack Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Education
            </h2>
            <p className="text-xl text-slate-600">
              My academic journey and qualifications
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-slate-800">
                        B.Tech. Computer Science Engineering
                      </CardTitle>
                      <CardDescription className="text-lg text-blue-600 font-semibold">
                        Narayana Engineering College, Nellore
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-blue-500 text-blue-600"
                    >
                      2022-26
                    </Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-slate-800">
                        Intermediate (12th Grade)
                      </CardTitle>
                      <CardDescription className="text-lg text-purple-600 font-semibold">
                        Sri Chaitanya Junior College
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-purple-500 text-purple-600"
                    >
                      Completed
                    </Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-slate-800">
                        SSC (10th Grade)
                      </CardTitle>
                      <CardDescription className="text-lg text-green-600 font-semibold">
                        Sri Chaitanya English Medium High School
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-green-500 text-green-600"
                    >
                      Completed
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Experience
            </h2>
            <p className="text-xl text-slate-600">
              Professional internships and achievements
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-slate-800">
                      Java Developer Intern
                    </CardTitle>
                    <CardDescription className="text-lg text-blue-600 font-semibold">
                      COINCENT.AI
                    </CardDescription>
                    <p className="text-slate-600 mt-2">
                      Apr 2024 – Jun 2024 | Remote
                    </p>
                  </div>
                  <Briefcase className="text-blue-600" size={32} />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Worked on an Employee Management System web application
                      using the Spring Framework to streamline employee data
                      management.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Built and optimized over 10 RESTful APIs for features like
                      employee creation, updates, and reporting.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Improved the system's performance by 25% through code
                      optimization and debugging.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-slate-800">
                      Java Developer Intern
                    </CardTitle>
                    <CardDescription className="text-lg text-purple-600 font-semibold">
                      CODSOFT
                    </CardDescription>
                    <p className="text-slate-600 mt-2">
                      Mar 2024 – Apr 2024 | Remote
                    </p>
                  </div>
                  <Code className="text-purple-600" size={32} />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Implemented an ATM Interface system using Java, enabling
                      secure and efficient transactions for banking customers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Constructed and tested core features, including balance
                      inquiry, withdrawal, deposit, and fund transfer, reducing
                      transaction time by 30%.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white/50 ">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Projects
            </h2>
            <p className="text-xl text-slate-600">
              Showcasing my technical skills and creativity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 mt-2">
                        {project.date}
                      </CardDescription>
                    </div>
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.links.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant={
                          link.label === "Live Demo" ? "default" : "outline"
                        }
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => window.open(link.url, "_blank")}
                      >
                        <ExternalLink size={14} />
                        {link.label}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Skills
            </h2>
            <p className="text-xl text-slate-600">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card
                key={category}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 capitalize">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skillList.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <skill.icon size={16} className="text-blue-600" />
                            <span className="text-slate-700 font-medium">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm text-slate-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-800">Email</p>
                      <p className="text-slate-600 text-xs sm:text-normal truncate overflow-hidden whitespace-nowrap max-w-full">
                        karthikeyadevarakonda@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                    <Github className="text-purple-600" size={24} />
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-800">GitHub</p>
                      <p className="text-slate-600 text-xs sm:text-normal truncate overflow-hidden whitespace-nowrap max-w-full">
                        github.com/Karthikeyadevarakonda
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                    <Linkedin className="text-green-600" size={24} />
                    <div>
                      <p className="font-semibold text-slate-800">LinkedIn</p>
                      <p className="text-slate-600 text-xs sm:text-normal">
                        Connect with me on LinkedIn
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="my-8" />

                <div className="text-center">
                  <p className="text-slate-600 mb-6">
                    Let's collaborate on something amazing together!
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                    onClick={() =>
                      window.open("mailto:karthikeya8787@gmail.com", "_blank")
                    }
                  >
                    <Mail className="mr-2" size={20} />
                    Send me an email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Karthikeya Devarakonda</h3>
            <p className="text-slate-300">Trainer | Developer | Learner</p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-300 hover:text-white"
              onClick={() =>
                window.open(
                  "https://github.com/Karthikeyadevarakonda",
                  "_blank"
                )
              }
            >
              <Github size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-300 hover:text-white"
              onClick={() =>
                window.open("mailto:karthikeya8787@gmail.com", "_blank")
              }
            >
              <Mail size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-300 hover:text-white"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/devarakondakarthikeya578",
                  "_blank"
                )
              }
            >
              <Linkedin size={20} />
            </Button>
          </div>

          <Separator className="bg-slate-600 mb-8" />

          <p className="text-slate-400">
            © 2024 Karthikeya Devarakonda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
