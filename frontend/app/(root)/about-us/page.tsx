import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "About Us | OU Insight Hub",
  description: "Learn about OU Insight Hub, our mission, team, and values.",
}

export default function AboutUsPage() {
  return (
    <div className="container flex flex-col w-full h-full mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mb-16">
        <div className="relative w-24 h-24 mb-6">
          <Image
            src="/placeholder.svg?height=96&width=96"
            alt="OU Insight Hub Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About OU Insight Hub</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Empowering research and innovation through data-driven insights and collaborative knowledge sharing.
        </p>
      </section>

      {/* Main Content Tabs */}
      <Tabs defaultValue="mission" className="max-w-4xl mx-auto mb-16">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="mission">Our Mission</TabsTrigger>
          <TabsTrigger value="story">Our Story</TabsTrigger>
          <TabsTrigger value="team">Our Team</TabsTrigger>
          <TabsTrigger value="values">Our Values</TabsTrigger>
        </TabsList>

        {/* Mission Tab */}
        <TabsContent value="mission" className="mt-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Driving Innovation Through Insights</h2>
              <p className="text-muted-foreground mb-4">
                At OU Insight Hub, we're dedicated to transforming complex data into actionable insights that drive
                research, innovation, and decision-making across the university and beyond.
              </p>
              <p className="text-muted-foreground mb-6">
                Our platform serves as a central repository for research findings, data analytics, and collaborative
                projects, enabling cross-disciplinary cooperation and knowledge exchange.
              </p>
              <Button asChild>
                <Link href="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Data visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </TabsContent>

        {/* Story Tab */}
        <TabsContent value="story" className="mt-6">
          <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4 flex flex-col items-center md:items-start">
                <div className="bg-primary text-primary-foreground font-bold rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  2018
                </div>
                <Separator orientation="vertical" className="h-full hidden md:block" />
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2">Foundation</h3>
                <p className="text-muted-foreground">
                  OU Insight Hub was established as a small initiative to improve data sharing between research
                  departments.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4 flex flex-col items-center md:items-start">
                <div className="bg-primary text-primary-foreground font-bold rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  2020
                </div>
                <Separator orientation="vertical" className="h-full hidden md:block" />
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2">Platform Launch</h3>
                <p className="text-muted-foreground">
                  We launched our first integrated platform, connecting researchers across multiple disciplines and
                  departments.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4 flex flex-col items-center md:items-start">
                <div className="bg-primary text-primary-foreground font-bold rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  2023
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2">Expansion</h3>
                <p className="text-muted-foreground">
                  OU Insight Hub expanded to include partnerships with industry leaders and other academic institutions,
                  broadening our impact and reach.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Team Tab */}
        <TabsContent value="team" className="mt-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Executive Director",
                bio: "With over 15 years in data science and research management, Sarah leads our strategic initiatives.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Prof. Michael Chen",
                role: "Research Director",
                bio: "Michael oversees our research methodologies and ensures academic rigor in all our projects.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dr. Aisha Patel",
                role: "Technology Lead",
                bio: "Aisha brings expertise in AI and machine learning to drive our technological innovations.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="mx-auto relative w-24 h-24 mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">{member.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Values Tab */}
        <TabsContent value="values" className="mt-6">
          <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly seek new ways to analyze data and generate insights that drive progress.",
              },
              {
                title: "Collaboration",
                description: "We believe in the power of diverse perspectives and cross-disciplinary cooperation.",
              },
              {
                title: "Integrity",
                description: "We uphold the highest standards of academic and scientific integrity in all our work.",
              },
              {
                title: "Accessibility",
                description: "We strive to make complex data and insights accessible and useful to all stakeholders.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Contact Section */}
      <section className="bg-muted rounded-xl p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="text-center">
              <Mail className="mx-auto h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Email Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">contact@ouinsighthub.edu</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Phone className="mx-auto h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Call Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">(555) 123-4567</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <MapPin className="mx-auto h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Visit Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">780 Van Vleet Oval, Norman, OK 73019</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

