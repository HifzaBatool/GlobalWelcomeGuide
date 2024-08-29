import React from 'react';
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";
import { Globe, Search, BookOpen, Briefcase, Home, Heart, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Header Section */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white shadow-sm">
        <a className="flex items-center justify-center" href="#">
          <Globe className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            GlobalWelcomeGuide
          </span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#">
            Resources
          </a>
          <a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#">
            Community
          </a>
          <a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#">
            About
          </a>
          <a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#">
            Contact
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-transparent">
              Welcome to Your New Home
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl mb-12">
              GlobalWelcomeGuide connects immigrants with essential resources and support services to help you
              thrive in your new environment.
            </p>
            <div className="w-full max-w-sm mx-auto">
              <form className="flex space-x-2">
                <Input 
                  className="flex-1 border-2 border-blue-200 focus:border-blue-500 transition-colors" 
                  placeholder="Search for resources..." 
                  type="text" 
                />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Language Courses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Find language courses to help you communicate effectively in your new home.</CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700">
                    <Briefcase className="h-5 w-5 mr-2" />
                    Job Search Assistance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Access resources to help you find employment opportunities and build your career.</CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-yellow-50 border-yellow-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-yellow-700">
                    <Home className="h-5 w-5 mr-2" />
                    Housing Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Get help finding suitable accommodation and understanding local housing regulations.</CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <Heart className="h-5 w-5 mr-2" />
                    Healthcare Guidance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Learn about the healthcare system and find medical services in your area.</CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-red-50 border-red-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-700">
                    <Users className="h-5 w-5 mr-2" />
                    Community Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Connect with local communities and find cultural integration programs.</CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-indigo-50 border-indigo-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-indigo-700">
                    <Globe className="h-5 w-5 mr-2" />
                    Legal Assistance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Get information on immigration laws and access legal support services.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-500 to-green-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Welcoming Community</h2>
            <p className="mx-auto max-w-[600px] mb-8">
              Sign up to access personalized resources, connect with others, and receive updates on new opportunities.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 transition-colors">
              Get Started
            </Button>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <p className="text-sm text-gray-300">GlobalWelcomeGuide is dedicated to helping immigrants thrive in their new homes.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-300 transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-300 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Newsletter</h3>
              <p className="text-sm text-gray-300 mb-2">Stay updated with our latest news and services.</p>
              <form className="flex space-x-2">
                <Input className="flex-1" placeholder="Your email" type="email" />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            &copy; 2024 GlobalWelcomeGuide. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
