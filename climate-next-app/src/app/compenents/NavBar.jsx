'use client' // client component, not server-rendered
import Link from "next/link"
import { usePathname } from 'next/navigation'

function NavBar() {
  const path = usePathname(); // hook to check the current path
  return (
    <nav className="NavBar">
      {/* Logo Container */}
      <div className="logo-container">
        {/* Logo Image */}
        <img src="/logo.png" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="menu">
        <li><Link href="/">About</Link></li>
        <li><Link href="/learn" className={path.startsWith('/learn') ? 'active' : null}>Learn</Link></li>
        <li><Link href="/measure" className={path.startsWith('/measure') ? 'active' : null}>Measure</Link></li>
        <li><Link href="/reduce" className={path.startsWith('/reduce') ? 'active' : null}>Reduce</Link></li>
        <li><Link href="/offset" className={path.startsWith('/offset') ? 'active' : null}>Offset</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
