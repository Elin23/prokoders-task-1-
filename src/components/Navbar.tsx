import { useState } from "react"
import NavLinks from "./NavbarLinks"
import { Link } from "react-router-dom"

type NavLink = {
  label: string
  href: string
}

interface NavbarProps {
  logoSrc: string
  links: NavLink[]
}

export default function Navbar({ logoSrc, links }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full relative z-50">
      <nav className="nav-gradient mx-4 md:mx-16 mt-6 px-6 md:px-10 py-4 md:py-5 rounded-2xl border border-slate-light
          shadow-xl backdrop-blur-md flex items-center justify-between">
        <Link to={"/"} className="flex items-center">
          <img src={logoSrc} alt="logo" className="h-8" />
        </Link>
        <ul className="hidden md:flex gap-4 lg:gap-6 text-charcoal font-medium">
          <NavLinks links={links} />
        </ul>
        <button onClick={() => setOpen(!open)} aria-label="Toggle Menu" className="md:hidden p-2 rounded-lg hover:bg-slate-light transition">
          <div className={`w-7 h-0.5 bg-charcoal transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-7 h-0.5 bg-charcoal my-1 transition-all ${open ? "opacity-0" : ""}`} />
          <div className={`w-7 h-0.5 bg-charcoal transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          {/* NOTE: I know that <div> is not typically a self-closing element, but in React, if a div has no children, it is allowed to be self-closed.
              See React documentation: https://reactjs.org/docs/jsx-in-depth.html#self-closing-tags*/}
        </button>
      </nav>
      <div className="absolute left-0 top-full w-full z-40">
        <ul className={`mx-4 mt-3 p-5 rounded-2xl border shadow-lg nav-gradient backdrop-blur-md flex flex-col gap-5 font-medium text-charcoal transition-opacity duration-200 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <NavLinks links={links} closeMenu={() => setOpen(false)}/>
        </ul>
      </div>
    </header>
  )
}
