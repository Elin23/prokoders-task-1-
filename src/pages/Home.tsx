import { useState, useEffect } from "react"
import logo from '../assets/imgs/logo.png'
import Loader from "../components/ui/Loader";
import CustomCursor from "../components/ui/CustomCursor";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";


function Home() {
  const [loading, setLoading] = useState(true)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections" },
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/res" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen nav-gradient">
        <Loader />
      </div>
    )
  }

  return (
    <div className="max-w-[1600px] mx-auto">
      <CustomCursor />
      <Navbar logoSrc={logo} links={navItems} />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default Home
