import './navbar.css'
import { Link } from 'wouter'

export const Navbar = () => {
  return (
    <div>
      <div className="menu">
        <ul className="menuul">
          <Link href="/">
            <a className="menuitem">Home</a>
          </Link>
          <Link href="/About">
            <a className="menuitem">About</a>
          </Link>
          <Link href="/Services">
            <a className="menuitem">Services</a>
          </Link>
          <Link href="/Blogs">
            <a className="menuitem">Blog</a>
          </Link>
          <Link href="/Contact">
            <a className="menuitem">Contact</a>
          </Link>
        </ul>
        <div className="appointmentbtn">
          <Link href="/Appointment">
            <a className="btn appointment">Make An Appointment</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
