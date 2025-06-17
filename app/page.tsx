import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, ChevronLeft, ChevronRight, Lightbulb, PenTool, Code, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Contact Bar */}
      <div className="bg-white py-2 px-4 md:px-6 flex justify-end items-center text-sm border-b">
        <div className="flex items-center gap-2 text-gray-600">
          <Phone className="w-4 h-4" />
          <span>+1 (312) 994-2444</span>
        </div>
        <Button className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm">
          Book A Meeting
        </Button>
      </div>

      {/* Header/Navigation Bar */}
      <header className="bg-white py-4 px-4 md:px-6 flex items-center justify-between shadow-sm">
        <Link href="#" className="flex items-center gap-2 text-lg font-bold text-gray-800">
          <div className="w-8 h-8 rounded-full border-2 border-gray-800 flex items-center justify-center text-sm font-extrabold">
            W
          </div>
          INDIWORK
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-gray-700 text-sm font-medium">
          <Link href="#" className="hover:text-red-500">
            STRATEGY
          </Link>
          <Link href="#" className="hover:text-red-500">
            DESIGN
          </Link>
          <Link href="#" className="hover:text-red-500">
            DEVELOPMENT
          </Link>
          <Link href="#" className="hover:text-red-500">
            DIGITAL MARKETING
          </Link>
          <Link href="#" className="hover:text-red-500">
            ABOUT US
          </Link>
          <Link href="#" className="hover:text-red-500">
            RESOURCES
          </Link>
          <Link href="#" className="hover:text-red-500">
            CONTACT
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="w-6 h-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <Image
          src="/placeholder.svg?width=1920&height=700"
          alt="City skyline"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10 flex items-center justify-center md:justify-start px-4 md:px-12">
          <div className="max-w-2xl text-white text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">STRATEGY</h1>
            <p className="text-xl md:text-3xl font-semibold mb-6">Project DONE RIGHT first time...</p>
            <p className="text-sm md:text-base mb-8 leading-relaxed">
              Over two decades of experience have taught us that goals can only be achieved by strategy driving them.
              We've helped countless clients draw actionable digital roadmaps, launch new websites, and create the apps
              and experiences that help them compete and win.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base">
                LEARN MORE
              </Button>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md text-base">
                BOOK A MEETING
              </Button>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 rounded-full"
        >
          <ChevronLeft className="w-8 h-8" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 rounded-full"
        >
          <ChevronRight className="w-8 h-8" />
          <span className="sr-only">Next slide</span>
        </Button>
      </section>

      {/* Service Cards Section */}
      <section className="relative -mt-20 md:-mt-24 lg:-mt-32 z-20 px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Strategy Card */}
          <div className="bg-[#2a3240] text-white p-8 flex flex-col items-center text-center rounded-lg shadow-lg">
            <Lightbulb className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Strategy</h3>
            <div className="w-12 h-1 bg-red-500 mt-2" />
          </div>
          {/* Design Card */}
          <div className="bg-[#2a3240] text-white p-8 flex flex-col items-center text-center rounded-lg shadow-lg">
            <PenTool className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Design</h3>
            <div className="w-12 h-1 bg-red-500 mt-2" />
          </div>
          {/* Development Card */}
          <div className="bg-blue-600 text-white p-8 flex flex-col items-center text-center rounded-lg shadow-lg">
            <Code className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Development</h3>
            <div className="w-12 h-1 bg-red-500 mt-2" />
          </div>
          {/* Digital Marketing Card */}
          <div className="bg-[#2a3240] text-white p-8 flex flex-col items-center text-center rounded-lg shadow-lg">
            <LineChart className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
            <div className="w-12 h-1 bg-red-500 mt-2" />
          </div>
        </div>
      </section>

      {/* "Get Your Project Right" Section */}
      <section className="py-16 px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Get Your Project Right
          <br />
          The First Time
        </h2>
        <div className="w-24 h-1.5 bg-red-500 mx-auto" />
      </section>
    </div>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
